/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nsl-cards`
 * 
 * @demo index.html
 * @element nsl-cards
 */
export class NSLCards extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-cards";
  }

  constructor() {
    super();
    this.title = "";
    this.content = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      content: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        margin: 0;
        padding: 0;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: left;
        background-color: #1E1E1E;
        border: 1px solid rgb(255 255 255 / 0.1);
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }

      .title {
        font-size: 20px;
        padding-left: 20px;
        padding-right: 20px;
      }
      .content {
        font-size: 16px;
        padding-left: 20px;
        padding-right: 20px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="card">
          <h3 class="title">${this.title}</h3>
          <p class="content">${this.content}</p>
        </div>
      `;
  }
}

globalThis.customElements.define(NSLCards.tag, NSLCards);