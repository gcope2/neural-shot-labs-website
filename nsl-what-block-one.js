/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nsl-what-block-one`
 * 
 * @demo index.html
 * @element nsl-what-block-one
 */
export class NSLWhatBlockOne extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-what-block-one";
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

      .card-block {
        padding-bottom: 25px;
        padding-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
      }
      .card-rows {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
      }

      .inline-cards {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 20px;
      }

      .inline-cards nsl-cards::part(title) {
        color: #E31837;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="card-block">
          <div class="card-rows">
            <nsl-cards class="card-one" style="width: 440px; height: 250px;"
              first="ATHLETES & SPORTS"
              title="Sports Performance"
              content="We build specialized mobile apps and AI-powered tools for track & field throwers. Our goal is to help athletes train smarter, analyze technique better, and throw farther.">
            </nsl-cards>

            <nsl-cards class="card-two" style="width: 440px; height: 250px;"
              first="BUSINESSES & TEAMS"
              title="Business Solutions"
              content="We help organizations automate repetitive tasks, build intelligent agents, and create custom prompt libraries that dramatically improve productivity and efficiency.">
            </nsl-cards>
          </div>

            <nsl-cards class="card-three" style="width: 900px; height: 300px;"
                title="NeuralShot AI Automation Framework"
                content="Our practical 5-stage process for turning repetitive work into measurable results.">
                
                <div class="inline-cards">
                    <nsl-cards class="card-four" style="width: 225px; height: 130px;"
                        title="01" 
                        content="Review & Prioritize">
                    </nsl-cards>

                    <nsl-cards class="card-five" style="width: 225px; height: 130px;"
                        title="02"
                        content="Iterate & Prototype">
                    </nsl-cards>

                    <nsl-cards class="card-six" style="width: 225px; height: 130px;"
                        title="03"
                        content="Pilot">
                    </nsl-cards>

                    <nsl-cards class="card-seven" style="width: 225px; height: 130px;"
                        title="04"
                        content="Scale">
                    </nsl-cards>

                    <nsl-cards class="card-eight" style="width: 225px; height: 130px;"
                        title="05"
                        content="Review & Refine">
                    </nsl-cards>
                </div>

            </nsl-cards>
        </div>
      `;
  }
}

globalThis.customElements.define(NSLWhatBlockOne.tag, NSLWhatBlockOne);