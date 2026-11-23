"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t("Home", "الرئيسية"), href: "/" },
    { name: t("Log In", "تسجيل الدخول"), href: "/login" },
    { name: t("Register", "حساب جديد"), href: "/register" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-serif font-semibold text-[#2C2520]">
          {t("Furniture.", "أثاث.")}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-[#2C2520] font-semibold" : "text-[#7A7067] hover:text-[#2C2520]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2C2520] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFECE6] hover:bg-[#E2DDD3] text-xs font-medium text-[#2C2520] transition cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "العربية" : "English"}</span>
          </button>
        </div>

        {/* Mobile Controls (Language + Hamburger Button) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#EFECE6] text-xs font-medium text-[#2C2520]"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "عربي" : "EN"}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2C2520] hover:bg-[#EFECE6]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D9] px-6 py-4 space-y-3 overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    isActive ? "text-[#2C2520] font-bold" : "text-[#7A7067]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}