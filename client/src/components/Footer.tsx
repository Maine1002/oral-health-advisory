/**
 * Footer — Oral Health Advisory
 * Design: Forest green background, cream text, editorial feel
 * Includes trust signals, editorial policy link, and disclosure
 */

import { Link } from "wouter";
import { Shield, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-[#FAFAF7]">
      {/* Main footer */}
      <div className="container py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-[#1B4332]" />
              </div>
              <div>
                <div className="font-display font-semibold text-[#FAFAF7] text-base leading-tight">
                  Oral Health Advisory
                </div>
                <div className="font-label text-[10px] text-[#A8C5A0] uppercase tracking-widest leading-none">
                  Independent Reviews
                </div>
              </div>
            </div>
            <p className="text-[#A8C5A0] text-sm leading-relaxed mb-4">
              Independent, evidence-based oral health guidance. We test, compare, and recommend products to help Australians make informed decisions about their dental care.
            </p>
            <a
              href="mailto:editorial@oralhealthadvisory.org"
              className="flex items-center gap-2 text-[#C9A84C] text-sm hover:text-[#E8C96A] transition-colors no-underline"
            >
              <Mail className="w-4 h-4" />
              editorial@oralhealthadvisory.org
            </a>
          </div>

          {/* Reviews column */}
          <div>
            <h4 className="font-label font-700 text-[#C9A84C] uppercase tracking-widest text-xs mb-4">
              Reviews
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Best Whitening Kits in Australia", href: "/best-whitening-kits" },
                { label: "Best for Sensitive Teeth", href: "/sensitive-teeth-whitening" },
                { label: "LED vs Whitening Strips", href: "/led-vs-strips" },
                { label: "SmilePro Review", href: "/best-whitening-kits" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#D4EAD0] text-sm hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides column */}
          <div>
            <h4 className="font-label font-700 text-[#C9A84C] uppercase tracking-widest text-xs mb-4">
              Guides
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "At-Home vs In-Chair Whitening", href: "/at-home-vs-in-chair" },
                { label: "Is Teeth Whitening Safe?", href: "/is-whitening-safe" },
                { label: "What Dentists Recommend", href: "/dentist-recommendations" },
                { label: "Find Your Perfect Kit", href: "/quiz" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#D4EAD0] text-sm hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Legal column */}
          <div>
            <h4 className="font-label font-700 text-[#C9A84C] uppercase tracking-widest text-xs mb-4">
              About Us
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Oral Health Advisory", href: "/about" },
                { label: "Editorial Policy", href: "/editorial-policy" },
                { label: "Review Methodology", href: "/methodology" },
                { label: "Disclosure & Affiliates", href: "/disclosure" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#D4EAD0] text-sm hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-[#2D6A4F]">
        <div className="container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#A8C5A0] text-xs text-center md:text-left leading-relaxed max-w-2xl">
              <strong className="text-[#D4EAD0]">Disclosure:</strong> Oral Health Advisory may earn a commission when you purchase through links on our site. This does not influence our editorial assessments — we only recommend products we genuinely believe offer value. See our{" "}
              <Link href="/disclosure" className="text-[#C9A84C] hover:text-[#E8C96A] underline">
                full disclosure policy
              </Link>.
            </p>
            <p className="text-[#6B9B7A] text-xs flex-shrink-0">
              © {new Date().getFullYear()} Oral Health Advisory
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
