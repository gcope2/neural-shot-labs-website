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

      .cards {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
      }
      .card-one {
        margin-bottom: 30px;
      }

      .row {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
      }

      .layout {
        margin-bottom: 25px;
        margin-top: 15px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="row">
        <nsl-block-layout class="layout"
          title="WHY WE EXIST" 
          subtitle="A focused company building practical intelligent systems."
          pone="NeuralShot Labs LLC was founded to create software and AI tools that deliver clear, measurable value — not flashy demos."
          ptwo="We started with a deep focus on track & field throwers because that’s where we saw an immediate need for better, more intelligent tools. That work continues, but the same approach — practical, high-signal, user-first AI — applies across domains."
          pthree="We’re open to the right partnerships and consulting work where our expertise in building focused, effective intelligent systems can help other teams move faster.">
        </nsl-block-layout>

        <div class="cards">
          <nsl-cards class="card-one" style="width: 315px; height: 210px;" 
            title="Practical over hype" 
            content="We care about tools that people actually use every day and that produce real results — whether that’s adding distance in the circle or helping a business make better decisions.">
          </nsl-cards>
          
          <nsl-cards class="card-two" style="width: 315px; height: 210px;" 
            title="Open to the right work" 
            content="While we have core projects we’re driving, we’re selectively exploring custom development and advisory work with organizations that value focused, effective AI.">
          </nsl-cards>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(NSLHomeBlockOne.tag, NSLHomeBlockOne);