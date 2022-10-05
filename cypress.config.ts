import { defineConfig } from "cypress";

import { initPlugin } from "cypress-plugin-snapshots/plugin";

export default defineConfig({
  projectId: "gpcfsf",

  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);

      return config;
    },
  },

  viewportHeight: 900,
  viewportWidth: 1440,

  video: false,
});
