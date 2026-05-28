/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nsl-home-block-one.js";
import "./nsl-home-block-two.js";
import "./nsl-home-block-three.js";

/**
 * `nsl-home-screen`
 * 
 * @demo index.html
 * @element nsl-home-screen
 */
export class NSLHomeScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-home-screen";
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
        min-height: 100vh;
        position: relative;

        width: 100%;

        background-color: #050505;
      }

      .hero {
        background-color: #050505;

        background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);

        background-size: 60px 60px;
      }

      .home-image {
        display: block;
        width: min(500px, 80vw);
        height: auto;
        margin: 0 auto;
        margin-top: 140px;
        margin-bottom: 0;
        transition:
        filter 0.5s ease,
        transform 0.5s ease;
      }
      .home-image:hover {
        filter: drop-shadow(0 0 8px #E31837);
        transform: scale(1.03);
      }

      .title {
        font-size: 60px;
        margin: 0 0 25px;
      }
      .tagline {
        font-size: 50px;
        max-width: 750px;
        margin: 0 0 30px;
      }
      .subtitle {
        font-size: 25px;
        max-width: 650px;
        margin: 0;
        color: #D3D3D3;
        padding-bottom: 70px;
      }
      
      .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0;
      }

      .block-one {
        display: block;
        background-color: #050505;
        padding-top: 30px;
        padding-bottom: 40px;
      }
      .block-two {
        display: block;
        background-color: rgb(26 26 26 / var(--tw-bg-opacity, 1));
        padding-bottom: 40px;
      }
      .block-three {
        background-color: #050505;
        padding-top: 30px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="hero">
          <div class="column">
              <img class="home-image" src="/images/website-home-page-logo-png.png" alt="Neural Shot Labs Logo">
              <h1 class="title">Neural<span style="color: red;">Shot</span> Labs</h1>
              <h1 class="tagline">AI-Powered Solutions for Performance and Productivity</h1>
              <h2 class="subtitle">We build practical AI tools and solutions that help athletes and organizations perform better and work smarter.</h2>
          </div>
        </div>

        <div>
            <nsl-home-block-one class="block-one"></nsl-home-block-one>
        </div>

        <div>
            <nsl-home-block-two class="block-two"></nsl-home-block-two>
        </div>

        <div>
            <nsl-home-block-three class="block-three"></nsl-home-block-three>
        </div>
      `;
  }
}

globalThis.customElements.define(NSLHomeScreen.tag, NSLHomeScreen);