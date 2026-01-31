import { Button } from "../ui/button";
import { IconClipboard, IconClipboardCheck } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { useClipboard } from "@reactuses/core";
export default function CopyButton({ text }: { text: string }) {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);
  const [_, copy] = useClipboard();
  function handleClick() {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setCopied(true);
    timeoutId.current = setTimeout(() => {
      copy(text);
      console.log("timeout");
      setCopied(false);
    }, 750);
  }
  const Icon = copied ? IconClipboardCheck : IconClipboard;

  return (
    <Button
      variant={"ghost"}
      onClick={handleClick}
      className="absolute top-0 right-0"
    >
      <Icon />
    </Button>
  );
}
export function CopyButtonFallback() {
  return (
    <Button variant={"ghost"} className="absolute top-0 right-0">
      <IconClipboard />
    </Button>
  );
}
