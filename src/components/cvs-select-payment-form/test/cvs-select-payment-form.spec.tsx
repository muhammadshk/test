import { newSpecPage } from "@stencil/core/testing";
import { CvsSelectPaymentForm } from "../cvs-select-payment-form";

describe("cvs-select-payment-form", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [CvsSelectPaymentForm],
      html: `<cvs-select-payment-form></cvs-select-payment-form>`
    });
    expect(page.root).toEqualHtml(`
      <cvs-select-payment-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-select-payment-form>
    `);
  });
});
