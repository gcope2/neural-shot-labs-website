import { html, fixture, expect } from '@open-wc/testing';
import "../neural-shot-labs-website.js";

describe("NeuralShotLabsWebsite test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <neural-shot-labs-website
        title="title"
      ></neural-shot-labs-website>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
