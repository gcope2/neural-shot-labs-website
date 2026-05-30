/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nsl-what-block-one.js";

/**
 * `nsl-what-we-do-screen`
 * 
 * @demo index.html
 * @element nsl-what-we-do-screen
 */
export class NSLWhatWeDoScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-what-we-do-screen";
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
        width: 850px;
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
          <h1 class="title">We solve real problems with practical AI.</h1>
          <h4 class="subtitle">Sports Performance Tools • Business Automation • AI Implementation</h4>
        </div>

        <nsl-what-block-one class="block-one"></nsl-what-block-one>
      `;
  }
}

globalThis.customElements.define(NSLWhatWeDoScreen.tag, NSLWhatWeDoScreen);