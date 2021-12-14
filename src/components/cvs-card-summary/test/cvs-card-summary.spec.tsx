import { newSpecPage } from "@stencil/core/testing";
import { CvsCardSummary } from "../cvs-card-summary";

describe("cvs-card-summary", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsCardSummary],
      html: `<cvs-card-summary></cvs-card-summary>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-card-summary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-card-summary>
    `);
  });
});
