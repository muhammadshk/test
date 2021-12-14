import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "cvs-container",
  styleUrl: "cvs-container.scss",
  shadow: true,
  assetsDirs: ["assets"]
})
export class CvsContainer {
  /**
   * URL with asset source
   */
  @Prop() readonly headerImgUrl?: string;

  /**
   * Header Image Alt Tag
   */
  @Prop() readonly headerImgAltTag?: string;

  /**
   * Page title
   */
  @Prop() readonly pageTitle?: string;
  /**
   * Previous Page Text
   */
  @Prop() readonly prevPageName: string;
  /**
   * Previous Page Url
   */
  @Prop() readonly prevPageCustomUrl?: string;
  /**
   * If previous page should be there, fallbacks or not
   */
  @Prop() readonly showPrevPage: boolean;

  render() {
    const cvsPreviousPageProps = {
      pageName: this.prevPageName,
      customUrl: this.prevPageCustomUrl || undefined
    };

    return (
      <Host>
        <header>
          <img class="headerImg" src={this.headerImgUrl} alt={this.headerImgAltTag || ""} />
        </header>
        <div id="maincontent" role="main" class="container">
          {this.showPrevPage && <cvs-previous-page {...cvsPreviousPageProps}></cvs-previous-page>}
          <div class={`inner-container ${!this.showPrevPage ? "no-margin-top" : ""}`}>
            {this.pageTitle && <h1>{this.pageTitle}</h1>}
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
