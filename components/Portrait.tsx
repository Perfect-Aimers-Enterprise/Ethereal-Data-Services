"use client";
import { useState } from "react";
import { BRAND } from "@/lib/config";

export default function Portrait({ className = "" }: { className?: string }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-gold" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream shadow-[0_30px_60px_-30px_rgba(48,37,31,.35)]">
        {missing ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-taupe">
            <span className="font-serif text-7xl text-gold">E</span>
            <span className="text-xs uppercase tracking-[0.3em]">Portrait placeholder</span>
            <code className="px-6 text-[11px]">public{BRAND.ownerPhoto}</code>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={BRAND.ownerPhoto} alt={`Portrait of ${BRAND.owner}, founder of ${BRAND.name}`} className="h-full w-full object-cover" onError={() => setMissing(true)} />
        )}
      </div>
    </div>
  );
}
