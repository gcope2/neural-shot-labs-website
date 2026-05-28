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
        align-items: center;
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
        line-height: 1.05;
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

      .email-input,
        .join-button {
        box-sizing: border-box;
     }
      .email-form {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
      }
     .email-input {
        width: min(340px, 90vw);
        padding: 22px 28px;
        border-radius: 24px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.04);
        color: white;
        font-size: 20px;
        outline: none;
        transition:
            border 0.25s ease,
            box-shadow 0.25s ease;
     }
     .email-input:focus {
        border: 1px solid rgba(227,24,55,0.7);
        box-shadow:
            0 0 18px rgba(227,24,55,0.18);
     }
     .email-input::placeholder {
        color: rgba(255,255,255,0.35);
     }
     .join-button {
        padding: 22px 40px;
        border: none;
        border-radius: 24px;
        background: white;
        color: black;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        transition:
            transform 0.2s ease,
            background 0.2s ease;
     }
     .join-button:hover {
        transform: translateY(-2px);
        background: #f2f2f2;
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
            <input type="email" placeholder="your@email.com" class="email-input"/>

            <button class="join-button">Join</button>
          </div>

          <h6 class="paragraph-two">Unsubscribe anytime. We only send updates that matter.</h6>
        </div>
    `;
  }

}

globalThis.customElements.define(NSLHomeBlockThree.tag, NSLHomeBlockThree);