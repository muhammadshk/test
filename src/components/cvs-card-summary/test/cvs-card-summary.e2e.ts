import { newE2EPage } from "@stencil/core/testing";

describe("cvs-card-summary", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-card-summary></cvs-card-summary>");

    const element = await page.find("cvs-card-summary");
    expect(element).toHaveClass("hydrated");
  });
});
