import { ListChecks, HeartHandshake, Signal, MessageCircle } from "lucide-react";
import Nav from "@/components/Nav";
import Portrait from "@/components/Portrait";
import OrderForm from "@/components/OrderForm";
import { BRAND, waLink } from "@/lib/config";

const eyebrow = "text-xs uppercase tracking-[0.35em] text-gold";
const h2 = "font-serif text-4xl leading-tight sm:text-5xl";

const FEATURES = [
  { Icon: ListChecks, t: "Simple Ordering", d: "Choose your network and data bundle in a few easy steps." },
  { Icon: HeartHandshake, t: "Personal Service", d: "Speak directly with our team to confirm your request." },
  { Icon: Signal, t: "Convenient Connectivity", d: "A straightforward way to request the data you need." },
];

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <a href="#order" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">Skip to order form</a>
      <Nav />
      <main>
        {/* Hero */}
        <section id="home" className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 md:grid-cols-2 md:pb-28 md:pt-20">
          <div className="order-2 md:order-1">
            <p className={`${eyebrow} rise`}>Connectivity, Redefined</p>
            <h1 className="rise rise-2 mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Stay Connected. <em className="font-medium text-gold">Effortlessly.</em></h1>
            <div aria-hidden className="rise rise-2 my-7 h-px w-24 bg-gold" />
            <p className="rise rise-3 max-w-md text-lg leading-relaxed text-taupe">Reliable data bundles, a seamless ordering experience, and personal service you can trust. Your connection to everything that matters begins here.</p>
            <div className="rise rise-4 mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#order" className="bg-espresso px-8 py-4 text-center text-xs uppercase tracking-[0.22em] text-ivory transition hover:bg-gold hover:text-espresso">Get Your Data</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-gold px-8 py-4 text-xs uppercase tracking-[0.22em] transition hover:bg-cream">
                <MessageCircle size={16} aria-hidden /> Chat With Us
              </a>
            </div>
            <p className="rise rise-4 mt-8 text-sm tracking-wide text-taupe">Personal service • Simple ordering • Made for you</p>
          </div>
          <div className="rise order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md">
            <div className="relative">
              <Portrait />
              <span className="absolute -left-3 top-8 border border-gold bg-ivory px-4 py-2 text-[10px] uppercase tracking-[0.3em] shadow-sm sm:-left-8">Ethereal / Port Harcourt</span>
            </div>
          </div>
        </section>

        {/* Order */}
        <section id="order" className="bg-cream/60 py-20 md:py-28">
          <div className="mx-auto max-w-2xl px-5">
            <div className="mb-12 text-center">
              <p className={eyebrow}>Order Data</p>
              <h2 className={`${h2} mt-4`}>Your Data, Your Way.</h2>
              <p className="mx-auto mt-5 max-w-lg text-taupe">Choose your preferred network and data bundle. Submit your request, and we&apos;ll take it from there on WhatsApp.</p>
            </div>
            <OrderForm />
          </div>
        </section>

        {/* Why */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mb-14 text-center">
            <p className={eyebrow}>Why Choose Ethereal</p>
            <h2 className={`${h2} mt-4`}>Thoughtfully Simple.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map(({ Icon, t, d }) => (
              <div key={t} className="group border border-gold/30 p-9 text-center transition duration-500 hover:-translate-y-1 hover:border-gold hover:bg-white">
                <Icon className="mx-auto text-gold" size={30} strokeWidth={1.2} aria-hidden />
                <h3 className="mt-6 font-serif text-2xl">{t}</h3>
                <p className="mt-3 leading-relaxed text-taupe">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
            <div className="mx-auto w-full max-w-xs md:max-w-sm"><Portrait /></div>
            <div>
              <p className={eyebrow}>Our Story</p>
              <h2 className={`${h2} mt-4`}>A Little About Ethereal</h2>
              <div aria-hidden className="my-6 h-px w-20 bg-gold" />
              <p className="leading-relaxed text-taupe">Ethereal Data Services was created to make staying connected simpler and more convenient. Based in Port Harcourt, Rivers State, we provide a straightforward way for customers to request mobile data bundles with personal assistance every step of the way.</p>
              <p className="mt-5 leading-relaxed text-taupe">Founded by {BRAND.owner}, Ethereal is built around simplicity, thoughtful service, and the belief that staying connected should feel effortless.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-cream py-24 text-center">
          <div aria-hidden className="mx-auto mb-10 h-px w-32 bg-gold" />
          <div className="mx-auto max-w-xl px-5">
            <h2 className={h2}>Ready to Stay Connected?</h2>
            <p className="mt-5 text-taupe">Choose your bundle and send us your request. We&apos;ll be happy to assist you.</p>
            <a href="#order" className="mt-9 inline-block bg-espresso px-10 py-4 text-xs uppercase tracking-[0.22em] text-ivory transition hover:bg-gold hover:text-espresso">Order Your Data</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/40 bg-ivory py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl tracking-[0.25em]">ETHEREAL</p>
            <p className="mt-1 text-[10px] tracking-[0.4em] text-taupe">DATA SERVICES</p>
            <p className="mt-5 max-w-xs text-taupe">Your simple, personal connection to mobile data.</p>
          </div>
          <address className="space-y-2 not-italic text-taupe">
            <p>{BRAND.owner}</p>
            <p>{BRAND.location}</p>
            <p><a href={waLink()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-espresso">WhatsApp: {BRAND.whatsappDisplay}</a></p>
          </address>
          <nav aria-label="Footer">
            <ul className="space-y-2 text-taupe">
              {[["Home", "#home"], ["Order Data", "#order"], ["About", "#about"]].map(([l, h]) => (
                <li key={h}><a href={h} className="hover:text-espresso">{l}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mx-auto mt-14 max-w-6xl border-t border-gold/30 px-5 pt-6 text-sm text-taupe">© {year} {BRAND.name}. All rights reserved.</p>
      </footer>
    </>
  );
}
