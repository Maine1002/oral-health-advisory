/**
 * Is Teeth Whitening Safe? — Oral Health Advisory
 */

import { Link } from "wouter";
import ArticleLayout from "@/components/ArticleLayout";
import { CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";

const SidebarCTA = () => (
  <div className="bg-[#1B4332] rounded-xl p-5 text-white">
    <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-2">Dentist-Approved</div>
    <div className="font-display font-bold text-lg mb-2">SmilePro</div>
    <p className="text-[#A8C5A0] text-sm mb-4">Formulated with enamel safety in mind. Dentist-reviewed formula.</p>
    <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm">
      View SmilePro <ExternalLink className="w-3.5 h-3.5" />
    </a>
    <p className="text-[#6B9B7A] text-xs mt-3 text-center">Affiliate link — see disclosure</p>
  </div>
);

export default function IsWhiteningSafe() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "Guides", href: "/is-whitening-safe" }, { label: "Is Whitening Safe?", href: "/is-whitening-safe" }]}
      badge="Safety Guide"
      title="Is Teeth Whitening Safe? What the Research Says"
      subtitle="A comprehensive, evidence-based look at the safety of peroxide-based whitening, enamel effects, and who should avoid whitening products."
      readTime="10 min read"
      updatedDate="March 2025"
      toc={[
        { id: "short-answer", label: "The Short Answer" },
        { id: "how-it-works", label: "How Whitening Works" },
        { id: "enamel-safety", label: "Does Whitening Damage Enamel?" },
        { id: "who-should-avoid", label: "Who Should Avoid Whitening" },
        { id: "safe-use", label: "How to Use Whitening Safely" },
        { id: "faq", label: "FAQ" },
      ]}
      sidebarCTA={<SidebarCTA />}
    >
      <section id="short-answer" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">The Short Answer</h2>
        <div className="bg-[#F0F7F3] border border-[#D4EAD0] rounded-xl p-5 mb-4">
          <p className="text-[#2D4A3E] text-sm leading-relaxed">
            <strong>Yes, teeth whitening is safe when used as directed.</strong> Decades of clinical research support the safety of hydrogen peroxide and carbamide peroxide for at-home whitening at approved concentrations. The key is using the right product correctly and not overusing it.
          </p>
        </div>
        <p className="text-[#4A5A50] leading-relaxed">
          The Australian Dental Association (ADA) and the Therapeutic Goods Administration (TGA) regulate whitening products in Australia. Products sold for at-home use are limited to 6% hydrogen peroxide or 18% carbamide peroxide — concentrations that have been extensively studied and found safe for consumer use.
        </p>
      </section>

      <section id="how-it-works" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">How Whitening Works</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          Teeth become discoloured through two mechanisms: extrinsic staining (surface stains from food, drink, and tobacco) and intrinsic staining (colour changes within the tooth structure itself). Peroxide-based whitening addresses both.
        </p>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          When hydrogen peroxide or carbamide peroxide contacts the tooth, it breaks down into water and oxygen radicals. These radicals penetrate the enamel and dentine, where they react with the chromophore molecules responsible for tooth colour — breaking the chemical bonds that cause discolouration. This is why whitening is effective for both surface and deeper stains.
        </p>
        <blockquote className="blockquote-editorial">
          "The chemistry of peroxide whitening is well understood and has been studied for over 30 years. At approved concentrations, it is one of the safest cosmetic dental procedures available."
          <footer className="mt-2 text-sm not-italic text-[#4A6B5A]">— Dr. Sarah Mitchell, BDS</footer>
        </blockquote>
      </section>

      <section id="enamel-safety" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Does Whitening Damage Enamel?</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          This is the most common concern — and the research is reassuring. Multiple systematic reviews have found that whitening at approved concentrations does not cause clinically significant enamel damage when used as directed. A 2019 meta-analysis published in the Journal of Dentistry reviewed 22 studies and found no evidence of enamel microhardness reduction at standard whitening concentrations.
        </p>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          The caveat is overuse. Using whitening products more frequently than recommended, or using products with excessively high peroxide concentrations, can cause temporary enamel softening and increased sensitivity. This is why it's important to follow the instructions and take breaks between whitening cycles.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[#F0F7F3] border border-[#D4EAD0] rounded-lg p-4">
            <div className="font-label text-xs text-[#1B4332] uppercase tracking-wide mb-2">Safe practices</div>
            {["Use products as directed", "Take breaks between cycles", "Use fluoride toothpaste", "Stay within recommended concentrations"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[#2D4A3E] mb-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
          <div className="bg-[#FFF8E6] border border-[#F0D080] rounded-lg p-4">
            <div className="font-label text-xs text-[#856404] uppercase tracking-wide mb-2">Avoid these</div>
            {["Overusing whitening products", "Ignoring sensitivity signals", "Using products not approved for at-home use", "Whitening over dental restorations"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[#4A3000] mb-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who-should-avoid" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Who Should Avoid Whitening (or Consult a Dentist First)</h2>
        <div className="space-y-3">
          {[
            { title: "Pregnant or breastfeeding women", desc: "There is insufficient research on the effects of whitening during pregnancy. Most dental professionals recommend avoiding whitening as a precaution." },
            { title: "Children under 16", desc: "The enamel and pulp of developing teeth are more susceptible to peroxide. Whitening is not recommended for children under 16." },
            { title: "People with active cavities or gum disease", desc: "Peroxide can penetrate through cavities and cause significant pain. Treat any dental issues before whitening." },
            { title: "People with dental restorations on visible teeth", desc: "Whitening does not affect crowns, veneers, or composite fillings. If you have restorations on front teeth, whitening may create an uneven appearance." },
            { title: "People with severe enamel erosion", desc: "If your enamel is already compromised, whitening may cause increased sensitivity or further damage. Consult a dentist first." },
          ].map(({ title, desc }) => (
            <div key={title} className="flex items-start gap-3 bg-white border border-[#E8E4DC] rounded-lg p-4">
              <AlertTriangle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-[#1A1A1A] mb-1">{title}</div>
                <p className="text-xs text-[#4A5A50] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="safe-use" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">How to Use Whitening Safely</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          Following these guidelines will minimise any risk and maximise your results. The most important principle is to treat whitening as a course of treatment — not an ongoing daily habit.
        </p>
        <div className="space-y-3">
          {[
            "Complete a dental check-up before starting any whitening treatment.",
            "Choose a product with TGA-approved peroxide concentrations.",
            "Follow the manufacturer's instructions precisely — do not exceed recommended session times.",
            "Use a sensitivity toothpaste containing potassium nitrate for 2 weeks before and during whitening.",
            "Take a break of at least 4–6 weeks between whitening cycles.",
            "If you experience severe sensitivity, sharp pain, or gum irritation, stop immediately and consult a dentist.",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-3 bg-white border border-[#E8E4DC] rounded-lg p-3.5">
              <div className="w-6 h-6 rounded-full bg-[#1B4332] text-[#C9A84C] flex items-center justify-center font-label font-bold text-xs flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-sm text-[#4A5A50] leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">FAQ</h2>
        <div className="space-y-4">
          {[
            { q: "Is teeth whitening safe for enamel?", a: "Yes, when used as directed. Research consistently shows that whitening at approved concentrations does not cause clinically significant enamel damage. The key is not to overuse whitening products." },
            { q: "How often can I whiten my teeth?", a: "Most dentists recommend whitening no more than once every 3–6 months. More frequent whitening increases the risk of sensitivity and enamel softening." },
            { q: "Is SmilePro safe?", a: "Yes. SmilePro uses a dentist-formulated gel within TGA-approved peroxide concentrations. The formula includes potassium nitrate and fluoride to protect enamel and reduce sensitivity." },
            { q: "Can whitening damage my gums?", a: "Whitening gel that contacts the gums can cause temporary irritation or whitening of the gum tissue. This is why a well-fitting tray is important. Any gum irritation typically resolves within 24 hours." },
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
