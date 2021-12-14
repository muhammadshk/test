import { newSpecPage } from "@stencil/core/testing";
import { CvsSelectPayment } from "../cvs-select-payment";

describe("cvs-select-payment", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsSelectPayment],
      html: `<cvs-select-payment></cvs-select-payment>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-select-payment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-select-payment>
    `);
  });
});
