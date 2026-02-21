import logo from "@/assets/logo/footer-logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// TikTok icon (not in lucide-react)
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.88a8.27 8.27 0 0 0 4.84 1.55V7c-.97 0-1.88-.28-2.07-.31z" />
  </svg>
);

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
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <TikTokIcon />, href: "#", label: "TikTok" },
];

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-full md:max-h-[591px] container mx-auto rounded-[32px] xl:rounded-[48px] bg-[#232321] -mt-12 m  overflow-hidden">
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
                      className="text-white font-semibold text-lg xl:text-sm hover:text-primary transition-colors"
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
                      className="text-white font-semibold text-lg xl:text-sm hover:text-primary transition-colors"
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
                    className="text-white hover:text-primary transition-colors scale-110"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Big Decorative Logo */}
        <div className="w-full overflow-hidden mt-12 px-1 md:px-4">
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
