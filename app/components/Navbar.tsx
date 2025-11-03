// components/NavBar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Check if current page has hero background
  const hasHeroBackground = pathname === "/" || pathname === "/about";

  return (
    <header
      className={`top-0 left-0 right-0 text-white w-full z-30 shadow-lg ${
        hasHeroBackground
          ? "absolute bg-black/20 backdrop-blur-md border-b border-white/10"
          : "relative bg-gray-900 border-b border-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex space-x-8 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 font-medium ${
                  isActive(link.href)
                    ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                    : "hover:text-yellow-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-yellow-500 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className={`md:hidden border-t ${
            hasHeroBackground
              ? "bg-black/30 backdrop-blur-md border-white/10"
              : "bg-gray-800 border-gray-700"
          }`}
        >
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 text-lg transition-colors duration-300 hover:bg-white/5 rounded-md px-3 ${
                  isActive(link.href)
                    ? "text-yellow-500 bg-white/10"
                    : "hover:text-yellow-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}