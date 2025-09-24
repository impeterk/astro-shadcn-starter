import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  switchTheme: defineAction({
    input: z.string(),
    handler: async (theme, ctx) => {
      console.log(theme);
      ctx.cookies.set("__theme", theme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    },
  }),
};
