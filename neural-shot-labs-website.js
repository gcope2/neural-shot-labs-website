/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nsl-home-screen.js";
import "./nsl-about-screen.js";
import "./nsl-contact-screen.js";
import "./nsl-what-we-do-screen.js";
import "./nsl-nav-bar.js";

/**
 * `neural-shot-labs-website`
 * 
 * @demo index.html
 * @element neural-shot-labs-website
 */
export class NeuralShotLabsWebsite extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "neural-shot-labs-website";
  }

  constructor() {
    super();
    this.currentScreen = 'home';

    this._handleRouteChange();
    window.addEventListener('popstate', () => this._handleRouteChange());
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currentScreen: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <nsl-nav-bar @navigate=${this._handleNavigation}></nsl-nav-bar>

        <div>
        ${this.currentScreen === 'home' ? html`<nsl-home-screen></nsl-home-screen>` : ''}
        ${this.currentScreen === 'about' ? html`<nsl-about-screen></nsl-about-screen>` : ''}
        ${this.currentScreen === 'contact' ? html`<nsl-contact-screen></nsl-contact-screen>` : ''}
        ${this.currentScreen === 'what-we-do' ? html`<nsl-what-we-do-screen></nsl-what-we-do-screen>` : ''}
      </div>
      `;
  }

  _handleRouteChange() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    if (page && ['home', 'about', 'contact', 'what-we-do'].includes(page)) {
      this.currentScreen = page;
    } else {
      this.currentScreen = 'home';
      window.history.replaceState({}, '', '?page=home');
    }
  }

  _handleNavigation(e) {
    const screen = e.detail.screen;
    this.currentScreen = screen;
    window.history.pushState({}, '', `?page=${screen}`);
  }

}

globalThis.customElements.define(NeuralShotLabsWebsite.tag, NeuralShotLabsWebsite);