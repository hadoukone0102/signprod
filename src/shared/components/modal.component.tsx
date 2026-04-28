"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  /** Largeur max du modal (Tailwind max-w-*). Défaut: 3xl */
  maxWidth?: "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  /** Label accessible quand pas de titre visible */
  ariaLabel?: string;
}

const MAX_WIDTHS: Record<NonNullable<ModalProps["maxWidth"]>, string> = {
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  maxWidth = "3xl",
  ariaLabel,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-labelledby={title ? "sp-modal-title" : undefined}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1A24]/70 backdrop-blur-sm transition-opacity"
      />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`relative z-10 w-full ${MAX_WIDTHS[maxWidth]} max-h-[90vh] overflow-hidden bg-white shadow-2xl outline-none`}
      >
        {title && (
          <header className="flex items-center justify-between border-b border-[#14202C]/10 px-6 py-4 md:px-8">
            <h2 id="sp-modal-title" className="text-lg font-medium text-[#14202C] md:text-xl">
              {title}
            </h2>
            <button
              type="button"
              aria-label="Fermer"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center text-[#14202C]/60 transition hover:bg-[#F4F0E8] hover:text-[#14202C]"
            >
              <X className="h-5 w-5" />
            </button>
          </header>
        )}

        {!title && (
          <button
            type="button"
            aria-label="Fermer"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center bg-white/80 text-[#14202C]/70 backdrop-blur transition hover:bg-white hover:text-[#14202C]"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div className="max-h-[calc(90vh-4rem)] overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
