// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-starter.peterk.dev',
  integrations: [mdx(), sitemap(), react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel()
});
