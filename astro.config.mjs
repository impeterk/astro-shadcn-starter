// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/lib/consts";

import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap(), react(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
