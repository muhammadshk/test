import { newE2EPage } from "@stencil/core/testing";

describe("cvs-card-management-tile", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-card-management-tile></cvs-card-management-tile>");

    const element = await page.find("cvs-card-management-tile");
    expect(element).toHaveClass("hydrated");
  });
});
