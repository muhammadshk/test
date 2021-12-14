import { newSpecPage } from "@stencil/core/testing";
import { CvsCardManagement } from "../cvs-card-management";

describe("cvs-card-management", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsCardManagement],
      html: `<cvs-card-management></cvs-card-management>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-card-management>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-card-management>
    `);
  });
});
