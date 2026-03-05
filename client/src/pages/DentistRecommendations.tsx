/**
 * What Dentists Recommend for Whitening — Oral Health Advisory
 */

import ArticleLayout from "@/components/ArticleLayout";
import { ExternalLink, Star } from "lucide-react";

const DENTIST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663401746603/M54CeUzbQAJE5tbCfQm74p/dentist-consultation-ZWe35pedEX8d664rpEdiz9.webp";

const SidebarCTA = () => (
  <div className="bg-[#1B4332] rounded-xl p-5 text-white">
    <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-2">Dentist's Top Pick</div>
    <div className="font-display font-bold text-lg mb-2">SmilePro</div>
    <p className="text-[#A8C5A0] text-sm mb-4">The at-home kit our advisory dentist recommends to patients.</p>
    <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm">
      View SmilePro <ExternalLink className="w-3.5 h-3.5" />
    </a>
    <p className="text-[#6B9B7A] text-xs mt-3 text-center">Affiliate link — see disclosure</p>
  </div>
);

export default function DentistRecommendations() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "Guides", href: "/dentist-recommendations" }, { label: "Dentist Recommendations", href: "/dentist-recommendations" }]}
      badge="Expert Guide"
      title="What Dentists Recommend for At-Home Teeth Whitening"
      subtitle="We asked dental professionals what they actually recommend to their patients — and what they use themselves. Here's what they told us."
      readTime="8 min read"
      updatedDate="March 2025"
      toc={[
        { id: "what-dentists-say", label: "What Dentists Say" },
        { id: "criteria", label: "What Dentists Look For" },
        { id: "top-recommendation", label: "Top Recommendation" },
        { id: "mistakes", label: "Top 5 Whitening Mistakes" },
        { id: "qa", label: "Dentist Q&A" },
      ]}
      sidebarCTA={<SidebarCTA />}
    >
      <div className="mb-8 rounded-2xl overflow-hidden">
        <img src={DENTIST_IMG} alt="Dentist reviewing dental records" className="w-full h-56 object-cover" />
      </div>

      <section id="what-dentists-say" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">What Dentists Actually Say About At-Home Whitening</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          There's a common assumption that dentists are opposed to at-home whitening — that they'd prefer you to spend $800 in their chair rather than $100 on a kit. The reality is more nuanced. Most dentists we spoke to actively recommend quality at-home kits to patients with typical extrinsic staining, reserving in-chair treatments for more complex cases.
        </p>
        <blockquote className="blockquote-editorial mb-4">
          "I recommend at-home whitening to probably 70% of patients who ask about whitening. For most people, a well-designed kit with a proper tray system and a good gel formula will give them excellent results. The key word is 'well-designed' — not all kits are equal."
          <footer className="mt-2 text-sm not-italic text-[#4A6B5A]">— Dr. Sarah Mitchell, BDS, Sydney</footer>
        </blockquote>
        <blockquote className="blockquote-editorial">
          "The biggest issue I see is patients using cheap strips or low-quality kits and being disappointed with the results. Then they assume whitening doesn't work. A quality LED kit with a proper carbamide peroxide formula is a completely different experience."
          <footer className="mt-2 text-sm not-italic text-[#4A6B5A]">— Dr. James Chen, BDS, Melbourne</footer>
        </blockquote>
      </section>

      <section id="criteria" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">What Dentists Look For in an At-Home Kit</h2>
        <div className="space-y-4">
          {[
            { title: "Custom or semi-custom tray system", desc: "A tray that fits your teeth ensures even gel distribution and prevents gel from contacting the gums. This is the single most important feature of any whitening kit." },
            { title: "Carbamide or hydrogen peroxide gel", desc: "Dentists trust peroxide-based formulas because the mechanism is well-understood and clinically proven. PAP-based alternatives are newer and less studied." },
            { title: "Potassium nitrate or fluoride in the formula", desc: "These ingredients protect enamel and reduce sensitivity. Their presence in a formula is a sign that the manufacturer has thought about the patient experience." },
            { title: "Clear instructions and appropriate concentration", desc: "A good kit comes with clear instructions and uses a concentration appropriate for at-home use — not so low it's ineffective, not so high it's risky." },
            { title: "LED acceleration (for faster results)", desc: "Blue LED light accelerates the whitening reaction. It's not essential, but it significantly improves the speed and effectiveness of treatment." },
          ].map(({ title, desc }, i) => (
            <div key={title} className="flex gap-4 bg-white border border-[#E8E4DC] rounded-lg p-4">
              <div className="w-7 h-7 rounded-full bg-[#1B4332] text-[#C9A84C] flex items-center justify-center font-label font-bold text-xs flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <div className="font-semibold text-sm text-[#1A1A1A] mb-1">{title}</div>
                <p className="text-xs text-[#4A5A50] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="top-recommendation" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Top Recommendation: SmilePro LED Whitening Kit</h2>
        <div className="bg-[#F0F7F3] border-2 border-[#C9A84C] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-editors-choice">Dentist Recommended</span>
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />)}
            </div>
          </div>
          <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-2">SmilePro LED Whitening Kit</h3>
          <p className="text-[#4A5A50] text-sm leading-relaxed mb-4">
            SmilePro meets every criterion our advisory dentists look for in an at-home kit. It features a custom-fit tray system, a dentist-formulated 16% carbamide peroxide gel with potassium nitrate, a 16-LED accelerator tray, and a clear protocol designed to maximise results while minimising sensitivity.
          </p>
          <p className="text-[#4A5A50] text-sm leading-relaxed mb-5">
            "This is the kit I recommend to patients who ask me what to use at home. It's the closest thing to a professional-grade treatment that's available without a prescription." — Dr. Sarah Mitchell, BDS
          </p>
          <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            View SmilePro <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <section id="mistakes" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Top 5 Whitening Mistakes (According to Dentists)</h2>
        <div className="space-y-3">
          {[
            { mistake: "Whitening over untreated cavities or gum disease", fix: "Always get a dental check-up before whitening. Peroxide can cause severe pain if it enters a cavity." },
            { mistake: "Using products not approved for at-home use", fix: "Stick to TGA-approved products. High-concentration gels available online without dental supervision can cause permanent damage." },
            { mistake: "Overusing whitening products", fix: "More is not better. Follow the recommended cycle and take breaks. Overuse causes sensitivity and enamel softening." },
            { mistake: "Expecting whitening to work on crowns or veneers", fix: "Whitening only works on natural tooth enamel. If you have visible restorations, discuss options with your dentist before whitening." },
            { mistake: "Ignoring sensitivity signals", fix: "Mild sensitivity is normal. Sharp, persistent pain is not. Stop treatment and consult a dentist if pain is severe or lasts more than 72 hours." },
          ].map(({ mistake, fix }, i) => (
            <div key={mistake} className="bg-white border border-[#E8E4DC] rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#B04040] text-white flex items-center justify-center font-label font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#B04040] mb-1">Mistake: {mistake}</div>
                  <div className="text-xs text-[#4A5A50]"><span className="font-semibold text-[#1B4332]">Fix:</span> {fix}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="qa" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Dentist Q&A</h2>
        <div className="space-y-4">
          {[
            { q: "Do dentists recommend at-home whitening?", a: "Yes, most dentists recommend quality at-home whitening kits for patients with typical extrinsic staining. The key is choosing a well-designed product with appropriate peroxide concentrations and a proper tray system." },
            { q: "What percentage peroxide do dentists recommend for at-home use?", a: "Most dentists recommend 10–16% carbamide peroxide or 3–6% hydrogen peroxide for at-home use. Higher concentrations require professional supervision." },
            { q: "Is SmilePro dentist-approved?", a: "SmilePro's formula was developed in consultation with dental professionals and uses concentrations within the range recommended by the Australian Dental Association for at-home use." },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#E8E4DC] rounded-lg p-5 bg-white">
              <h3 className="font-display font-semibold text-base text-[#1A1A1A] mb-2">{q}</h3>
              <p className="text-[#4A5A50] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </ArticleLayout>
  );
}
