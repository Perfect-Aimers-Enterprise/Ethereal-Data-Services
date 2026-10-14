"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [["Home", "#home"], ["Order Data", "#order"], ["About", "#about"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block font-serif text-2xl tracking-[0.28em] text-espresso">ETHEREAL</span>
          <span className="mt-1 block text-[9px] tracking-[0.4em] text-taupe">DATA SERVICES</span>
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.slice(0, 1).concat(LINKS.slice(2)).map(([l, h]) => (
            <li key={h}><a href={h} className="text-sm tracking-wide text-taupe transition-colors hover:text-espresso">{l}</a></li>
          ))}
          <li>
            <a href="#order" className="border border-gold px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-espresso hover:text-ivory">Order Data</a>
          </li>
        </ul>
        <button className="p-2 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-gold/30 bg-ivory px-5 pb-5 pt-3 md:hidden">
          {LINKS.map(([l, h]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 font-serif text-2xl">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
