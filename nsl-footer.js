/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nsl-footer`
 * 
 * @demo index.html
 * @element nsl-footer
 */
export class NSLFooter extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-footer";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: #050505;
      }

      .divider {
        color: #2C2C2C;
        width: 45%;
      }

      .column {
        display: flex;
        flex-direction: column;
        font-size: 8px;
        color: #7E7E7E;
        text-align: center;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <hr class="divider">
        
        <div class="column">
            <h6>NeuralShot Labs LLC • Sunderland, Maryland</h6>
            <h6>Copyright © 2026 NeuralShot Labs LLC. All rights reserved.</h6>
        </div>
      `;
  }
}

globalThis.customElements.define(NSLFooter.tag, NSLFooter);