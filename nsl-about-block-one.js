/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nsl-block-layout.js";

/**
 * `nsl-about-block-one`
 * 
 * @demo index.html
 * @element nsl-about-block-one
 */
export class NSLAboutBlockOne extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-about-block-one";
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
        background-color: rgb(26 26 26 / var(--tw-bg-opacity, 1));
        border-top: 1px solid rgb(255 255 255 / 0.1);
        border-bottom: 1px solid rgb(255 255 255 / 0.1);
      }

      .layout {
        margin-bottom: 25px;
        margin-top: 15px;
      }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 50px;
        padding-left: 50px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="row">
            <nsl-block-layout class="layout"
                title="OUR STORY"
                subtitle="Started with throwers. Growing with purpose."
                pone="NeuralShot Labs was founded in November 2025 in Maryland with a clear mission: create intelligent tools that actually move the needle."
                ptwo="We began by building solutions for track & field throwers — because that’s where we saw the biggest gap between available technology and real athlete needs."
                pthree="That focus continues today, while we also help businesses automate repetitive work and improve performance using practical AI.">
            </nsl-block-layout>

            <nsl-cards class="card-one" style="width: 350px; height: 225px;"
                imageSize="55"
                image="images/lightning-bolt.png"
                title="Founded 2025 - Maryland"
                content="A focused AI & software company that believes in practical intelligence over hype.">
            </nsl-cards>
        </div>
      `;
  }
}

globalThis.customElements.define(NSLAboutBlockOne.tag, NSLAboutBlockOne);