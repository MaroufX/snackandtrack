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
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="flex items-center mb-4">
          <Logo />
        </div>
        <div className="flex space-x-4 mb-4">
          {navItems.map((item) => (
            <NavItem key={item.name} name={item.name} href={item.href} />
          ))}
        </div>
        <div className="flex">
          <p className="text-black m-1 font-medium">go to top</p>
          <button
            onClick={scrollToTop}
            className="bg-[#39B54A] text-white px-2 py-2 rounded-full  hover:bg-black"
          >
            <img src="/assets/Arrow-Up-Vector.png" alt="scroll up" />
          </button>
        </div>
      </div>
      <div className="container mx-auto flex flex-row  items-center justify-between bg-[#39B54A] rounded-md">
        <div className="flex flex-row justify-between m-3 mx-auto items-center container  ">
          <p className="pl-10">hello@snackandtrack.com</p>
          <p>0101 234 5678</p>
          <p className="pr-80">Somewhere in the World</p>
          <p className="pr-10">© 2023 Snack And Track. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
