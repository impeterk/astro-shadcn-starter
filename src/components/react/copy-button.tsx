import { useClipboard, useMountedState } from "@reactuses/core";
import { Button } from "../ui/button";
import { IconClipboard } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
export default function CopyButton({ text }: { text: string }) {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  function handleClick() {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    navigator.clipboard.writeText(text);
    timeoutId.current = setTimeout(() => {
      console.log("timeout");
    }, 750);
  }

  return (
    <Button
      variant={"ghost"}
      onClick={() => handleClick()}
      className="absolute top-0 right-0"
    >
      <IconClipboard />
    </Button>
  );
}
