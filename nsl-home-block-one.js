/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nsl-cards.js";

/**
 * `nsl-home-block-one`
 * 
 * @demo index.html
 * @element nsl-home-block-one
 */
export class NSLHomeBlockOne extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-home-block-one";
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
        display: flex;
        flex-direction: column;
        padding-left: 500px;
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

      .cards {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
      }
      .card-one {
        margin-bottom: 30px;
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
            <h6 class="title">WHY WE EXIST</h6>
            <h2 class="subtitle">A focused company building practical intelligent systems.</h2>

            <h6 class="paragraph-one">NeuralShot Labs LLC was founded to create software and AI tools that deliver clear, measurable value — not flashy demos.</h6>
            <h6 class="paragraph-two">We started with a deep focus on track & field throwers because that’s where we saw an immediate need for better, more intelligent tools. That work continues, but the same approach — practical, high-signal, user-first AI — applies across domains.</h6>
            <h6 class="paragraph-three">We’re open to the right partnerships and consulting work where our expertise in building focused, effective intelligent systems can help other teams move faster.</h6>
          </div>

          <div class="cards">
            <nsl-cards class="card-one" style="width: 315px;" title="Practical over hype" content="We care about tools that people actually use every day and that produce real results — whether that’s adding distance in the circle or helping a business make better decisions."></nsl-cards>
            <nsl-cards class="card-two" style="width: 315px;" title="Open to the right work" content="While we have core projects we’re driving, we’re selectively exploring custom development and advisory work with organizations that value focused, effective AI."></nsl-cards>
          </div>
        </div>
    `;
  }
}

globalThis.customElements.define(NSLHomeBlockOne.tag, NSLHomeBlockOne);