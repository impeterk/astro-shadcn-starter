// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import { SITE_URL, PORT } from "./src/lib/consts";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  fonts: [{
      provider: fontProviders.npm({remote: false}),
      name: "Geist Mono Variable",
      cssVariable: "--font-geist-mono",
    }],
  integrations: [mdx(), sitemap(), react(), icon()],
  server: {
    port: PORT,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
  prefetch: {
    defaultStrategy: "hover",
  },
});
