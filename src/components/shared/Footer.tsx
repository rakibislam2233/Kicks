"use client";
import logo from "@/assets/logo/footer-logo.png";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import kicksLogo from "@/assets/logo/logo-white.png";
const footerLinks = {
  categories: [
    { label: "Runners", href: "#" },
    { label: "Sneakers", href: "#" },
    { label: "Basketball", href: "#" },
    { label: "Outdoor", href: "#" },
    { label: "Golf", href: "#" },
    { label: "Hiking", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Blogs", href: "#" },
  ],
};

const socialLinks = [
  { icon: <FaFacebook className="size-6" />, href: "#", label: "Facebook" },
  { icon: <FaInstagram className="size-6" />, href: "#", label: "Instagram" },
  { icon: <FaTwitter className="size-6" />, href: "#", label: "Twitter" },
  { icon: <FaTiktok className="size-6" />, href: "#", label: "TikTok" },
];

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <footer>
      <div className="w-full container bg-primary rounded-t-[24px] xl:rounded-t-[32px] mx-auto px-6 md:px-[72px] pt-14 md:pt-16 pb-14 md:pb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left: Text Content */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-4xl xl:text-[48px] font-semibold text-white uppercase leading-tight mb-3">
              JOIN OUR KICKSPLUS
              <br />
              CLUB &amp; GET 15% OFF
            </h2>
            <p className="text-white/80 text-sm xl:text-[20px] font-semibold font-open-sans">
              Sign up for free! Join the community.
            </p>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex items-center gap-1 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 h-[48px] px-4 text-sm bg-transparent border border-white text-white placeholder:text-white/40 outline-none rounded-md"
              />
              <button
                type="submit"
                className="w-[102px] h-[48px] bg-[#232321] text-white text-sm font-semibold uppercase tracking-wider rounded-[4px] xl:rounded-[8px] hover:bg-black transition-colors cursor-pointer whitespace-nowrap"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right: Big KICKS Logo */}
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block">
              <div className="w-[180px] sm:w-[280px] md:w-[351px]">
                <Image
                  src={kicksLogo}
                  alt="Kicks Logo"
                  width={351}
                  height={88}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bg-[#FFA52F] rounded-full -top-3 -right-3 sm:-top-8 sm:-right-6 md:-top-11 md:right-0 p-1 sm:p-1.5">
                <Plus
                  size={14}
                  className="text-primary sm:hidden"
                  strokeWidth={3}
                />
                <Plus
                  size={26}
                  className="text-primary hidden sm:block"
                  strokeWidth={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full container mx-auto rounded-[32px] xl:rounded-[48px] bg-[#232321] -mt-12 m  overflow-hidden">
        {/* Main Footer Content */}
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-12 px-5 md:px-10 pt-10">
          {/* About Us — fixed 446px width on XL */}
          <div className="w-full xl:w-[446px] shrink-0">
            <h3 className="text-[#FFA52F] text-[32px] xl:text-[36px] font-semibold mb-4">
              About us
            </h3>
            <p className="text-white/70 text-lg xl:text-[20px] font-semibold leading-relaxed">
              We are the biggest hyperstore in the universe. We got you all
              cover with our{" "}
              <span className="text-white underline cursor-pointer">
                exclusive
              </span>{" "}
              collections and latest drops.
            </p>
          </div>

          {/* Right columns — Categories, Company, Follow Us */}
          <div className="flex flex-1 flex-col sm:flex-row gap-10 sm:gap-12">
            {/* Categories */}
            <div className="flex-1">
              <h3 className="text-[#FFA52F] text-[24px] font-semibold mb-6">
                Categories
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white font-medium text-base xl:text-[18px] hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex-1">
              <h3 className="text-[#FFA52F] text-[24px] font-semibold mb-6">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white font-medium text-base xl:text-[18px] hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex-1">
              <h3 className="text-[#FFA52F] text-[24px] font-semibold mb-6">
                Follow us
              </h3>
              <div className="flex items-center gap-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white hover:text-primary transition-colors scale-110 size-6"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Big Decorative Logo */}
        <div className="w-full overflow-hidden mt-12 md:mt-24 px-1 md:px-4">
          <Image
            src={logo}
            alt="Kicks Logo"
            width={1262}
            height={314}
            className="w-full object-cover opacity-90"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-[#232321] text-sm xl:text-base font-semibold opacity-60">
          © All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
