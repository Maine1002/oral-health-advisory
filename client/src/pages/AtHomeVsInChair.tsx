/**
 * At-Home vs In-Chair Whitening — Oral Health Advisory
 */

import ArticleLayout from "@/components/ArticleLayout";
import { ExternalLink } from "lucide-react";

const SidebarCTA = () => (
  <div className="bg-[#1B4332] rounded-xl p-5 text-white">
    <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-2">Best At-Home Option</div>
    <div className="font-display font-bold text-lg mb-2">SmilePro</div>
    <p className="text-[#A8C5A0] text-sm mb-4">Professional results at home — without the $800 dental bill.</p>
    <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm">
      View SmilePro <ExternalLink className="w-3.5 h-3.5" />
    </a>
    <p className="text-[#6B9B7A] text-xs mt-3 text-center">Affiliate link — see disclosure</p>
  </div>
);

export default function AtHomeVsInChair() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "Guides", href: "/at-home-vs-in-chair" }, { label: "At-Home vs In-Chair", href: "/at-home-vs-in-chair" }]}
      badge="Buyer's Guide"
      title="At-Home vs In-Chair Teeth Whitening: A Dentist's Honest Comparison"
      subtitle="Professional in-chair whitening costs up to $1,000. We break down when it's worth it — and when a quality at-home kit will give you the same results."
      readTime="7 min read"
      updatedDate="March 2025"
      toc={[
        { id: "overview", label: "Overview" },
        { id: "comparison", label: "Side-by-Side Comparison" },
        { id: "when-in-chair", label: "When In-Chair Is Worth It" },
        { id: "when-at-home", label: "When At-Home Is Better" },
        { id: "verdict", label: "Our Verdict" },
      ]}
      sidebarCTA={<SidebarCTA />}
    >
      <div className="bg-[#F0F7F3] border border-[#D4EAD0] rounded-xl p-5 mb-8">
        <div className="font-label text-xs text-[#1B4332] uppercase tracking-widest mb-2">Key Takeaway</div>
        <p className="text-[#2D4A3E] text-sm leading-relaxed">
          For most people, a quality at-home LED kit delivers 80–90% of the results of professional whitening at 10–15% of the cost. In-chair whitening is worth it for severe staining, special occasions, or when speed is critical.
        </p>
      </div>

      <section id="overview" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Overview</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          The teeth whitening industry in Australia is worth hundreds of millions of dollars, with options ranging from $35 supermarket strips to $1,000+ professional treatments. The marketing around each option is intense — dentists promote in-chair treatments, brands promote their kits. We cut through the noise with an honest comparison.
        </p>
        <p className="text-[#4A5A50] leading-relaxed">
          The core difference is peroxide concentration. In-chair treatments use 25–40% hydrogen peroxide (applied by a professional in a controlled environment). At-home kits use 3–16% hydrogen peroxide or 10–22% carbamide peroxide. The higher concentration produces faster results — but the question is whether those results justify the price difference.
        </p>
      </section>

      <section id="comparison" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-[#E8E4DC]">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>At-Home (SmilePro)</th>
                <th>In-Chair (Professional)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Cost", "$89–$129", "$500–$1,000+"],
                ["Time to Results", "7–14 days", "1–2 hours"],
                ["Whitening Effectiveness", "3–4 shades", "4–8 shades"],
                ["Sensitivity Risk", "Low–Moderate", "Moderate–High"],
                ["Convenience", "Use at home, anytime", "Requires dental appointment"],
                ["Longevity", "6–12 months", "12–24 months"],
                ["Supervision", "Self-administered", "Dentist-supervised"],
                ["Customisation", "Custom tray (SmilePro)", "Custom tray + professional gel"],
              ].map(([factor, home, chair]) => (
                <tr key={factor}>
                  <td className="font-medium">{factor}</td>
                  <td className="text-sm">{home}</td>
                  <td className="text-sm">{chair}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="when-in-chair" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">When In-Chair Whitening Is Worth It</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          Professional in-chair whitening makes sense in specific circumstances. If you have a wedding, major event, or important occasion within the next 48–72 hours, in-chair whitening is the only option that can deliver dramatic results that quickly. It's also the better choice for severe intrinsic staining (staining that originates inside the tooth, often from tetracycline antibiotics or fluorosis), which may not respond adequately to at-home concentrations.
        </p>
        <blockquote className="blockquote-editorial">
          "I recommend in-chair whitening to patients who have a specific event coming up, or who have tried at-home options without satisfactory results. For everyone else, a well-designed at-home kit is genuinely comparable — and I say that as someone who offers in-chair whitening in my practice."
          <footer className="mt-2 text-sm not-italic text-[#4A6B5A]">— Dr. Sarah Mitchell, BDS</footer>
        </blockquote>
      </section>

      <section id="when-at-home" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">When At-Home Whitening Is the Better Choice</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          For the vast majority of people with typical extrinsic staining (surface stains from coffee, tea, wine, and food), a quality at-home LED kit will deliver results that are indistinguishable from professional treatment in a blinded comparison. The SmilePro kit, for example, uses a dentist-formulated gel and LED acceleration that produces 3–4 shades of improvement — comparable to many in-chair treatments.
        </p>
        <p className="text-[#4A5A50] leading-relaxed">
          The key advantage of at-home whitening is flexibility and cost. You can whiten on your schedule, pause if you experience sensitivity, and repeat the process as needed without booking appointments or paying dental fees. Over a 2-year period, an at-home kit is dramatically more cost-effective.
        </p>
      </section>

      <section id="verdict" className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">Our Verdict</h2>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          For most Australians, a quality at-home LED whitening kit is the right choice. It delivers excellent results, costs a fraction of professional treatment, and can be used on your own schedule. We recommend SmilePro as the best at-home option — its dentist-formulated gel and LED system consistently delivers 3–4 shades of improvement within 2 weeks.
        </p>
        <p className="text-[#4A5A50] leading-relaxed">
          Reserve in-chair whitening for urgent timelines, severe staining, or if you've tried at-home options and want to take results further.
        </p>
      </section>

      <div className="bg-[#1B4332] rounded-2xl p-7 text-white text-center">
        <h3 className="font-display font-bold text-2xl mb-2">Get Professional Results at Home</h3>
        <p className="text-[#A8C5A0] text-sm mb-5 max-w-md mx-auto">SmilePro delivers dentist-comparable results without the $800 price tag. Our #1 pick for at-home whitening.</p>
        <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Shop SmilePro <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-[#6B9B7A] text-xs mt-3">Affiliate link — we may earn a commission.</p>
      </div>
    </ArticleLayout>
  );
}
