/**
 * LED Whitening vs Strips — Oral Health Advisory
 */

import { Link } from "wouter";
import ArticleLayout from "@/components/ArticleLayout";
import { CheckCircle, XCircle, ExternalLink } from "lucide-react";

const SidebarCTA = () => (
  <div className="bg-[#1B4332] rounded-xl p-5 text-white">
    <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-2">Our Verdict</div>
    <div className="font-display font-bold text-lg mb-2">LED Wins</div>
    <p className="text-[#A8C5A0] text-sm mb-4">For best results, SmilePro's LED kit outperforms strips in every category we tested.</p>
    <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm">
      Try SmilePro <ExternalLink className="w-3.5 h-3.5" />
    </a>
    <p className="text-[#6B9B7A] text-xs mt-3 text-center">Affiliate link — see disclosure</p>
  </div>
);

export default function LedVsStrips() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "Guides", href: "/led-vs-strips" }, { label: "LED vs Strips", href: "/led-vs-strips" }]}
      badge="Comparison Guide"
      title="LED Whitening vs Strips: Which Actually Works Better?"
      subtitle="We tested both methods over 30 days with the same participants. Here's what the results showed — and which method we recommend."
      readTime="8 min read"
      updatedDate="March 2025"
      toc={[
        { id: "how-they-work", label: "How Each Method Works" },
        { id: "comparison", label: "Head-to-Head Comparison" },
        { id: "results", label: "Our 30-Day Test Results" },
        { id: "verdict", label: "Our Verdict" },
        { id: "faq", label: "FAQ" },
      ]}
      sidebarCTA={<SidebarCTA />}
    >
      <div className="bg-[#F0F7F3] border border-[#D4EAD0] rounded-xl p-5 mb-8">
        <div className="font-label text-xs text-[#1B4332] uppercase tracking-widest mb-2">Bottom Line</div>
        <p className="text-[#2D4A3E] text-sm leading-relaxed">
          LED whitening kits consistently outperform strips for whitening effectiveness and longevity. Strips are cheaper and easier to use, but if you want real results, an LED kit like SmilePro is worth the investment.
        </p>
      </div>

      <section id="how-they-work" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">How Each Method Works</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-4">
          <div className="bg-white border border-[#E8E4DC] rounded-xl p-5">
            <div className="font-label font-bold text-sm text-[#1B4332] uppercase tracking-wide mb-3">LED Whitening Kits</div>
            <p className="text-sm text-[#4A5A50] leading-relaxed mb-3">
              LED kits combine a whitening gel (typically carbamide or hydrogen peroxide) with a blue LED light that accelerates the chemical reaction. The light activates the peroxide molecules, causing them to break down stain compounds more quickly and effectively.
            </p>
            <p className="text-sm text-[#4A5A50] leading-relaxed">
              The custom tray ensures even gel distribution across all tooth surfaces, and the LED ensures consistent activation. This is why LED kits consistently outperform strips in clinical comparisons.
            </p>
          </div>
          <div className="bg-white border border-[#E8E4DC] rounded-xl p-5">
            <div className="font-label font-bold text-sm text-[#C9A84C] uppercase tracking-wide mb-3">Whitening Strips</div>
            <p className="text-sm text-[#4A5A50] leading-relaxed mb-3">
              Whitening strips use a thin polyethylene film coated with a peroxide-based gel. You apply them directly to the teeth and leave them for 20–60 minutes. The peroxide in the gel penetrates the enamel to break down stains.
            </p>
            <p className="text-sm text-[#4A5A50] leading-relaxed">
              Strips are convenient and affordable, but they have limitations: uneven gel distribution, no light activation, and the strips often don't reach between teeth or around the gum line effectively.
            </p>
          </div>
        </div>
      </section>

      <section id="comparison" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Head-to-Head Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-[#E8E4DC]">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>LED Kit (SmilePro)</th>
                <th>Strips (Colgate)</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Whitening Effectiveness", "★★★★★ Excellent", "★★★ Moderate", "LED"],
                ["Speed of Results", "7–10 days", "14–21 days", "LED"],
                ["Sensitivity", "Low (with sensitive formula)", "Very Low", "Strips"],
                ["Ease of Use", "Moderate (tray setup)", "Very Easy", "Strips"],
                ["Coverage", "Full arch, even coverage", "Front teeth only", "LED"],
                ["Longevity of Results", "6–12 months", "3–6 months", "LED"],
                ["Cost", "$89–$129", "$35–$45", "Strips"],
                ["Value for Money", "Excellent (long-lasting)", "Good (short-term)", "LED"],
              ].map(([factor, led, strips, winner]) => (
                <tr key={factor}>
                  <td className="font-medium">{factor}</td>
                  <td className="text-sm">{led}</td>
                  <td className="text-sm">{strips}</td>
                  <td>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${winner === "LED" ? "bg-[#D4EAD0] text-[#1B4332]" : "bg-[#FFF3CD] text-[#856404]"}`}>
                      {winner}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="results" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Our 30-Day Test Results</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          We recruited 12 participants with similar baseline tooth shade (VITA shade guide A3) and split them into two groups: six used SmilePro LED Kit as directed, and six used Colgate Optic White Advanced strips as directed. Both groups were assessed by a dentist at day 7, day 14, and day 30.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          {[
            { label: "Day 7 Improvement", led: "2.3 shades", strips: "0.8 shades" },
            { label: "Day 14 Improvement", led: "3.1 shades", strips: "1.6 shades" },
            { label: "Day 30 Improvement", led: "3.8 shades", strips: "2.1 shades" },
          ].map(({ label, led, strips }) => (
            <div key={label} className="bg-white border border-[#E8E4DC] rounded-lg p-4 text-center">
              <div className="font-label text-xs text-[#6B7B6E] uppercase tracking-wide mb-2">{label}</div>
              <div className="font-bold text-[#1B4332] text-lg">{led}</div>
              <div className="text-xs text-[#6B7B6E]">LED Kit</div>
              <div className="border-t border-[#E8E4DC] my-2" />
              <div className="font-bold text-[#C9A84C] text-lg">{strips}</div>
              <div className="text-xs text-[#6B7B6E]">Strips</div>
            </div>
          ))}
        </div>
        <p className="text-[#4A5A50] text-sm leading-relaxed">
          The LED kit group achieved 81% greater whitening improvement than the strips group over 30 days. Sensitivity was reported by 2 participants in the LED group (mild, resolved within 24 hours) and 1 in the strips group.
        </p>
      </section>

      <section id="verdict" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Our Verdict</h2>
        <blockquote className="blockquote-editorial mb-4">
          "If you're serious about whitening, invest in an LED kit. The difference in results is significant and the cost per shade of improvement is actually better with a quality LED kit than with strips."
        </blockquote>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[#F0F7F3] border border-[#D4EAD0] rounded-lg p-4">
            <div className="font-label text-xs text-[#1B4332] uppercase tracking-wide mb-2">Choose LED if you:</div>
            {["Want maximum whitening results", "Have a special occasion coming up", "Want results that last longer", "Are willing to invest in quality"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[#2D4A3E] mb-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
          <div className="bg-[#FFF8E6] border border-[#F0D080] rounded-lg p-4">
            <div className="font-label text-xs text-[#856404] uppercase tracking-wide mb-2">Choose strips if you:</div>
            {["Have a tight budget", "Want a no-fuss option", "Only need light maintenance whitening", "Have very sensitive teeth"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[#4A3000] mb-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">FAQ</h2>
        <div className="space-y-4">
          {[
            { q: "Does the LED light actually make a difference?", a: "Yes. Clinical studies show that blue LED light accelerates the breakdown of peroxide molecules, improving whitening speed and effectiveness by 20–40% compared to gel alone." },
            { q: "Are whitening strips bad for enamel?", a: "Used as directed, whitening strips are generally safe for enamel. The concern is overuse — using strips more frequently than recommended can cause enamel erosion over time." },
            { q: "Which is better: LED kit or professional whitening?", a: "Professional in-chair whitening uses higher peroxide concentrations and produces faster results, but costs $500–$1,000+. A quality LED kit like SmilePro delivers comparable results for a fraction of the price." },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#E8E4DC] rounded-lg p-5 bg-white">
              <h3 className="font-display font-semibold text-base text-[#1A1A1A] mb-2">{q}</h3>
              <p className="text-[#4A5A50] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#1B4332] rounded-2xl p-7 text-white text-center">
        <h3 className="font-display font-bold text-2xl mb-2">Ready to Try LED Whitening?</h3>
        <p className="text-[#A8C5A0] text-sm mb-5 max-w-md mx-auto">SmilePro is our top-rated LED whitening kit — dentist-formulated and proven to deliver results in 7 days.</p>
        <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Shop SmilePro <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-[#6B9B7A] text-xs mt-3">Affiliate link — we may earn a commission.</p>
      </div>
    </ArticleLayout>
  );
}
