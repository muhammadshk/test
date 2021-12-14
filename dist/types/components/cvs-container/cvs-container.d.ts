export declare class CvsContainer {
  /**
   * URL with asset source
   */
  readonly headerImgUrl?: string;
  /**
   * Header Image Alt Tag
   */
  readonly headerImgAltTag?: string;
  /**
   * Page title
   */
  readonly pageTitle?: string;
  /**
   * Previous Page Text
   */
  readonly prevPageName: string;
  /**
   * Previous Page Url
   */
  readonly prevPageCustomUrl?: string;
  /**
   * If previous page should be there, fallbacks or not
   */
  readonly showPrevPage: boolean;
  render(): any;
}
