import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="container mt-32 flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-primary to-purple-900 py-20 shadow-lg">
      <h2 className="text-balance text-center font-lato text-4xl text-background">
        Take control of your financial future today.
      </h2>

      <p className="mt-4 max-w-xs text-center text-background opacity-70 md:max-w-lg">
        Empower your financial journey with personalized insights and
        easy-to-use tools designed to help you make confident.
      </p>

      <span className="mt-8 flex flex-col gap-2 md:flex-row">
        <Button variant={"secondary"}>
          Get Started <ArrowRight />
        </Button>
      </span>
    </section>
  );
}
