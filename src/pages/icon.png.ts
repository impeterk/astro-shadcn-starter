import Favicon from "@/components/favicon";
import { ImageResponse } from "@vercel/og";
export const size = {
  width: 32,
  height: 32,
};
export async function GET() {
  // Typescript hax
  return new ImageResponse(Favicon(), { ...size });
}
