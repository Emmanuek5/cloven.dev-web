"use client";

import { useState } from "react";
import Image from "next/image";
import Services from "@/components/Services";
import { m } from "framer-motion";
import { InlineWidget } from "react-calendly";
import type { LucideIcon } from "lucide-react";
import { Github, Globe, Linkedin, Mail, Menu, X } from "lucide-react";
import { containerStagger, fadeInUp, scaleIn, slideInFrom } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface NavigationLink {
  label: string;
  href: string;
}

interface IconLink extends NavigationLink {
  icon: LucideIcon;
}

const navigationLinks: NavigationLink[] = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const profileLinks: IconLink[] = [
  { label: "GitHub", href: "https://github.com/Emmanuek5", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/blueobsidian",
    icon: Linkedin,
  },
  { label: "Portfolio", href: "https://blueobsidian.me", icon: Globe },
];

const contactLinks: IconLink[] = [
  { label: "Email", href: "mailto:blueobsidian196@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/blueobsidian",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/Emmanuek5", icon: Github },
];

export default function Home() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinkClassName =
    "text-sm font-medium text-gray-300 transition-colors hover:text-white";

  return (
    <div
      id="top"
      className="enhanced-bg min-h-screen bg-background text-foreground"
    >
      <m.nav
        className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-full border border-gray-800/70 bg-background/80 px-4 shadow-lg shadow-black/20 backdrop-blur"
        variants={slideInFrom("up")}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7 }}
      >
        <a href="#top" className="flex items-center gap-2 py-3">
          <Image
            src="/logo.png"
            alt="Cloven Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-base font-semibold sm:text-lg">cloven.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <NavigationMenu className="bg-transparent">
            <NavigationMenuList className="gap-6">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    className={navLinkClassName}
                    href={link.href}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            asChild
            className="rounded-full px-6 text-sm font-semibold"
            variant="default"
          >
            <a href="#contact">Book a Call</a>
          </Button>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Toggle navigation"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="border-gray-800/60 bg-background/95"
          >
            <SheetHeader className="mb-6 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Cloven Logo"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
                <span className="text-base font-medium">cloven.dev</span>
              </div>
              <SheetClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Close navigation"
                  className="border-gray-700 text-gray-200"
                >
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </SheetHeader>
            <div className="flex flex-col items-center gap-6 py-4">
              {navigationLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="text-lg font-semibold text-gray-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button
                  asChild
                  className="w-full max-w-xs rounded-full px-6 py-3 text-base font-semibold"
                >
                  <a href="#contact">Book a Call</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </m.nav>

      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden pb-16 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-l from-gray-800/60 via-gray-900/30 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-3/4 bg-gradient-radial from-gray-700/40 via-gray-800/25 to-transparent" />
        <div className="absolute right-1/4 top-1/4 h-1/2 w-1/2 bg-gradient-radial from-white/5 via-gray-600/15 to-transparent blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-gray-600/30 via-gray-700/20 to-transparent opacity-40 blur-2xl" />
        <div
          className="absolute right-0 top-0 h-full w-4/5 opacity-25"
          style={{
            backgroundImage:
              `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px)` as string,
            backgroundSize: "60px 60px, 60px 60px, 120px 120px",
            maskImage:
              "linear-gradient(to left, black 20%, rgba(0,0,0,0.8) 50%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 20%, rgba(0,0,0,0.8) 50%, transparent 80%)",
          }}
        />
        <div
          className="absolute right-0 top-0 h-full w-1/2 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            filter: "blur(0.5px)",
          }}
        />
        <div className="clouds" />

        <m.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"
        >
          <m.div variants={slideInFrom("left")} className="max-w-xl text-left">
            <span className="mb-4 text-xs font-mono tracking-[0.3em] text-gray-400 sm:text-sm">
              WEB DEVELOPMENT AGENCY
            </span>
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-shimmer block">MODERN WEBSITES</span>
              <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                BUILT FOR SUCCESS
              </span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              We create fast, beautiful, and conversion-focused websites that
              help your business grow. From startups to enterprises, we deliver
              web solutions that work.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="w-full rounded-full px-8 py-3 text-base font-medium sm:w-auto"
              >
                <a href="#contact">Book a Call</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-gray-600 px-8 py-3 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
              >
                <a href="#services">View Our Work</a>
              </Button>
            </div>
          </m.div>

          <m.div
            variants={slideInFrom("right", 0.1)}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/globe.png"
              alt="Digital globe illustration"
              width={500}
              height={500}
              className="float-animation max-w-[240px] drop-shadow-2xl sm:max-w-xs md:max-w-md lg:max-w-lg"
              priority
            />
          </m.div>
        </m.div>
      </section>

      <Services />

      <section
        id="team"
        className="section-bg relative overflow-hidden bg-gray-950/50 px-4 py-20 sm:px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/20" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-gray-300/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <m.div
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="detached-header mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
              Meet the
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              The creative force behind cloven.dev&apos;s innovative digital
              solutions.
            </p>
          </m.div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <m.div
              variants={slideInFrom("left")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="group relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-white/10 to-gray-300/10 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative rounded-3xl border border-gray-700 bg-gray-900/80 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 sm:p-8">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-4 border-gray-600 bg-gradient-to-br from-gray-700 to-gray-800 shadow-2xl transition-all duration-500 group-hover:border-white sm:h-48 sm:w-48 md:h-56 md:w-56">
                        <Image
                          src="/blueobsidian.png"
                          alt="Blue Obsidian"
                          width={200}
                          height={200}
                          className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
                        />
                      </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold sm:text-3xl">
                      Blue Obsidian
                    </h3>
                    <p className="mb-4 text-base text-gray-400 sm:text-lg">
                      Full Stack Developer
                    </p>
                    <p className="mb-8 text-base leading-relaxed text-gray-300 sm:text-lg">
                      &quot;Just a Chill Guy TBH&quot;
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {profileLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                          >
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 bg-gray-800 transition-all group-hover:border-white group-hover:bg-white group-hover:text-gray-900">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span>{link.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </m.div>

            <m.div
              variants={slideInFrom("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h4 className="mb-6 text-2xl font-bold text-white">
                  Tech Stack & Expertise
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-4 transition-colors hover:border-gray-600">
                    <span className="mb-2 block text-lg font-semibold text-white">
                      Frontend
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-gray-300">
                        React
                      </span>
                      <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-gray-300">
                        Next.js
                      </span>
                      <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-gray-300">
                        TypeScript
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-4 transition-colors hover:border-gray-600">
                    <span className="mb-2 block text-lg font-semibold text-white">
                      Backend
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-gray-300">
                        Node.js
                      </span>
                      <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-gray-300">
                        Express
                      </span>
                      <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-gray-300">
                        APIs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-700 bg-gray-800/30 p-6">
                <h4 className="mb-4 text-xl font-bold text-white">
                  Philosophy
                </h4>
                <blockquote className="text-base italic leading-relaxed text-gray-300 sm:text-lg">
                  &quot;Code is poetry in motion. Every line tells a story,
                  every function serves a purpose. I believe in creating digital
                  experiences that not only work flawlessly but inspire and
                  delight.&quot;
                </blockquote>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-4">
                  <div className="mb-1 text-2xl font-bold text-white">10+</div>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
                <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-4">
                  <div className="mb-1 text-2xl font-bold text-white">5+</div>
                  <p className="text-sm text-gray-400">Years</p>
                </div>
                <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-4">
                  <div className="mb-1 text-2xl font-bold text-white">24/7</div>
                  <p className="text-sm text-gray-400">Available</p>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section-bg relative overflow-hidden px-4 py-20 sm:px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
        <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 transform bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <m.div
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="detached-header mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
              Crafting Digital
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Where innovation meets execution. We transform ideas into powerful
              digital experiences that drive results and exceed expectations.
            </p>
          </m.div>

          <m.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {["Innovation First", "Quality Driven", "Client Focused"].map(
              (value, index) => (
                <m.div
                  key={value}
                  variants={scaleIn}
                  className={cn(
                    "group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:border-gray-700 sm:p-8",
                    index === 1 && "bg-gray-900/60"
                  )}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:scale-110">
                    <div className="h-6 w-6 rounded-md bg-gray-900" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                    {value}
                  </h3>
                  <p className="leading-relaxed text-gray-300">
                    {index === 0 &&
                      "We stay ahead of the curve, implementing cutting-edge technologies and methodologies to deliver solutions that set new standards."}
                    {index === 1 &&
                      "Every line of code is crafted with precision. We believe in building robust, scalable solutions that stand the test of time."}
                    {index === 2 &&
                      "Your success is our success. We work closely with you to understand your vision and deliver solutions that exceed your expectations."}
                  </p>
                </m.div>
              )
            )}
          </m.div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <m.div
              variants={slideInFrom("left")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
                Our Approach
              </h3>
              <div className="space-y-6">
                {[
                  {
                    id: "1",
                    title: "Discovery & Strategy",
                    description:
                      "We dive deep into your business goals and user needs to create a strategic roadmap.",
                    accent: "bg-white text-gray-900",
                  },
                  {
                    id: "2",
                    title: "Design & Development",
                    description:
                      "Crafting beautiful, functional solutions with modern technologies and best practices.",
                    accent: "bg-gray-300 text-gray-900",
                  },
                  {
                    id: "3",
                    title: "Launch & Support",
                    description:
                      "Seamless deployment with ongoing support to ensure your success.",
                    accent: "bg-gray-500 text-gray-900",
                  },
                ].map((step) => (
                  <div key={step.id} className="flex items-start gap-4">
                    <div
                      className={cn(
                        "mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
                        step.accent
                      )}
                    >
                      <span className="text-sm font-bold">{step.id}</span>
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-white sm:text-xl">
                        {step.title}
                      </h4>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </m.div>

            <m.div
              variants={slideInFrom("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 backdrop-blur-sm sm:p-8"
            >
              <h3 className="mb-8 text-center text-2xl font-bold text-white">
                By the Numbers
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {["50+", "100%", "3+", "24/7"].map((stat, index) => (
                  <div key={stat} className="text-center">
                    <div className="mb-2 text-4xl font-bold text-white">
                      {stat}
                    </div>
                    <p className="text-gray-400">
                      {index === 0 && "Projects Delivered"}
                      {index === 1 && "Client Satisfaction"}
                      {index === 2 && "Years Experience"}
                      {index === 3 && "Support Available"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-gray-700 pt-8">
                {[
                  "Modern Tech Stack",
                  "Agile Development",
                  "Scalable Solutions",
                  "Performance Optimized",
                ].map((item, index) => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-gray-300">{item}</span>
                    <div
                      className={cn(
                        "h-3 w-3 animate-pulse rounded-full",
                        index === 0
                          ? "bg-white"
                          : index === 1
                          ? "bg-gray-300"
                          : index === 2
                          ? "bg-gray-400"
                          : "bg-gray-500"
                      )}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-bg px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <m.div
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="detached-header mb-4 text-3xl font-bold md:text-4xl">
              Book a Call
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-gray-400 sm:text-lg">
              Ready to discuss your project? Let&apos;s schedule a call and
              bring your vision to life with modern web solutions.
            </p>
          </m.div>

          <m.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gray-900/50 p-4 sm:p-6 md:p-8"
          >
            <InlineWidget
              url="https://calendly.com/blueobsidian196/30min"
              styles={{
                height: "680px",
                width: "100%",
                borderRadius: "16px",
              }}
            />
          </m.div>

          <m.div
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="mb-4 text-gray-400">
              Prefer a different way to connect?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-2 rounded-full border border-gray-800 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/60 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </m.div>
        </div>
      </section>

      <footer className="border-t border-gray-800 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cloven Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-lg font-bold">cloven.dev</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024 cloven.dev. All rights reserved. Crafting the future
              of web development.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
