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
  const res =
    html(`<div tw="relative flex h-full w-full items-center justify-center bg-gray-900">
  <div tw="top-12 left-12 absolute flex items-center">
    <img tw="w-12 h-12" src="${icon.href}" />
    <div tw="font-semibold text-slate-200 ml-10 text-2xl ">${BRAND_NAME}</div>
  </div>
  <div tw="flex flex-col items-center ">
    <div tw="text-8xl font-semibold text-slate-300  text-center max-w-2xl mb-12">${SITE_TITLE}</div>
    <div tw="text-8xl font-medium text-slate-300  text-center ">Astro + Shadcn + React</div>
  </div>
</div>`);

  // Typescript hax
  return new ImageResponse(res as unknown as ReactElement, { ...size });
}
