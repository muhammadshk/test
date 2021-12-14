import { newE2EPage } from "@stencil/core/testing";

describe("cvs-add-a-card", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-add-a-card></cvs-add-a-card>");

    const element = await page.find("cvs-add-a-card");
    expect(element).toHaveClass("hydrated");
  });
});
