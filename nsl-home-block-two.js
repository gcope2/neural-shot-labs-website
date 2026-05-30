/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nsl-cards.js";
import "./nsl-block-layout.js";

/**
 * `nsl-home-block-two`
 * 
 * @demo index.html
 * @element nsl-home-block-two
 */
export class NSLHomeBlockTwo extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-home-block-two";
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
        background-color: rgb(26 26 26 / var(--tw-bg-opacity, 1));
        border-top: 1px solid rgb(255 255 255 / 0.1);
        border-bottom: 1px solid rgb(255 255 255 / 0.1);
      }

      .column {
        display: flex;
        flex-direction: column;
        padding-left: 500px;
        padding-top: 30px;
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
        margin-bottom: 35px;
      }
      .paragraph-one {
        color: #D3D3D3;
        font-weight: normal;
        margin-bottom: 10px;
      }

      .paragraph-two {
        color: #D3D3D3;
        font-weight: normal;
        text-align: center;
        max-width: 600px;
      }
      .under-text {
        display: flex;
        justify-content: center;
        padding-top: 20px;
        margin-bottom: 25px;
      }

      .cards {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 30px;
        margin-top: 20px;
      }

      .layout {
        margin-top: 15px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <nsl-block-layout class="layout"
            title="WHAT WE DO"
            subtitle="Building focused intelligent systems across a few key areas."
            pone="Everything we work on follows the same philosophy: start with real user needs, use the right level of AI, and ship tools that people rely on.">
        </nsl-block-layout>

        <div class="cards">
            <nsl-cards class="card-one" style="width: 360px; height: 375px;" 
                imageSize="75"
                image="images/red-weight.png" 
                title="Sports & Performance Tech" 
                content="Our starting point. We’re building specialized tools that help throwers and coaches get better data, clearer feedback, and measurable progress — without adding complexity.">
            </nsl-cards>

            <nsl-cards class="card-two" style="width: 360px; height: 375px;" 
                imageSize="75"
                image="images/red-laptop.png" 
                title="Custom AI & Mobile Tools" 
                content="We design and build custom mobile and web applications that incorporate computer vision, data analysis, or lightweight machine learning — always scoped tightly to the actual problem.">
            </nsl-cards>

            <nsl-cards class="card-three" style="width: 360px; height: 375px;" 
                imageSize="75"
                image="images/red-light.png" 
                title="AI Strategy & Advisory" 
                content="For organizations exploring AI but tired of vague promises, we offer focused consulting — helping teams identify high-ROI use cases, evaluate approaches, and build internal capability without over-engineering.">
            </nsl-cards>
        </div>

        <div class="under-text">
            <h6 class="paragraph-two">We’re deliberately focused. We’d rather do a few things exceptionally well than spread ourselves thin across every possible AI trend.</h6>
        </div>
      `;
  }
}

globalThis.customElements.define(NSLHomeBlockTwo.tag, NSLHomeBlockTwo);