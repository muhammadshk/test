import { newE2EPage } from "@stencil/core/testing";

describe("cvs-card-auth", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<cvs-card-auth></cvs-card-auth>");

    const element = await page.find("cvs-card-auth");
    expect(element).toHaveClass("hydrated");
  });
});
