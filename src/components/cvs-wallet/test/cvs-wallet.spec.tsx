import { newSpecPage } from "@stencil/core/testing";
import { CvsWallet } from "../cvs-wallet";

describe("cvs-wallet", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsWallet],
      html: `<cvs-wallet></cvs-wallet>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-wallet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-wallet>
    `);
  });
});
