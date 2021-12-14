import { newSpecPage } from "@stencil/core/testing";
import { CvsConfirmPayment } from "../cvs-confirm-payment";

describe("cvs-confirm-payment", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsConfirmPayment],
      html: `<cvs-confirm-payment></cvs-confirm-payment>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-confirm-payment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-confirm-payment>
    `);
  });
});
