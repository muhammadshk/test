import { newE2EPage } from "@stencil/core/testing";

describe("cvs-container", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-container></cvs-container>");

    const element = await page.find("cvs-container");
    expect(element).toHaveClass("hydrated");
  });
});
