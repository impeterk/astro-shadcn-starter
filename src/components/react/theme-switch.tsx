"use client";

import type { JSX } from "react";
import { useEffect, useState } from "react";

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import type { Theme } from "@/lib/types";
import { actions } from "astro:actions";

const defFunc = () => null;

function ThemeOption({
  icon,
  value,
  isActive,
  onClick = defFunc,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick?: (value: Theme) => void;
}) {
  return (
    <button
      className={cn(
        "relative flex size-8 cursor-default items-center justify-center rounded transition-all [&_svg]:size-4",
        isActive ? "bg-muted text-primary" : "text-foreground hover:bg-muted",
      )}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value as Theme)}
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: "keyframes", duration: 0.3 }}
          className="border-primary absolute inset-0 rounded border"
        />
      )}
    </button>
  );
}

const THEME_OPTIONS = [
  {
    icon: <IconDeviceDesktop />,
    value: "system",
  },
  {
    icon: <IconSun />,
    value: "light",
  },
  {
    icon: <IconMoon />,
    value: "dark",
  },
];

function ThemeSwitcher({ active = "system" }: { active?: Theme }) {
  const [theme, setTheme] = useState(active);

  async function handleClick(theme: Theme) {
    setTheme(theme);
    document.documentElement.className = theme;
    await actions.switchTheme(theme);
  }

  return (
    <div
      className="bg-background ring-accent inline-flex items-center overflow-hidden rounded ring-1 ring-inset"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export { ThemeSwitcher };
