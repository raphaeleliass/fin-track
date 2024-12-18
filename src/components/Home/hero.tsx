import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight, Wallet, Wrench } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mt-32 flex h-[50dvh] flex-col items-center justify-center md:flex-row">
      <div className="mx-auto flex flex-col items-center justify-center text-center md:w-1/2 md:items-start">
        <h1 className="font-lato text-6xl md:text-7xl">
          Bank Smarter. <br />
          Live Better.
        </h1>

        <p className="mt-6 max-w-sm text-muted-foreground">
          Simplify your finances with complete control. Manage expenses,
          organize debts, and achieve financial freedom with ease.
        </p>

        <span className="mt-8 flex flex-row items-center gap-2">
          <Button className="w-auto">Get Started Today</Button>

          <Button variant={"secondary"}>
            Learn More <ArrowRight />
          </Button>
        </span>

        <span className="mt-10 flex flex-row items-center justify-center gap-6">
          <div className="flex flex-row items-center gap-2">
            <span>
              <Wallet className="text-primary" />
            </span>
            <Separator className="h-8 w-px" />
            <span>
              <h6 className="font-lato text-sm font-semibold">
                Personalized financial
              </h6>
              <p className="text-xs text-muted-foreground">
                Analyzes your goals
              </p>
            </span>
          </div>

          <div className="flex flex-row items-center gap-2">
            <span>
              <Wrench className="text-primary" />
            </span>
            <Separator className="h-8 w-px" />
            <span>
              <h6 className="font-lato text-sm font-semibold">Control tools</h6>
              <p className="text-xs text-muted-foreground">
                Control your expenses
              </p>
            </span>
          </div>
        </span>
      </div>

      <div className="relative mx-auto hidden max-h-[50dvh] w-1/2 max-w-xl grid-cols-2 grid-rows-4 gap-4 md:grid">
        <Image
          className="row-span-2 h-full w-full grid-cols-1 rounded rounded-tl-3xl object-cover object-center shadow-lg"
          src={"/modern-building.webp"}
          alt="photo of a modern build"
          width={100}
          height={100}
        />
        <Image
          className="row-span-3 h-full w-full grid-cols-1 rounded object-cover object-center shadow-lg"
          src={"/young-man.webp"}
          alt="photo of a modern build"
          width={100}
          height={100}
        />
        <Image
          className="row-span-2 h-full w-full grid-cols-1 rounded shadow-lg"
          src={"/holding-phone.webp"}
          alt="photo of a modern build"
          width={100}
          height={100}
        />
        <span className="relative col-span-1 row-span-1 cursor-pointer rounded rounded-br-3xl bg-primary shadow-lg transition-all hover:translate-y-1">
          <p className="absolute bottom-2 left-2 font-lato text-background">
            WE PROVIDE BEST SERVICES
          </p>

          <ArrowUpRight className="absolute right-2 top-2 text-background" />
        </span>
      </div>
    </section>
  );
}
