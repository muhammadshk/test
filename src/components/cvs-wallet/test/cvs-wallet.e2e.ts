import { newE2EPage } from "@stencil/core/testing";

describe("cvs-wallet", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-wallet></cvs-wallet>");

    const element = await page.find("cvs-wallet");
    expect(element).toHaveClass("hydrated");
  });
});
