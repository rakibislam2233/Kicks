import { Facebook, Instagram, Twitter } from "lucide-react";
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
    <footer className="w-full bg-[#232321] overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* About Us */}
          <div className="lg:col-span-1">
            <h3 className="text-primary text-xl font-bold mb-4">About us</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We are the biggest hyperstore in the universe. We got you all
              cover with our{" "}
              <span className="text-white underline cursor-pointer">
                exclusive
              </span>{" "}
              collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Categories</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Follow us</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Big Decorative KICKS Watermark */}
      <div className="w-full overflow-hidden -mb-4 md:-mb-6 lg:-mb-8">
        <p className="text-[18vw] font-black text-white/10 uppercase leading-none text-center tracking-tighter select-none">
          KICKS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
