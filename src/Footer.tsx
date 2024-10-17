import React from "react";
import Logo from "./components/Logo";
import NavItem from "./components/NavItem";

const navItems = [
  { name: "Home", href: "/home" },
  { name: "Menu", href: "/Menu" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F2F2F2] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo />
          </div>
          <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
            {navItems.map((item) => (
              <NavItem key={item.name} name={item.name} href={item.href} />
            ))}
          </nav>
          <div className="flex items-center">
            <p className="text-black m-1 font-medium">go to top</p>
            <button
              onClick={scrollToTop}
              className="bg-[#39B54A] text-white px-2 py-2 rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39B54A]"
              aria-label="Scroll to top"
            >
              <img
                src="/assets/Arrow-Up-Vector.png"
                alt=""
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="bg-[#39B54A] rounded-md p-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="mb-2 md:mb-0">hello@snackandtrack.com</p>
            <p className="mb-2 md:mb-0">0101 234 5678</p>
            <p className="mb-2 md:mb-0">Somewhere in the World</p>
            <p>© 2023 Snack And Track. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
