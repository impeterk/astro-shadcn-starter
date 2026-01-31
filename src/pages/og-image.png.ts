import Favicon from "@/components/favicon";
import OgImage from "@/components/og-image";
import { BRAND_NAME, SITE_TITLE } from "@/lib/consts";
import { ImageResponse } from "@vercel/og";
export const size = {
  width: 1200,
  height: 630,
};
export async function GET({ request }: { request: Request }) {
  const icon = new URL("/icon.png", request.url);
  return new ImageResponse(OgImage({ icon: Favicon, BRAND_NAME, SITE_TITLE }), {
    ...size,
  });
}
