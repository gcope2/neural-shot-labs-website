/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nsl-about-block-two`
 * 
 * @demo index.html
 * @element nsl-about-block-two
 */
export class NSLAboutBlockTwo extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-about-block-two";
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

      .column {
        margin-bottom: 25px;
        margin-top: 15px;
      }

      .title {
        text-align: center;
        font-size: 40px;
      }

      .cards {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 30px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="column">
            <h1 class="title">How We Work</h1>

            <div class="cards">
                <nsl-cards class="card-one" style="height: 250px; width: 250px;"
                    title="Practical First"
                    content="We prioritize solutions that work in the real world over impressive-looking demos."
                ></nsl-cards>
                <nsl-cards class="card-two" style="height: 250px; width: 250px;"
                    title="Results Driven"
                    content="Every project is measured by clear outcomes — whether that’s added distance for throwers or hours saved for teams."
                ></nsl-cards>
                <nsl-cards class="card-three" style="height: 250px; width: 250px;"
                    title="Focused & Honest"
                    content="We stay narrow so we can go deep. We only take on work where we can deliver meaningful impact."
                ></nsl-cards>
            </div>
        </div>
      `;
  }
}

globalThis.customElements.define(NSLAboutBlockTwo.tag, NSLAboutBlockTwo);