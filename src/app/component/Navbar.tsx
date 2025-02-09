"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black ">
      <div className="flex justify-between gap-1 items-center px-4 sm:px-6 lg:px-10 h-[67px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Image src="/image/logopic.png" width={50} height={80} alt="logo" />
        </div>
        <h3 className="font-bold text-white pt-[12px]  text-2xl md:text-3xl lg:text-4xl">
        The World Travel
    </h3>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-16 text-sm font-bold  text-green-600">
            {["Home", "Destination", "About", "Contact"].map((item, index) => (
              <li key={index} className="hover:text-green-300 text-[18px]">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Login/Register */}

          {/* Icons */}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-green-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-600 text-base font-medium">
            {["Home", "Destination", "About", "Contact"].map((item, index) => (
              <li key={index} className="hover:text-black">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
