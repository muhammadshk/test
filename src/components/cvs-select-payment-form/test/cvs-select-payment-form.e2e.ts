import { newE2EPage } from "@stencil/core/testing";

describe("cvs-select-payment-form", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-select-payment-form></cvs-select-payment-form>");

    const element = await page.find("cvs-select-payment-form");
    expect(element).toHaveClass("hydrated");
  });
});
