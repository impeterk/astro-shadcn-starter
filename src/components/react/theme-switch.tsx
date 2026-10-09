import { useState } from "react";

import { motion } from "motion/react";
import { useMediaQuery } from "@reactuses/core";

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
  icon: string;
  value: string;
  isActive?: boolean;
  onClick?: (value: Theme) => void;
}) {
  return (
    <button
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      className={cn(
        "relative flex size-8 cursor-default items-center justify-center rounded-full transition-all [&_svg]:size-4",
        isActive ? "bg-muted text-primary" : "text-foreground hover:bg-muted",
      )}
      role="radio"
      type="button"
      onClick={() => onClick(value as Theme)}
    >
      <span className={icon} />

      {isActive && (
        <motion.div
          className="border-primary absolute inset-0 rounded-full border"
          layoutId="theme-option"
          transition={{ type: "keyframes", duration: 0.3 }}
        />
      )}
    </button>
  );
}

const THEME_OPTIONS = [
  {
    icon: "icon-[tabler--device-desktop]",
    value: "system",
  },
  {
    icon: "icon-[tabler--sun]",
    value: "light",
  },
  {
    icon: "icon-[tabler--moon]",
    value: "dark",
  },
];

function ThemeSwitcher({ active = "system" }: { active?: Theme }) {
  const [theme, setTheme] = useState(active);

  const isDark = useMediaQuery("(prefers-color-scheme: dark)", false);

  async function handleClick(theme: Theme) {
    setTheme(theme);
    actions.switchTheme(theme);
    if (theme === "system") {
      theme += isDark ? " dark" : " light";
    }
    document.documentElement.className = theme;
  }

  return (
    <div
      className="bg-background ring-muted inline-flex items-center overflow-hidden rounded-full ring-1"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          isActive={theme === option.value}
          value={option.value}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export { ThemeSwitcher };
