// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",

  server: {
    host: "0.0.0.0",
  },

  adapter: node({
    mode: "standalone",
  }),

  integrations: [mdx()],
});