import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Quote } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const testimonials = [
  {
    text: "Working with Fintrack has been a game changer for my financial well-being. Their expert guidance and user-friendly tools made it easy to understand.",
    name: "John S.",
    occupation: "Financial Director",
  },
  {
    text: "Fintrack has significantly improved my investment strategy. Their insights and tools are invaluable for anyone looking to enhance their financial knowledge.",
    name: "Emily R.",
    occupation: "Investment Analyst",
  },
  {
    text: "My experience with Fintrack has been exceptional. Their customer support is always quick and efficient, and the tools are intuitive.",
    name: "Lucas M.",
    occupation: "Project Manager",
  },
  {
    text: "Thanks to Fintrack, I was able to optimize my investment portfolio. The detailed analyses helped me make more informed decisions.",
    name: "Ana T.",
    occupation: "Financial Consultant",
  },
];

export default function Testimonial() {
  return (
    <section className="container mt-32 flex w-full flex-col items-center justify-center gap-24">
      <h2 className="font-lato text-4xl">Testimonials</h2>

      <div className="flex flex-col gap-6 md:flex-row">
        {testimonials.map((test) => (
          <Card
            key={test.name}
            className="flex max-w-sm flex-col items-start justify-between shadow-lg"
          >
            <CardHeader className="relative">
              <Quote className="absolute left-2 top-2 rotate-180" />
              <CardTitle className="indent-4 text-2xl">{test.text}</CardTitle>
            </CardHeader>

            <CardContent className="w-full">
              <Separator className="h-px w-full rounded-full bg-zinc-300" />
            </CardContent>

            <CardFooter>
              <div className="flex flex-row gap-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-purple-400 font-lato text-2xl font-bold text-background">
                  {test.name.slice(0, 1).toUpperCase()}
                </span>

                <div className="flex flex-col justify-center gap-1 text-left">
                  <h2 className="text-sm font-semibold">{test.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {test.occupation}
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
