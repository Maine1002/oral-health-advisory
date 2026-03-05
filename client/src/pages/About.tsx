/**
 * About — Oral Health Advisory
 */

import { Link } from "wouter";
import { Shield, BookOpen, FlaskConical, Users } from "lucide-react";

const DENTIST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663401746603/M54CeUzbQAJE5tbCfQm74p/dentist-consultation-ZWe35pedEX8d664rpEdiz9.webp";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-16 lg:pt-18">
      <div className="bg-white border-b border-[#E8E4DC]">
        <div className="container py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#C9A84C]" />
            </div>
            <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest">About Us</div>
          </div>
          <h1 className="font-display text-4xl font-bold text-[#1A1A1A] mb-4">About Oral Health Advisory</h1>
          <p className="text-[#4A5A50] text-lg max-w-2xl leading-relaxed">
            We're an independent editorial team dedicated to helping Australians make informed decisions about their oral health and teeth whitening.
          </p>
        </div>
      </div>

      <div className="container py-12 lg:py-16">
        <div className="max-w-3xl">
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Our Mission</h2>
            <p className="text-[#4A5A50] leading-relaxed mb-4">
              Oral Health Advisory was founded with a simple mission: to provide Australians with honest, evidence-based information about oral health and teeth whitening — without the marketing spin.
            </p>
            <p className="text-[#4A5A50] leading-relaxed mb-4">
              The teeth whitening market is crowded with products making exaggerated claims. We cut through the noise by independently testing products, consulting with dental professionals, and presenting our findings in a clear, accessible format.
            </p>
            <p className="text-[#4A5A50] leading-relaxed">
              We believe that good oral health information should be free, accessible, and trustworthy. That's why we publish our methodology, disclose our affiliate relationships, and maintain strict editorial independence.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Our Team</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-[#E8E4DC] rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-[#1B4332] flex items-center justify-center mb-3">
                  <span className="font-display font-bold text-[#C9A84C]">SM</span>
                </div>
                <div className="font-display font-semibold text-[#1A1A1A] mb-0.5">Dr. Sarah Mitchell, BDS</div>
                <div className="text-xs text-[#C9A84C] font-label uppercase tracking-wide mb-2">Advisory Dentist</div>
                <p className="text-sm text-[#4A5A50]">General dentist with 12 years of experience. Reviews all product assessments and provides clinical context for our guides.</p>
              </div>
              <div className="bg-white border border-[#E8E4DC] rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-[#1B4332] flex items-center justify-center mb-3">
                  <span className="font-display font-bold text-[#C9A84C]">OHA</span>
                </div>
                <div className="font-display font-semibold text-[#1A1A1A] mb-0.5">OHA Editorial Team</div>
                <div className="text-xs text-[#C9A84C] font-label uppercase tracking-wide mb-2">Writers & Researchers</div>
                <p className="text-sm text-[#4A5A50]">Health writers and researchers with backgrounds in consumer journalism and dental health communication.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: BookOpen, title: "Editorial Independence", desc: "Our rankings and recommendations are never influenced by commercial relationships." },
                { icon: FlaskConical, title: "Evidence-Based", desc: "Every claim we make is supported by research, clinical evidence, or expert opinion." },
                { icon: Shield, title: "Transparency", desc: "We disclose all affiliate relationships and explain exactly how we assess products." },
                { icon: Users, title: "Reader-First", desc: "Our goal is to help you make the best decision for your health — not to maximise clicks." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 bg-white border border-[#E8E4DC] rounded-lg p-4">
                  <div className="w-8 h-8 rounded-full bg-[#D4EAD0] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#1B4332]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1A1A1A] mb-1">{title}</div>
                    <p className="text-xs text-[#4A5A50]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-3">
            <Link href="/editorial-policy" className="btn-outline text-sm">Editorial Policy</Link>
            <Link href="/methodology" className="btn-outline text-sm">Review Methodology</Link>
            <Link href="/disclosure" className="btn-outline text-sm">Disclosure</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
