"use client";

import { useRef, useState } from "react";
import { site } from "@/config/site";
import { isValidEthereumTokenAddress } from "@/lib/links";

type Props = {
  className?: string;
  label?: string;
  copiedLabel?: string;
  hideWhenMissing?: boolean;
};

export default function CopyContractButton({
  className = "",
  label = "COPY CA 🙊",
  copiedLabel = "COPIED 🙊",
  hideWhenMissing = false,
}: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const available = isValidEthereumTokenAddress(site.contractAddress);
  if (!available && hideWhenMissing) return null;

  async function copy() {
    if (!available) return;
    try {
      await navigator.clipboard.writeText(site.contractAddress);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), 1600);
  }

  const text = status === "copied" ? copiedLabel : status === "error" ? "COPY FAILED" : available ? label : "CA COMING SOON";
  return (
    <button
      type="button"
      className={className}
      disabled={!available}
      onClick={copy}
      data-link-role="copy"
      title={available ? "Copy Ethereum contract address" : "Ethereum contract is not configured yet"}
      aria-label={available ? "Copy Ethereum contract address" : "Ethereum contract coming soon"}
    >
      {text}
    </button>
  );
}
