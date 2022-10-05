import { defineConfig } from "cypress";

import { initPlugin } from "cypress-plugin-snapshots/plugin";

const viewportWidth = 1440;
const viewportHeight = 900;

export default defineConfig({
  projectId: "gpcfsf",

  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);

      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome" && browser.isHeadless) {
          launchOptions.args.push(
            "--window-size=" + viewportWidth + "," + viewportHeight,
            "--font-render-hinting=none"
          );

          return launchOptions;
        }
      });

      return config;
    },
  },

  viewportWidth,
  viewportHeight,

  video: false,
});
