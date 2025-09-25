import { loadEnv } from "vite";
export const { SITE_URL } =
  loadEnv(process.env.NODE_ENV!, process.cwd(), "") ??
  "https://astro-starter.peterk.dev";

export const { PORT } =
  loadEnv(process.env.NODE_ENV!, process.cwd(), "") ?? 4321;

export const SITE_TITLE = "Astro Starter";
export const SITE_DESCRIPTION = "Welcome to my astro + react + shadcn starter";
export const BRAND_NAME = "Peter.dev Astro starter";
