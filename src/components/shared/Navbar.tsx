"use client";
import logo from "@/assets/logo/kicks.png";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavActions from "./NavActions";
import NavLink from "./NavLink";

const navLinks = [
  { label: "New Drops🔥", href: "/new-drops" },
  { label: "Men", href: "/men", hasDropdown: true },
  { label: "Women", href: "/women", hasDropdown: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full xl:container mx-auto px-4 pt-4 md:pt-8 bg-transparent">
      <nav className="relative flex h-20 md:h-24 items-center justify-between rounded-[12px] md:rounded-[24px] bg-white px-6 md:px-8">
        {/* Left Side: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks?.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>

        {/* Mobile: Hamburger Icon (Left/Start) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#232321] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer z-20">
          <Link href="/">
            <Image
              src={logo}
              alt="Kicks Logo"
              width={128}
              height={32}
              priority
              className="w-[80px] md:w-[128px] h-5 md:h-8"
            />
          </Link>
        </div>

        {/* Right Side: Action Icons */}
        <div className="flex items-center">
          <NavActions isMobile={true} />
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 z-50 w-[80%] max-w-xs bg-white p-8 lg:hidden shadow-2xl"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between mb-4">
                    <Image
                      src={logo}
                      alt="Kicks Logo"
                      width={100}
                      height={25}
                      className="h-auto"
                    />
                    <button onClick={() => setIsOpen(false)} className="p-2">
                      <X size={24} />
                    </button>
                  </div>
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-bold text-[#232321] hover:text-[#4a69e2] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-100 italic text-sm text-gray-400">
                    Step up your game with Kicks.
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
