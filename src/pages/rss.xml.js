import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/consts";

export async function GET(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
  });
}
