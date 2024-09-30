import React, { useState } from "react";
import Logo from "./components/Logo";
import MobileMenuButton from "./components/MobileMenuButton";
import NavItem from "./components/NavItem";

const navItems = [
  { name: "Home", href: "/home" },
  { name: "Menu", href: "/Menu" },
  { name: "Services", href: "/services" },

];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 sticky top-0 z-50  ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <NavItem key={item.name} name={item.name} href={item.href} />
          ))}
          <a
            href="/contact"
            className="bg-[#39B54A] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
          >
            Contact Us
          </a>
        </div>
        <div className="md:hidden">
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black hover:text-[#39B54A] text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/contact"
            className="bg-[#39B54A] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
