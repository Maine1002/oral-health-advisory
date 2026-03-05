/**
 * Best Teeth Whitening Kits in Australia — Oral Health Advisory
 * Ad-optimised landing page with full comparison table, product reviews, FAQ
 */

import { Link } from "wouter";
import ArticleLayout from "@/components/ArticleLayout";
import { Star, CheckCircle, XCircle, Award, ArrowRight, ExternalLink } from "lucide-react";

const KIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663401746603/M54CeUzbQAJE5tbCfQm74p/teeth-whitening-kit-64B7efmnmxXLWvWLD5V9gy.webp";

const products = [
  {
    rank: 1,
    badge: "Editor's Choice",
    name: "SmilePro LED Whitening Kit",
    score: 9.4,
    price: "$89–$129",
    whitening: "5/5",
    sensitivity: "Low",
    ease: "5/5",
    value: "5/5",
    pros: ["Dentist-formulated 16% carbamide peroxide gel", "16-LED blue light accelerator", "Custom-fit tray mould", "Results visible in 7 days", "Gentle on sensitive teeth"],
    cons: ["Higher upfront cost vs strips", "Requires 20 min per session"],
    verdict: "SmilePro is the standout choice for anyone serious about at-home whitening. The combination of a professional-grade gel formula, LED acceleration, and a custom tray system delivers results that rival in-chair treatments at a fraction of the cost. It's our top pick for a reason.",
    href: "https://smilepro.com.au",
    bestFor: "Best Overall",
    highlight: true,
  },
  {
    rank: 2,
    badge: "Best Value",
    name: "Colgate Optic White Advanced",
    score: 7.8,
    price: "$35–$45",
    whitening: "3/5",
    sensitivity: "Very Low",
    ease: "4/5",
    value: "4/5",
    pros: ["Affordable and widely available", "Very low sensitivity", "Easy strip application"],
    cons: ["Slower results (2–3 weeks)", "No LED acceleration", "Less dramatic whitening"],
    verdict: "A solid budget option for maintenance whitening or those new to whitening. Don't expect dramatic results, but for everyday brightening it's reliable.",
    href: "/best-whitening-kits",
    bestFor: "Budget Pick",
    highlight: false,
  },
  {
    rank: 3,
    badge: "Sensitive Teeth",
    name: "Opalescence Go 6%",
    score: 7.5,
    price: "$65–$85",
    whitening: "3/5",
    sensitivity: "Very Low",
    ease: "4/5",
    value: "3/5",
    pros: ["Dentist-grade formula", "Very gentle on enamel", "Pre-filled trays — no mess"],
    cons: ["Lower peroxide = slower results", "More expensive than strips", "Trays not custom-fit"],
    verdict: "The best choice for people with genuinely sensitive teeth who still want professional-grade ingredients. The low peroxide concentration means results take longer, but comfort is excellent.",
    href: "/sensitive-teeth-whitening",
    bestFor: "Sensitive Teeth",
    highlight: false,
  },
  {
    rank: 4,
    badge: "Runner Up",
    name: "HiSmile PAP+ Whitening Kit",
    score: 7.2,
    price: "$79–$99",
    whitening: "3/5",
    sensitivity: "Very Low",
    ease: "4/5",
    value: "3/5",
    pros: ["Peroxide-free formula", "No sensitivity", "Good for maintenance"],
    cons: ["Less effective than peroxide kits", "Premium price for moderate results", "PAP efficacy still debated"],
    verdict: "A good peroxide-free option for those who want to avoid hydrogen peroxide entirely. Results are real but more subtle than peroxide-based alternatives.",
    href: "/best-whitening-kits",
    bestFor: "Peroxide-Free",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What is the best teeth whitening kit in Australia in 2025?",
    a: "Based on our independent testing, SmilePro LED Whitening Kit is the best overall at-home whitening kit in Australia. It combines a dentist-formulated carbamide peroxide gel with an LED accelerator tray for results that rival professional treatments.",
  },
  {
    q: "How long does at-home teeth whitening take to work?",
    a: "Most quality at-home whitening kits show noticeable results within 7–14 days of consistent use. LED-accelerated kits like SmilePro tend to work faster than strips or gel trays alone.",
  },
  {
    q: "Is at-home teeth whitening safe?",
    a: "Yes, when used as directed. Products with up to 6% hydrogen peroxide or 16% carbamide peroxide are considered safe for at-home use. Always follow the instructions and avoid overuse. See our full safety guide.",
  },
  {
    q: "What's the difference between carbamide peroxide and hydrogen peroxide?",
    a: "Both are effective whitening agents. Carbamide peroxide breaks down into hydrogen peroxide when applied. A 16% carbamide peroxide gel is roughly equivalent to a 5.3% hydrogen peroxide gel in terms of active whitening power.",
  },
];

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.round(score / 2) ? "text-[#C9A84C] fill-[#C9A84C]" : "text-[#D4D4D4]"}`} />
      ))}
      <span className="ml-1 text-sm font-bold text-[#1B4332]">{score}</span>
      <span className="text-xs text-[#6B7B6E]">/10</span>
    </div>
  );
}

const SidebarCTA = () => (
  <div className="bg-[#1B4332] rounded-xl p-5 text-white">
    <div className="badge-editors-choice mb-3">
      <Award className="w-3 h-3" />
      #1 Pick
    </div>
    <div className="font-display font-bold text-lg mb-1">SmilePro</div>
    <div className="text-[#A8C5A0] text-sm mb-4">LED Whitening Kit — Editor's Choice 2025</div>
    <div className="text-2xl font-bold text-[#C9A84C] mb-4">9.4 / 10</div>
    <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm">
      View SmilePro <ExternalLink className="w-3.5 h-3.5" />
    </a>
    <p className="text-[#6B9B7A] text-xs mt-3 text-center">Affiliate link — see disclosure</p>
  </div>
);

export default function BestWhiteningKits() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "Reviews", href: "/best-whitening-kits" }]}
      badge="2025 Rankings"
      title="Best Teeth Whitening Kits in Australia (2025)"
      subtitle="We independently tested 10+ at-home whitening kits over 30 days. Here's what actually works — and what's not worth your money."
      readTime="12 min read"
      updatedDate="March 2025"
      toc={[
        { id: "top-picks", label: "Our Top Picks at a Glance" },
        { id: "comparison", label: "Full Comparison Table" },
        { id: "reviews", label: "Detailed Reviews" },
        { id: "how-we-test", label: "How We Test" },
        { id: "faq", label: "Frequently Asked Questions" },
      ]}
      sidebarCTA={<SidebarCTA />}
    >
      {/* Quick summary */}
      <div className="bg-[#F0F7F3] border border-[#D4EAD0] rounded-xl p-5 mb-8">
        <div className="font-label text-xs text-[#1B4332] uppercase tracking-widest mb-2">Key Takeaway</div>
        <p className="text-[#2D4A3E] text-sm leading-relaxed">
          <strong>SmilePro LED Whitening Kit</strong> is our top pick for 2025. It delivers the best combination of whitening results, sensitivity management, and value. For sensitive teeth, consider <strong>Opalescence Go 6%</strong>. On a budget? <strong>Colgate Optic White Advanced</strong> strips are reliable.
        </p>
      </div>

      {/* Top picks */}
      <section id="top-picks" className="mb-10">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Our Top Picks at a Glance</h2>
        <div className="section-divider"><span className="section-divider-diamond">◆</span></div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Best Overall", name: "SmilePro LED Kit", score: "9.4/10", href: "#smilepro" },
            { label: "Budget Pick", name: "Colgate Optic White", score: "7.8/10", href: "#colgate" },
            { label: "Sensitive Teeth", name: "Opalescence Go 6%", score: "7.5/10", href: "#opalescence" },
            { label: "Peroxide-Free", name: "HiSmile PAP+", score: "7.2/10", href: "#hismile" },
          ].map(({ label, name, score, href }) => (
            <a key={label} href={href} className="flex items-center gap-3 bg-white border border-[#E8E4DC] rounded-lg p-3.5 no-underline hover:border-[#A8C5A0] transition-colors group">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-label text-[10px] text-[#C9A84C] uppercase tracking-wide">{label}</div>
                <div className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors">{name}</div>
              </div>
              <div className="font-bold text-sm text-[#1B4332]">{score}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="mb-10">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Full Comparison Table</h2>
        <div className="section-divider"><span className="section-divider-diamond">◆</span></div>
        <div className="overflow-x-auto rounded-xl border border-[#E8E4DC]">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>OHA Score</th>
                <th>Price</th>
                <th>Whitening</th>
                <th>Sensitivity</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.name} className={p.highlight ? "highlight-row" : ""}>
                  <td>
                    <div className="flex items-center gap-2">
                      {p.highlight && <span className="badge-editors-choice text-[10px] py-0.5">★ #1</span>}
                      <span className="font-semibold text-[#1A1A1A]">{p.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="font-bold text-[#1B4332]">{p.score}</span>
                    <span className="text-[#6B7B6E] text-xs">/10</span>
                  </td>
                  <td className="text-sm">{p.price}</td>
                  <td className="text-sm">{p.whitening}</td>
                  <td>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      p.sensitivity === "Very Low" ? "bg-[#D4EAD0] text-[#1B4332]" : "bg-[#FFF3CD] text-[#856404]"
                    }`}>
                      {p.sensitivity}
                    </span>
                  </td>
                  <td className="text-sm text-[#4A5A50]">{p.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed reviews */}
      <section id="reviews" className="mb-10">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Detailed Reviews</h2>
        <div className="section-divider"><span className="section-divider-diamond">◆</span></div>
        <div className="space-y-8">
          {products.map((p, i) => (
            <div key={p.name} id={["smilepro", "colgate", "opalescence", "hismile"][i]} className={`rounded-xl border-2 overflow-hidden ${p.highlight ? "border-[#C9A84C]" : "border-[#E8E4DC]"}`}>
              {p.highlight && (
                <div className="bg-[#C9A84C] px-5 py-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1A1A1A]" />
                  <span className="font-label font-bold text-sm text-[#1A1A1A] uppercase tracking-wide">Editor's Choice — Best Overall 2025</span>
                </div>
              )}
              <div className="p-6 bg-white">
                <div className="flex flex-col sm:flex-row gap-5">
                  {p.highlight && (
                    <div className="flex-shrink-0">
                      <img src={KIT_IMG} alt={p.name} className="w-28 h-28 object-cover rounded-lg border border-[#E8E4DC]" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-label text-xs text-[#6B7B6E] uppercase tracking-wide">#{p.rank}</span>
                      <span className={p.highlight ? "badge-editors-choice" : "badge-best-pick"}>{p.badge}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-1">{p.name}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <StarRating score={p.score} />
                      <span className="text-[#1B4332] font-semibold text-sm">{p.price}</span>
                    </div>
                    <p className="text-[#4A5A50] text-sm leading-relaxed mb-4">{p.verdict}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="font-label text-xs text-[#1B4332] uppercase tracking-wide mb-2">Pros</div>
                        <ul className="space-y-1.5">
                          {p.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm text-[#2D4A3E]">
                              <CheckCircle className="w-4 h-4 text-[#1B4332] flex-shrink-0 mt-0.5" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-label text-xs text-[#B04040] uppercase tracking-wide mb-2">Cons</div>
                        <ul className="space-y-1.5">
                          {p.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm text-[#4A3030]">
                              <XCircle className="w-4 h-4 text-[#B04040] flex-shrink-0 mt-0.5" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {p.highlight ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                        View SmilePro <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link href={p.href} className="btn-outline text-sm">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we test */}
      <section id="how-we-test" className="mb-10">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">How We Test</h2>
        <div className="section-divider"><span className="section-divider-diamond">◆</span></div>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          Every product in this guide was independently purchased by our team and tested over a minimum 30-day period. We assess products across eight criteria: whitening effectiveness, sensitivity, ease of use, value for money, ingredient quality, tray fit, gel volume, and customer support.
        </p>
        <p className="text-[#4A5A50] leading-relaxed mb-4">
          Our scoring is reviewed by a qualified dentist on our advisory panel. We never accept payment for positive coverage, and our affiliate relationships do not influence our rankings. See our full <Link href="/methodology" className="text-[#1B4332] underline">review methodology</Link>.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Frequently Asked Questions</h2>
        <div className="section-divider"><span className="section-divider-diamond">◆</span></div>
        <div className="space-y-5">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#E8E4DC] rounded-lg p-5 bg-white">
              <h3 className="font-display font-semibold text-base text-[#1A1A1A] mb-2">{q}</h3>
              <p className="text-[#4A5A50] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-[#1B4332] rounded-2xl p-7 text-white text-center">
        <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-2">Our Top Recommendation</div>
        <h3 className="font-display font-bold text-2xl mb-2">Ready to Start Whitening?</h3>
        <p className="text-[#A8C5A0] text-sm mb-5 max-w-md mx-auto">
          SmilePro is our #1 pick for 2025. Dentist-formulated, LED-accelerated, and designed for real results at home.
        </p>
        <a href="https://smilepro.com.au" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Shop SmilePro <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-[#6B9B7A] text-xs mt-3">Affiliate link — we may earn a commission. See our disclosure.</p>
      </div>
    </ArticleLayout>
  );
}
