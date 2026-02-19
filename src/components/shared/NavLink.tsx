import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

// Interface for the Navigation Link component props
interface NavLinkProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

// Navigation Link component
const NavLink = ({ label, href, hasDropdown = false }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 text-[16px] font-semibold text-[#232321] transition-colors"
    >
      {label}
      {hasDropdown && <FaCaretDown size={16} className="text-[#232321]" />}
    </Link>
  );
};

export default NavLink;
