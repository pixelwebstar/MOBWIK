"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Smartphone, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${isScrolled ? "bg-surface-2 py-3" : "bg-transparent py-5"
        }`}
    >
      {/* Scroll Indicator - Unified Bottom Edge */}
      <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-border transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`} />
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-opacity duration-300 z-[60] ${isScrolled ? "opacity-100" : "opacity-0"}`}
        style={{ width: `${scrollProgress}%` }}
      />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tighter text-secondary uppercase">
              Mob <span className="text-primary font-black">Wik</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-bold uppercase tracking-widest transition-colors ${pathname === link.href ? "text-primary" : "text-secondary/70 hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className="bg-primary text-white px-6 py-3 rounded-md font-bold hover:bg-primary/90 transition-all text-sm uppercase tracking-wider shadow-sm flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-secondary"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full left-0 top-full p-6 space-y-6 border-b border-border shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-lg font-bold uppercase tracking-widest ${pathname === link.href ? "text-primary" : "text-secondary"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center space-x-2 bg-primary text-white px-5 py-4 rounded-md font-bold w-full shadow-sm"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
