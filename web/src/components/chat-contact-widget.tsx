"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ContactFields } from "@/components/contact-fields";
import { cn } from "@/lib/utils";

export function ChatContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open ? (
        <div className="pointer-events-auto w-[min(100vw-2rem,24rem)] overflow-visible rounded-2xl border border-border/80 bg-background shadow-[0_20px_50px_rgba(11,18,32,0.18)]">
          <div className="flex items-start justify-between gap-3 rounded-t-2xl bg-gradient-to-br from-navy to-navy-deep px-4 py-4 text-white">
            <div>
              <p className="text-xs font-medium tracking-[0.12em] text-brand uppercase">
                Just A Click
              </p>
              <h2 className="mt-1 text-lg font-semibold">Get in Touch</h2>
              <p className="mt-1 text-sm text-white/75">
                Send us a message — we reply to your inbox.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="max-h-[min(70vh,32rem)] overflow-x-visible overflow-y-auto rounded-b-2xl p-4">
            <ContactFields
              idPrefix="chat-contact"
              className="space-y-4"
              onSuccess={() => setOpen(false)}
            />
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "pointer-events-auto flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_12px_30px_rgba(249,115,22,0.45)] transition hover:bg-[#ea580c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
          open && "bg-navy hover:bg-navy-deep"
        )}
        aria-label={open ? "Close contact chat" : "Open contact chat"}
        aria-expanded={open}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
