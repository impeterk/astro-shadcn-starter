import { loadEnv } from "vite";
export const { SITE_URL = "https://astro-starter.peterk.dev" } = loadEnv(
  process.env.NODE_ENV!,
  process.cwd(),
  "",
);
console.log({ SITE_URL });

export const { PORT = 4321 } = loadEnv(
  process.env.NODE_ENV!,
  process.cwd(),
  "",
);

export const SITE_TITLE = "Astro Starter";
export const SITE_DESCRIPTION = "Welcome to my astro + react + shadcn starter";
export const BRAND_NAME = "Peter.dev Astro starter";
