import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "cvs-wallet",
  buildEs5: "prod",
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    slotChildNodesFix: true
  },
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "dist-custom-elements-bundle"
    },
    {
      type: "docs-readme"
    },
    {
      type: "dist-hydrate-script"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  globalScript: "src/global/app.ts",
  plugins: [
    sass({
      injectGlobalPaths: ["src/global/variables.scss"]
    })
  ]
};
