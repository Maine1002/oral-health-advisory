/**
 * Navigation — Oral Health Advisory
 * Design: Confident Authority — forest green header, Lora logo, Nunito Sans nav links
 * Sticky top nav with mega-menu dropdown for Reviews & Guides
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Shield } from "lucide-react";

const navItems = [
  {
    label: "Reviews",
    href: "/best-whitening-kits",
    children: [
      { label: "Best Whitening Kits in Australia", href: "/best-whitening-kits" },
      { label: "Best for Sensitive Teeth", href: "/sensitive-teeth-whitening" },
      { label: "LED vs Whitening Strips", href: "/led-vs-strips" },
    ],
  },
  {
    label: "Guides",
    href: "/at-home-vs-in-chair",
    children: [
      { label: "At-Home vs In-Chair Whitening", href: "/at-home-vs-in-chair" },
      { label: "Is Teeth Whitening Safe?", href: "/is-whitening-safe" },
      { label: "What Dentists Recommend", href: "/dentist-recommendations" },
    ],
  },
  { label: "Find Your Kit", href: "/quiz" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E8E4DC]"
          : "bg-white border-b border-[#E8E4DC]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            <div className="w-8 h-8 rounded-full bg-[#1B4332] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D6A4F] transition-colors">
              <Shield className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <div>
              <div className="font-display font-semibold text-[#1A1A1A] text-base leading-tight">
                Oral Health Advisory
              </div>
              <div className="font-label text-[10px] text-[#6B7B6E] uppercase tracking-widest leading-none">
                Independent Reviews
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="nav-link flex items-center gap-1 bg-transparent border-0 p-0">
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-white border border-[#E8E4DC] rounded-lg shadow-lg overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm font-body font-medium text-[#2C3E35] hover:bg-[#F0F7F3] hover:text-[#1B4332] transition-colors no-underline border-b border-[#F0EDE5] last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="nav-link no-underline">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/quiz" className="btn-gold text-sm py-2 px-4">
              Find My Kit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#1B4332] hover:bg-[#F0F7F3] rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E4DC] shadow-lg">
          <div className="container py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full text-left flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#1A1A1A] hover:bg-[#F0F7F3] rounded-md transition-colors"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-[#4A6B5A] hover:bg-[#F0F7F3] rounded-md transition-colors no-underline"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-semibold text-[#1A1A1A] hover:bg-[#F0F7F3] rounded-md transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[#E8E4DC]">
              <Link href="/quiz" className="btn-gold w-full justify-center">
                Find My Kit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
