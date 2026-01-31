// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import { SITE_URL, PORT } from "./src/lib/consts";

import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
});
