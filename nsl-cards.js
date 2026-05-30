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
    this.image = "";
    this.imageSize = "80";
    this.first = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      content: { type: String },
      image: { type: String },
      imageSize: { type: String },
      first: { type: String },
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
        justify-content: left;
        align-items: left;
        text-align: left;
        width: 100%;
        height: 100%;
        background-color: #1E1E1E;
        border: 1px solid rgb(255 255 255 / 0.1);
        border-radius: 20px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-sizing: border-box;
      }
      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        filter: drop-shadow(0 0 2px #E31837);
      }
      .card:hover img {
        filter: drop-shadow(0 0 10px rgba(227, 24, 55, 0.65));
      }

      .title {
        font-size: 25px;
        padding: 0 20px;
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .card img + .title {
        margin-top: 5px;
      }
      .content {
        font-size: 17px;
        padding: 0 20px;
        letter-spacing: 1px;
        margin-top: 10px;
      }
      .card img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        align-self: center;
        margin: 0 0 10px;
        padding-top: 10px;
      }

      .first-text {
        color: #E31837;
        margin-bottom: 0;
        letter-spacing: 3px;
        font-weight: normal;
        padding: 0 20px;
        font-size: 14px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="card">
          ${this.image ? html`<img src="${this.image}" alt="${this.title}" style="width: ${this.imageSize}px; height: ${this.imageSize}px;">` : ''}
          ${this.first ? html`<h6 class="first-text">${this.first}</h6>` : ''}
          <h3 part="title" class="title">${this.title}</h3>
          <p class="content">${this.content}</p>
          <slot></slot>
        </div>
      `;
  }
}

globalThis.customElements.define(NSLCards.tag, NSLCards);