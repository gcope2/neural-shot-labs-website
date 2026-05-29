/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nsl-block-layout`
 * 
 * @demo index.html
 * @element nsl-block-layout
 */
export class NSLBlockLayout extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-block-layout";
  }

  constructor() {
    super();
    this.title = "";
    this.subtitle = "";
    this.pone = "";
    this.ptwo = "";
    this.pthree = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
        title: { type: String },
        subtitle: { type: String },
        pone: { type: String },
        ptwo: { type: String },
        pthree: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }

      .wrapper {
        padding-left: 500px;
      }

      .column {
        display: flex;
        flex-direction: column;
        max-width: 600px;
      }
      .title {
        color: #E31837;
        margin-bottom: 0;
        letter-spacing: 3px;
        font-weight: normal;
      }
      .subtitle {
        margin-top: 7px;
        font-size: 40px;
        margin-bottom: 50px;
      }
      .paragraph-one, .paragraph-two, .paragraph-three {
        color: #D3D3D3;
        font-weight: normal;
        margin-bottom: 10px;
      }

      .wrapper {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="wrapper">
          <div class="column">
            <h6 class="title">${this.title}</h6>
            <h2 class="subtitle">${this.subtitle}</h2>

            <h6 class="paragraph-one">${this.pone}</h6>
            ${this.ptwo ? html`<h6 class="paragraph-two">${this.ptwo}</h6>` : ''}
            ${this.pthree ? html`<h6 class="paragraph-three">${this.pthree}</h6>` : ''}
          </div>
        </div>
    `;
  }
}

globalThis.customElements.define(NSLBlockLayout.tag, NSLBlockLayout);