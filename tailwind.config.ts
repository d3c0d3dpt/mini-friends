import type { Config } from "tailwindcss";

export default <Config>(<unknown>{
  plugins: [require("daisyui")],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["light", "dark"],
  },
});
