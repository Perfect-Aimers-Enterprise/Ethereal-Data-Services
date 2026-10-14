"use client";
import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { BUNDLES, NETWORKS, Network, buildMessage, isValidNigerianPhone, waLink } from "@/lib/config";

const empty = { name: "", phone: "", network: "" as Network | "", bundle: "", note: "" };
type Errors = Partial<Record<"name" | "phone" | "network" | "bundle", string>>;

const field = "w-full border border-gold/50 bg-white px-4 py-3.5 text-[16px] text-espresso placeholder:text-taupe/70 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40";
const label = "mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-espresso";

export default function OrderForm() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const set = (k: keyof typeof empty, val: string) => {
    setOpened(false);
    setV((p) => ({ ...p, [k]: val, ...(k === "network" ? { bundle: "" } : {}) }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err: Errors = {};
    if (v.name.trim().length < 2) err.name = "Please enter your full name.";
    if (!v.phone.trim()) err.phone = "Please enter your phone number.";
    else if (!isValidNigerianPhone(v.phone)) err.phone = "Enter a valid Nigerian number, e.g. 08012345678 or +2348012345678.";
    if (!v.network) err.network = "Please select a network.";
    if (!v.bundle) err.bundle = "Please select a data bundle.";
    setErrors(err);
    if (Object.keys(err).length) {
      document.getElementById("order-form")?.querySelector<HTMLElement>("[aria-invalid='true'], input:invalid")?.focus();
      return;
    }
    const url = waLink(buildMessage({ ...v, network: v.network }));
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = url; // popup blocked: navigate instead
    setOpened(true);
  }

  const reset = () => { setV(empty); setErrors({}); setOpened(false); };
  const Err = ({ id, m }: { id: string; m?: string }) => m ? <p id={id} role="alert" className="mt-2 text-sm text-[#9B2C2C]">{m}</p> : null;

  return (
    <form id="order-form" onSubmit={onSubmit} noValidate className="space-y-7 border border-gold/40 bg-white p-6 shadow-[0_30px_60px_-40px_rgba(48,37,31,.4)] sm:p-10">
      <div>
        <label htmlFor="name" className={label}>Full Name</label>
        <input id="name" name="name" autoComplete="name" required placeholder="Enter your full name" value={v.name} onChange={(e) => set("name", e.target.value)} className={field} aria-invalid={!!errors.name} aria-describedby="name-err" />
        <Err id="name-err" m={errors.name} />
      </div>

      <div>
        <label htmlFor="phone" className={label}>Phone Number</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="e.g. 08012345678" value={v.phone} onChange={(e) => set("phone", e.target.value)} className={field} aria-invalid={!!errors.phone} aria-describedby="phone-err" />
        <Err id="phone-err" m={errors.phone} />
      </div>

      <fieldset aria-describedby="network-err">
        <legend className={label}>Select Network</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {NETWORKS.map((n) => (
            <label key={n} className="cursor-pointer">
              <input type="radio" name="network" value={n} checked={v.network === n} onChange={() => set("network", n)} className="peer sr-only" aria-invalid={!!errors.network} />
              <span className="block border border-gold/50 px-3 py-3.5 text-center text-sm tracking-wide transition peer-checked:border-espresso peer-checked:bg-espresso peer-checked:text-ivory peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2 hover:border-gold">{n}</span>
            </label>
          ))}
        </div>
        <Err id="network-err" m={errors.network} />
      </fieldset>

      <div>
        <label htmlFor="bundle" className={label}>Select Data Bundle</label>
        <select id="bundle" name="bundle" required disabled={!v.network} value={v.bundle} onChange={(e) => set("bundle", e.target.value)} className={`${field} disabled:cursor-not-allowed disabled:bg-ivory disabled:text-taupe`} aria-invalid={!!errors.bundle} aria-describedby="bundle-err bundle-hint">
          <option value="">{v.network ? "Choose a bundle" : "Select a network first"}</option>
          {v.network && BUNDLES[v.network].map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
        <p id="bundle-hint" className="mt-2 text-sm text-taupe">Price confirmed on WhatsApp</p>
        <Err id="bundle-err" m={errors.bundle} />
      </div>

      <div>
        <label htmlFor="note" className={label}>Note <span className="normal-case tracking-normal text-taupe">(optional)</span></label>
        <textarea id="note" name="note" rows={3} maxLength={300} placeholder="Any special request? (optional)" value={v.note} onChange={(e) => set("note", e.target.value)} className={field} />
      </div>

      <div>
        <button type="submit" className="flex w-full items-center justify-center gap-3 bg-espresso px-6 py-4 text-sm uppercase tracking-[0.22em] text-ivory transition hover:bg-gold hover:text-espresso focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
          <MessageCircle size={18} aria-hidden /> Request Data on WhatsApp
        </button>
        <p className="mt-4 text-center text-sm text-taupe">Your request opens directly in WhatsApp. Your order is confirmed once we respond.</p>
      </div>

      {opened && (
        <div role="status" className="border border-gold/50 bg-cream/60 p-4 text-center text-sm">
          WhatsApp should now be open with your request ready. Please press send there to reach us.{" "}
          <button type="button" onClick={reset} className="underline underline-offset-4 hover:text-gold">Start a new request</button>
        </div>
      )}
    </form>
  );
}
