import React from "react";
import Logo from "./logo";
import { Button } from "./button";
import {
  SiLinkedin,
  SiWhatsapp,
  SiInstagram,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import { Tooltip, TooltipContent, TooltipProvider } from "./tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const menuStructure = [
  {
    title: "Pages",
    links: [
      { name: "What We Do", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Affiliates", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Mission and Values", href: "#" },
      { name: "Social Media", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { name: "API Documentation", href: "#" },
      { name: "Developers Tools", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
];

const myLinks = [
  {
    title: "Linkedin",
    href: "https://linkedin.com/in/raphaeleliass",
  },
  {
    title: "Github",
    href: "https://github.com/raphaeleliass",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/raphaeleliass",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/5528999763920",
  },
];

export default function Footer() {
  return (
    <footer className="container relative mt-20 flex w-full flex-col justify-around pb-20 pt-32 md:flex-row">
      <div className="flex flex-col items-center justify-center">
        <span className="flex flex-row items-center gap-2">
          <Logo />
          <p className="text-2xl md:text-4xl">Fintrack</p>
        </span>
        <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
          Manage your finances effortlessly with our advanced banking solutions.
          Safe, fast, and designed for your everyday needs.
        </p>
      </div>

      <div className="mt-12 flex flex-row flex-wrap justify-center gap-4 md:mt-0">
        {menuStructure.map((item) => (
          <ul key={item.title} className="flex flex-col items-start">
            <li>{item.title}</li>
            {item.links.map((link) => (
              <li key={link.name}>
                <Button variant={"link"} asChild>
                  <a href={link.href}>{link.name}</a>
                </Button>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="container absolute bottom-2 flex flex-col items-center justify-center gap-y-6 md:flex-row md:justify-around">
        <p>
          Design inpired by{" "}
          <a href="https://dribbble.com/dipauix">Dipa UI/UX</a>
        </p>

        <p>
          Developed by{" "}
          <Button variant={"link"}>
            <a href="https://github.com/raphaeleliass">Raphael Elias</a>
          </Button>
        </p>

        <div className="flex flex-row gap-4 text-muted-foreground">
          {myLinks.map((media) => (
            <TooltipProvider key={media.title}>
              <Tooltip>
                <TooltipTrigger>
                  <span key={media.title}>
                    <a
                      href={media.href}
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      {media.title === "Linkedin" && <SiLinkedin />}
                    </a>
                    <a
                      href={media.href}
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      {media.title === "Github" && <SiGithub />}
                    </a>
                    <a
                      href={media.href}
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      {media.title === "Instagram" && <SiInstagram />}
                    </a>
                    <a
                      href={media.href}
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      {media.title === "Whatsapp" && <SiWhatsapp />}
                    </a>
                  </span>
                </TooltipTrigger>
                <TooltipContent>{media.title}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </footer>
  );
}
