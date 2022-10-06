import { defineConfig } from "cypress";

import { initPlugin } from "cypress-plugin-snapshots/plugin";

const viewportWidth = 1440;
const viewportHeight = 900;

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);

      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "electron" && browser.isHeadless) {
          launchOptions.preferences.width = viewportWidth;
          launchOptions.preferences.height = viewportHeight;
          launchOptions.preferences.resizable = false;
          return launchOptions;
        }

        if (browser.name === "chrome" && browser.isHeadless) {
          launchOptions.args.push(
            `--window-size=${viewportWidth},${viewportHeight}`
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
