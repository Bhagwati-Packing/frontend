// components/NavBar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  return (
    <header className="absolute top-0 left-0 right-0 bg-black/20 text-white w-full z-30 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Empty left space for balance */}
          <div className="flex-1"></div>

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

          {/* Logo - Right side */}
          <div className="flex-1 flex justify-end">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-32">
                <Image
                  src="/image/logo.png"
                  alt="Bhagwati Packing Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-yellow-500 transition-colors duration-300 ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
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