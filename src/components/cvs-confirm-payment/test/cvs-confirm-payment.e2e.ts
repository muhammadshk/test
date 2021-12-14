import { newE2EPage } from "@stencil/core/testing";

describe("cvs-confirm-payment", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-confirm-payment></cvs-confirm-payment>");

    const element = await page.find("cvs-confirm-payment");
    expect(element).toHaveClass("hydrated");
  });
});
