import { newSpecPage } from "@stencil/core/testing";
import { CvsCardAuth } from "../cvs-card-auth";

describe("cvs-card-auth", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsCardAuth],
      html: `<cvs-card-auth></cvs-card-auth>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-card-auth>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-card-auth>
    `);
  });
});
