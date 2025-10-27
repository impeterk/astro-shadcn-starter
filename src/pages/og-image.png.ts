import { BRAND_NAME, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/consts";
import { ImageResponse } from "@vercel/og";
import type { ReactElement } from "react";
import { html } from "satori-html";
export const size = {
  width: 1200,
  height: 630,
};
export async function GET({ request }: { request: Request }) {
  const icon = new URL("/icon.png", request.url);
  const res = {
    type: "div",
    key: "div",
    props: {
      tw: "relative flex h-full w-full items-center justify-center bg-gray-900",
      children: [
        {
          type: "div",
          key: "absolute",
          props: {
            tw: "top-12 left-12 absolute flex items-center",
            children: [
              {
                type: "img",
                key: "img",
                props: {
                  tw: "w-12 h-12",
                  src: icon.href,
                },
              },
              {
                type: "div",
                key: "name",
                props: {
                  tw: "font-semibold text-slate-200 ml-10 text-2xl ",
                  children: BRAND_NAME,
                },
              },
            ],
          },
        },
        {
          type: "div",
          key: "flex",
          props: {
            tw: "flex flex-col items-center ",
            children: [
              {
                type: "div",
                key: "title",
                props: {
                  tw: "text-8xl font-semibold text-slate-300  text-center max-w-2xl mb-12",
                  children: SITE_TITLE,
                },
              },
              {
                type: "div",
                key: "text",
                props: {
                  tw: "text-8xl font-medium text-slate-300  text-center ",
                  children: "Astro + Shadcn + React",
                },
              },
            ],
          },
        },
      ],
    },
  };

  // Typescript hax
  return new ImageResponse(res, { ...size });
}
