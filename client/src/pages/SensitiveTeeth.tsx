/**
 * Best Whitening for Sensitive Teeth — Oral Health Advisory
 */

import { Link } from "wouter";
import ArticleLayout from "@/components/ArticleLayout";
import { CheckCircle, XCircle, Award, ExternalLink, AlertTriangle } from "lucide-react";

const SidebarCTA = () => (
  <div className="bg-[#1B4332] rounded-xl p-5 text-white">
    <div className="badge-editors-choice mb-3">
      <Award className="w-3 h-3" />
      Best for Sensitive
    </div>
    <div className="font-display font-bold text-lg mb-1">SmilePro</div>
    <div className="text-[#A8C5A0] text-sm mb-2">Sensitive Formula Available</div>
    <div className="text-xs text-[#A8C5A0] mb-4">Designed for sensitive enamel with low-irritation gel and gradual whitening protocol.</div>
    <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm">
      View SmilePro <ExternalLink className="w-3.5 h-3.5" />
    </a>
    <p className="text-[#6B9B7A] text-xs mt-3 text-center">Affiliate link — see disclosure</p>
  </div>
);

export default function SensitiveTeeth() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "Reviews", href: "/best-whitening-kits" }, { label: "Sensitive Teeth", href: "/sensitive-teeth-whitening" }]}
      badge="Specialist Guide"
      title="Best Teeth Whitening for Sensitive Teeth (2025)"
      subtitle="Sensitive teeth don't have to mean no whitening. We explain what causes sensitivity and which products are safe to use."
      readTime="9 min read"
      updatedDate="March 2025"
      toc={[
        { id: "causes", label: "Why Whitening Causes Sensitivity" },
        { id: "what-to-look-for", label: "What to Look For" },
        { id: "top-picks", label: "Top Picks for Sensitive Teeth" },
        { id: "tips", label: "Tips to Reduce Sensitivity" },
        { id: "faq", label: "FAQ" },
      ]}
      sidebarCTA={<SidebarCTA />}
    >
      <div className="bg-[#FFF8E6] border border-[#F0D080] rounded-xl p-5 mb-8 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-semibold text-sm text-[#856404] mb-1">Important Note</div>
          <p className="text-sm text-[#6B5000]">If you experience severe or persistent tooth sensitivity, consult a dentist before using any whitening product. Sensitivity can indicate underlying enamel erosion or other conditions.</p>
        </div>
      </div>

      <section id="causes" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Why Does Teeth Whitening Cause Sensitivity?</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          Tooth sensitivity during whitening occurs when the active whitening agent — typically hydrogen peroxide or carbamide peroxide — temporarily opens the dentinal tubules in your enamel. This allows the peroxide to penetrate deeper into the tooth structure, which is what causes whitening, but it also allows temperature and pressure stimuli to reach the nerve more easily.
        </p>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          The good news: this sensitivity is almost always temporary and resolves within 24–48 hours of stopping treatment. The key is choosing the right product and using it correctly.
        </p>
        <blockquote className="blockquote-editorial">
          "Sensitivity from whitening is a sign the product is working — but it should never be severe. If you're in real pain, stop and see your dentist. Mild zingers are normal; sharp, lasting pain is not."
          <footer className="mt-2 text-sm not-italic text-[#4A6B5A]">— Dr. Sarah Mitchell, BDS, OHA Advisory Panel</footer>
        </blockquote>
      </section>

      <section id="what-to-look-for" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">What to Look For in a Sensitive-Friendly Whitening Kit</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            { title: "Lower peroxide concentration", desc: "6–10% carbamide peroxide is gentler than 16–22% formulas. Results take longer but sensitivity is significantly reduced." },
            { title: "Potassium nitrate or fluoride", desc: "These ingredients desensitise the nerve and strengthen enamel. Look for them in the gel formula." },
            { title: "Shorter treatment times", desc: "30-minute sessions cause less sensitivity than 60-minute sessions. Some kits offer a 'sensitive mode'." },
            { title: "Custom-fit trays", desc: "Trays that fit well prevent gel from contacting the gums, which is a major cause of sensitivity and irritation." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white border border-[#E8E4DC] rounded-lg p-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#1B4332] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm text-[#1A1A1A] mb-1">{title}</div>
                  <p className="text-xs text-[#4A5A50] leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="top-picks" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Top Picks for Sensitive Teeth</h2>
        <div className="space-y-5">
          {[
            {
              rank: 1,
              name: "SmilePro LED Kit (Sensitive Mode)",
              score: "9.1/10",
              badge: "Best for Sensitive",
              desc: "SmilePro's sensitive protocol uses a lower-concentration gel with potassium nitrate and a shorter 15-minute session time. The LED tray accelerates whitening so you need fewer sessions, reducing overall exposure time. This is our top pick for sensitive teeth who still want real results.",
              pros: ["Dedicated sensitive formula available", "Potassium nitrate for nerve calming", "Shorter sessions reduce exposure", "Excellent results despite lower concentration"],
              cons: ["Slightly slower results than full-strength formula"],
              href: "https://smilepro.com.au",
              external: true,
            },
            {
              rank: 2,
              name: "Opalescence Go 6%",
              score: "7.5/10",
              badge: "Runner Up",
              desc: "A dentist-grade pre-filled tray system with a very gentle 6% hydrogen peroxide formula. The trays are comfortable and the low concentration minimises sensitivity. Best for those with very sensitive teeth who prioritise comfort over speed.",
              pros: ["Very low 6% hydrogen peroxide", "Dentist-grade formula", "Pre-filled — no mess"],
              cons: ["Slower results", "Not custom-fit"],
              href: "/best-whitening-kits",
              external: false,
            },
            {
              rank: 3,
              name: "HiSmile PAP+ Kit",
              score: "7.0/10",
              badge: "Peroxide-Free",
              desc: "For those who want to avoid peroxide entirely, HiSmile's PAP+ formula uses phthalimidoperoxycaproic acid — a peroxide alternative that causes virtually no sensitivity. Results are more subtle but the comfort level is excellent.",
              pros: ["Zero peroxide — virtually no sensitivity", "Good for maintenance whitening"],
              cons: ["Less effective than peroxide options", "Premium price for moderate results"],
              href: "/best-whitening-kits",
              external: false,
            },
          ].map((p) => (
            <div key={p.name} className={`rounded-xl border-2 overflow-hidden ${p.rank === 1 ? "border-[#C9A84C]" : "border-[#E8E4DC]"} bg-white`}>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label text-xs text-[#6B7B6E] uppercase tracking-wide">#{p.rank}</span>
                  <span className={p.rank === 1 ? "badge-editors-choice" : "badge-best-pick"}>{p.badge}</span>
                  <span className="font-bold text-[#1B4332] text-sm ml-auto">{p.score}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-2">{p.name}</h3>
                <p className="text-[#4A5A50] text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <div>
                    {p.pros.map((pro) => (
                      <div key={pro} className="flex items-start gap-1.5 text-xs text-[#2D4A3E] mb-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                        {pro}
                      </div>
                    ))}
                  </div>
                  <div>
                    {p.cons.map((con) => (
                      <div key={con} className="flex items-start gap-1.5 text-xs text-[#4A3030] mb-1.5">
                        <XCircle className="w-3.5 h-3.5 text-[#B04040] flex-shrink-0 mt-0.5" />
                        {con}
                      </div>
                    ))}
                  </div>
                </div>
                {p.external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                    View SmilePro <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link href={p.href} className="btn-outline text-sm">See Full Review</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="tips" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Tips to Reduce Sensitivity During Whitening</h2>
        <div className="space-y-3">
          {[
            "Use a sensitivity toothpaste (containing potassium nitrate) for 2 weeks before starting whitening.",
            "Start with shorter sessions (15 min) and build up gradually.",
            "Skip a day between sessions if you experience sensitivity.",
            "Avoid very hot or cold food and drinks for 24 hours after each session.",
            "Apply a fluoride gel to your trays after whitening to remineralise enamel.",
            "Never leave whitening gel on longer than directed — more time does not mean better results.",
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
            { q: "Can I whiten my teeth if I have sensitive teeth?", a: "Yes, in most cases. Choose a lower-concentration formula, use a desensitising toothpaste beforehand, and follow the instructions carefully. If sensitivity is severe, consult a dentist first." },
            { q: "How long does whitening sensitivity last?", a: "Typically 24–48 hours after each session. If sensitivity persists beyond 72 hours, stop treatment and consult a dentist." },
            { q: "Is SmilePro safe for sensitive teeth?", a: "Yes. SmilePro offers a sensitive formula with a lower peroxide concentration and includes potassium nitrate to calm the nerve. Many customers with sensitive teeth report excellent results with minimal discomfort." },
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
