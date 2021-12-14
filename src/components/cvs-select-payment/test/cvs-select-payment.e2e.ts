import { newE2EPage } from "@stencil/core/testing";

describe("cvs-select-payment", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-select-payment></cvs-select-payment>");

    const element = await page.find("cvs-select-payment");
    expect(element).toHaveClass("hydrated");
  });
});
