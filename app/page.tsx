import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { Platform } from "@/components/sections/platform";
import { Why } from "@/components/sections/why";
import { CaseStudies } from "@/components/sections/case-studies";
import { Leadership } from "@/components/sections/leadership";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Products />
      <Platform />
      <Why />
      <CaseStudies />
      <Leadership />
      <CTA />
      <Footer />
    </main>
  );
}
