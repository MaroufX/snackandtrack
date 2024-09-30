import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  name: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, href }) => {
  return (
    <Link
      to={href}
      className="text-black hover:text-[#39B54A] px-3 py-2 rounded-md text-xl font-medium"
    >
      {name}
    </Link>
  );
};

export default NavItem;
