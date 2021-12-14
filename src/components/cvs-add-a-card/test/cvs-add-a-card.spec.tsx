import { newSpecPage } from "@stencil/core/testing";
import { CvsAddACard } from "../cvs-add-a-card";

describe("cvs-add-a-card", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsAddACard],
      html: `<cvs-add-a-card></cvs-add-a-card>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-add-a-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-add-a-card>
    `);
  });
});
