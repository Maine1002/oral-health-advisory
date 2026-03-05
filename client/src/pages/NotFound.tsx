import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-[#FAFAF7] flex items-center">
      <div className="container py-20 text-center">
        <div className="font-display text-8xl font-bold text-[#D4EAD0] mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-[#1A1A1A] mb-3">Page Not Found</h1>
        <p className="text-[#4A5A50] mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Try one of our popular guides below.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/best-whitening-kits" className="btn-outline">Best Whitening Kits</Link>
        </div>
        <div className="flex flex-wrap gap-4 max-w-lg mx-auto justify-center">
          {[
            { label: "Sensitive Teeth Guide", href: "/sensitive-teeth-whitening" },
            { label: "LED vs Strips", href: "/led-vs-strips" },
            { label: "Find My Kit Quiz", href: "/quiz" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#1B4332] font-medium hover:text-[#2D6A4F] no-underline">
              <ArrowRight className="w-3.5 h-3.5" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
