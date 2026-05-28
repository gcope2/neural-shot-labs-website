/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nsl-home-block-three`
 * 
 * @demo index.html
 * @element nsl-home-block-three
 */
export class NSLHomeBlockThree extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-home-block-three";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
        background-color: #050505;
      }

      .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        max-width: 520px;
      }
      .title {
        color: #E31837;
        margin-bottom: 0;
        letter-spacing: 3px;
        font-weight: normal;
      }
      .subtitle {
        margin-top: 7px;
        font-size: 55px;
        margin-bottom: 25px;
      }
      .paragraph-one {
        color: #D3D3D3;
        font-weight: normal;
        margin-bottom: 10px;
      }
      .paragraph-two {
        color: #7E7E7E;
        font-weight: normal;
        font-size: 15px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="column">
          <h6 class="title">STAY IN THE LOOP</h6>
          <h2 class="subtitle">Get meaningful updates only.</h2>
          <h6 class="paragraph-one">We move deliberately. Join the list if you want to hear about new projects, tools we’re shipping, or opportunities to work together. No noise.</h6>
        
          <div class="email-form">
            
          </div>

          <h6 class="paragraph-two">Unsubscribe anytime. We only send updates that matter.</h6>
        </div>
    `;
  }
}

globalThis.customElements.define(NSLHomeBlockThree.tag, NSLHomeBlockThree);