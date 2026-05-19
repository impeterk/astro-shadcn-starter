import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
export default function CopyButton({ text }: { text: string }) {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);
  function handleClick() {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setCopied(true);
    window.navigator.clipboard.writeText(text);
    timeoutId.current = setTimeout(() => {
      setCopied(false);
    }, 750);
  }

  return (
    <Button
      variant={"ghost"}
      onClick={handleClick}
      className="absolute top-0 right-0"
    >
      <span
        className={cn(
          "size-4",
          copied
            ? "icon-[tabler--clipboard-check]"
            : "icon-[tabler--clipboard]",
        )}
      />
    </Button>
  );
}
export function CopyButtonFallback() {
  return (
    <Button variant={"ghost"} className="absolute top-0 right-0">
      <span className="icon-[tabler--clipboard-check] size-4" />
    </Button>
  );
}
