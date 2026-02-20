"use client";
import logo from "@/assets/logo/kicks.png";
import Image from "next/image";
import Link from "next/link";
import NavActions from "./NavActions";
import NavLink from "./NavLink";

const navLinks = [
  { label: "New Drops🔥", href: "/new-drops" },
  { label: "Men", href: "/men", hasDropdown: true },
  { label: "Women", href: "/women", hasDropdown: true },
];

export const Navbar = () => {
  return (
    <div className="w-full container mx-auto px-4 pt-8">
      <nav className="flex h-24 items-center justify-between rounded-[24px] bg-white p-8">
        {/* Left Side: Navigation Links */}
        <div className="flex items-center gap-10">
          {navLinks?.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>

        {/* Center: Brand Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer">
          <Link href="/">
            <Image
              src={logo}
              alt="Kicks Logo"
              width={128}
              height={32}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Right Side: Action Icons */}
        <div className="flex items-center">
          <NavActions />
        </div>
      </nav>
    </div>
  );
};
