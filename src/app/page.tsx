"use client";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Upsell } from "@/components/sections/Upsell";
import { Addons } from "@/components/sections/Addons";
import { Evidence } from "@/components/sections/Evidence";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-vivid-orange selection:text-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Upsell />
      <Addons />
      <Evidence />
      <Footer />
    </main>
  );
}
