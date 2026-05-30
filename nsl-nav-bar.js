/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nsl-nav-bar`
 * 
 * @demo index.html
 * @element nsl-nav-bar
 */
export class NSLNavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-nav-bar";
  }

  constructor() {
    super();
    this.navItems = [];
    this._loadMenu();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      navItems: { type: Array },
      currentScreen: { type: String },
    };
  }

  async _loadMenu() {
    try {
      const res = await fetch('/api/menu');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      this.navItems = (data.items || data).filter(item => item.id !== "home");
      this.requestUpdate();
    } catch (e) {
      console.warn("Failed to load /api/menu, falling back to local outline.js", e);
      try {
        const outline = await import('./outline.js');
        const data = outline.default || outline;
        this.navItems = (data.items || data).filter(item => item.id !== "home");
        this.requestUpdate();
      } catch (err) {
        console.error("Failed to load local outline.js", err);
        this.navItems = [];
      }
    }
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        background: rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(10px);

        border-bottom: 1px solid rgba(255,255,255,0.06);
      }

      .top-row-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 5px 7px;

        margin: 0 auto;
      }

      .home-image {
        cursor: pointer;
        height: 75px;
        padding-left: 20px;
        width: auto;

        transition:
        filter 0.25s ease,
        transform 0.25s ease;
      }
      .home-image:hover {
        filter: drop-shadow(0 0 8px #E31837);
        transform: scale(1.03);
      }

      .nav-buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 25px;
        gap: 35px;
      }

      .nav-item {
        position: relative;
        color: white;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.3px;

        cursor: pointer;

        padding: 8px 0;

        transition:
            color 0.25s ease,
            transform 0.25s ease;
      }

      .nav-item::before {
        content: "";

        position: absolute;

        left: 0;
        top: 100%;

        width: 100%;
        height: 12px;

        background: transparent;
     }

      .nav-item:hover,
      .nav-item.active {
        color: #E31837;
      }

      .dropdown {
        position: absolute;

        top: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);

        background: rgba(10,10,10,0.92);
        backdrop-filter: blur(14px);

        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 12px;

        display: none;
        flex-direction: column;

        min-width: 170px;

        padding: 6px;

        box-shadow:
            0 10px 30px rgba(0,0,0,0.35);

        z-index: 100;
      }

      .dropdown a {
        color: white;

        padding: 10px 12px;

        text-decoration: none;

        font-size: 14px;
        font-weight: 500;

        border-radius: 8px;

        transition:
            background 0.2s ease,
            color 0.2s ease;
     }

      .nav-item:hover .dropdown {
        display: flex;
      }

      .dropdown a:hover {
        background: rgba(255,255,255,0.06);
        color: #E31837;
     }

      .dropdown a.active {
        color: #E31837;
      }

     .nav-item::after {
        content: "";

        position: absolute;
        left: 0;
        bottom: -4px;

        width: 0%;
        height: 2px;

        background: #E31837;

        transition: width 0.25s ease;
     }
     .nav-item:hover::after {
        width: 100%;
     }

      .divider {
        color: #2C2C2C;
        width: 100%;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="top-row-wrapper">
            <a title="Home Button" href="?page=home" @click=${this._goHome}>
            <img class="home-image" src="/images/website-home-button-logo-png.png" alt="Neural Shot Labs Logo">
            </a>

            <div class="nav-buttons">
            ${this.navItems.map(item => {
              const active = this._isActiveNav(item);
              return html`
                <div class="nav-item ${active ? 'active' : ''}">
                  <span title="${item.title} Button" @click=${() => this._navigateTo(item.slug)}>${item.title}</span>
                  ${item.children ? html`
                    <div class="dropdown">
                      ${item.children.map(child => html`
                        <a class="${this.currentScreen === child.slug ? 'active' : ''}" title="${child.title} Button" href="?page=${child.slug}" 
                        @click=${(e) => this._navigateTo(child.slug, e)}>
                        ${child.title}
                        </a>
                      `)}
                    </div>
                  ` : ''}
                </div>
              `;
            })}
            </div>
        </div>

        <hr class="divider">
      `;
  }

  _navigateTo(screen, e = null) {
    if (e) e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate', { 
      detail: { screen }, 
      bubbles: true, 
      composed: true 
    }));
  }

  _isActiveNav(item) {
    if (item.slug === this.currentScreen) return true;
    if (item.children?.some(child => child.slug === this.currentScreen)) return true;
    return false;
  }

  _goHome(e) {
    e.preventDefault();
    this._navigateTo('home');
  }

}

globalThis.customElements.define(NSLNavBar.tag, NSLNavBar);