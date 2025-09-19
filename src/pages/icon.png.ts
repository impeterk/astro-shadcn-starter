import { ImageResponse } from "@vercel/og";
export const size = {
  width: 32,
  height: 32,
};
export async function GET() {
  const html = {
    type: "div",
    key: "icon",
    props: {
      style: {
        fontSize: 24,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rebeccaPurple",
        borderRadius: "30%",
      },
      children: {
        type: "svg",
        key: "svg",
        props: {
          fill: "none",
          viewBox: "0 0 32 32",
          children: {
            type: "path",
            key: "path",
            props: {
              clipRule: "evenodd",
              d: "M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",
              fill: "currentColor",
              fillRule: "evenodd",
            },
          },
        },
      },
    },
  };

  return new ImageResponse(html, { ...size });
}
