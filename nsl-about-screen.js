/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nsl-about-block-one.js";
import "./nsl-about-block-two.js";

/**
 * `nsl-about-screen`
 * 
 * @demo index.html
 * @element nsl-about-screen
 */
export class NSLAboutScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-about-screen";
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
        display: block;
        background-color: #050505;
      }

      .title {
        font-size: 75px;
        width: 750px;
      }
      .subtitle {
        font-size: 27px;
        color: #E31837;
      }
      .column {
        padding-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 25px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="column">
          <h1 class="title">We build practical AI. We help others do the same.</h1>
          <h4 class="subtitle">AI-Powered Solutions for Performance and Productivity</h4>
        </div>

        <nsl-about-block-one></nsl-about-block-one>

        <nsl-about-block-two></nsl-about-block-two>
        
      `;
  }
}

globalThis.customElements.define(NSLAboutScreen.tag, NSLAboutScreen);