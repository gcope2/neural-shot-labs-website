/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nsl-contact-screen`
 * 
 * @demo index.html
 * @element nsl-contact-screen
 */
export class NSLContactScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nsl-contact-screen";
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
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <h1>Hello World</h1>
      `;
  }
}

globalThis.customElements.define(NSLContactScreen.tag, NSLContactScreen);