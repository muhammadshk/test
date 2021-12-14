import { newSpecPage } from "@stencil/core/testing";
import { CvsCardManagementTile } from "../cvs-card-management-tile";

describe("cvs-card-management-tile", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsCardManagementTile],
      html: `<cvs-card-management-tile></cvs-card-management-tile>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-card-management-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-card-management-tile>
    `);
  });
});
