"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Blocks, Code2, Menu, MenuIcon, User, Wallet } from "lucide-react";
import React, { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeSelector from "@/app/(root)/_components/ThemeSelector";

const sections = [
  { href: "/", label: "Home", icon: Blocks },
  { href: "profile", label: "Profile", icon: User },
  { href: "snippets", label: "Snippets", icon: Code2 },
  { href: "pricing", label: "Pricing", icon: Wallet },
];

function MenuBtn({ className }: { className: string }) {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const activeRoute =
    sections.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || sections[0];
  return (
    <div className={cn("pr-5", className)}>
      <div className="border-separate bg-background">
        <nav className="container flex items-center justify-between px-8">
          <Sheet open={isOpen} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="hover:bg-neutral-800 hover:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
                <MenuIcon className="" />
              </button>
            </SheetTrigger>
            <SheetContent
              className="w-[400px] sm:w-[540px] space-y-4"
              side={"left"}
            >
              {/* Logo */}
              <Link
                href="/"
                className=" flex items-center gap-3 group relative"
              >
                {/* Logo hover effect */}

                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

                {/* Logo */}
                <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                  <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                </div>

                <div className="flex flex-col">
                  <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                    CodeEditor
                  </span>
                  <span className="block text-xs text-blue-400/60 font-medium">
                    Interactive Code Editor
                  </span>
                </div>
              </Link>
              {/* Navigation Sections */}
              <div className="flex flex-col gap-2">
                {sections.map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    onClick={() => setOpen((prev: any) => !prev)}
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-lg transition-all duration-300",
                      activeRoute.href === section.href
                        ? "bg-gradient-to-r from-blue-400/10 to-purple-400/10 ring-1 ring-blue-400/30"
                        : "hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-purple-400/10 hover:ring-1 hover:ring-blue-400/30"
                    )}
                  >
                    <section.icon
                      size={28}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-lg">{section.label}</span>
                  </Link>
                ))}
                <ThemeSelector />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>
  );
}

export default MenuBtn;
