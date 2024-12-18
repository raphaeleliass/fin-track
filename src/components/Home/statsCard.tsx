import React from "react";

export default function StatsCard() {
  return (
    <section className="container mt-32 flex min-h-[20dvh] flex-col items-center justify-around gap-12 rounded-xl bg-gradient-to-tr from-primary to-purple-900 py-12 shadow-lg md:flex-row md:gap-0 md:py-0">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-lato text-7xl font-semibold text-background">
          100K
        </h1>
        <p className="text-sm text-muted">Customers worldwide</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-lato text-7xl font-semibold text-background">
          99%
        </h1>
        <p className="text-sm text-muted">
          Customers satisfaction - and growing!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-lato text-7xl font-semibold text-background">#2</h1>
        <p className="text-sm text-muted">Banking apps in Europe</p>
      </div>
    </section>
  );
}
