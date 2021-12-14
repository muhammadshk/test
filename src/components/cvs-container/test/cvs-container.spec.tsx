import { newSpecPage } from "@stencil/core/testing";
import { CvsContainer } from "../cvs-container";

describe("cvs-container", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsContainer],
      html: `<cvs-container></cvs-container>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-container>
    `);
  });
});
