import { ImageResponse } from "@vercel/og";
import type { ReactElement } from "react";
import { html } from "satori-html";
export const size = {
  width: 32,
  height: 32,
};
export async function GET() {
  const res = html(` <div
  key="mainDiv"
  style="
  font-size: 42px;
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:rebeccapurple;
  border-radius: 30%;
"
  >
    <svg fill="none" viewBox="0 0 32 32" height="1em" width="1em" key="svg">
      <path
        key="path"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  </div>`);

  // Typescript hax
  return new ImageResponse(res as unknown as ReactElement, { ...size });
}
