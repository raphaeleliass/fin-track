import CallToAction from "@/components/Home/callToAction";
import Hero from "@/components/Home/hero";
import StatsCard from "@/components/Home/statsCard";
import Testimonial from "@/components/Home/testimonial";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-2 py-4 md:static md:px-0 md:py-6">
      <Navbar />
      <Hero />
      <StatsCard />
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  );
}
