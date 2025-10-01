import { ImageResponse } from "@vercel/og";
import type { ReactElement } from "react";
import { html } from "satori-html";
export const size = {
  width: 32,
  height: 32,
};
export async function GET() {
  const res = {
    type: "div",
    key: "mainDiv",
    props: {
      tw: "bg-slate-100 w-full h-full flex items-center justify-center text-amber-500 rounded-lg",
      style: { fontSize: "42px" },
      children: {
        type: "svg",
        key: "svg",
        props: {
          fill: "none",
          viewBox: "0 0 32 32",
          height: "1em",
          width: "1em",
          children: {
            type: "path",
            key: "path",
            props: {
              d: "M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",
              fill: "currentColor",
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
            },
          },
        },
      },
    },
  };

  // Typescript hax
  return new ImageResponse(res, { ...size });
}
