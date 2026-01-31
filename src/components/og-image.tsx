import type { ComponentType } from "react";

type OgImageProps = {
  icon: ComponentType;
  BRAND_NAME: string;
  SITE_TITLE: string;
};

const OgImage = ({ icon: icon, BRAND_NAME, SITE_TITLE }: OgImageProps) => {
  const Icon = icon || null;
  return (
    <div tw="relative flex h-full w-full items-center justify-center bg-gray-900 font-mono">
      <div tw="top-12 left-12 absolute flex items-center">
        <div tw="flex flex-col">
          <Icon />
        </div>
        <div tw="flex flex-row">
          <div tw="font-semibold text-slate-200 ml-10 text-2xl flex">
            {BRAND_NAME}
          </div>
        </div>
      </div>

      <div tw="flex flex-col items-center">
        <div tw="text-8xl font-semibold text-slate-300 text-center max-w-2xl mb-12">
          {SITE_TITLE}
        </div>
        <div tw="text-8xl font-medium text-slate-300 text-center">
          Astro + Shadcn + React
        </div>
      </div>
    </div>
  );
};

export default OgImage;
