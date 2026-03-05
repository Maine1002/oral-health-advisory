/**
 * Review Methodology — Oral Health Advisory
 */

import { Link } from "wouter";

export default function Methodology() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-16 lg:pt-18">
      <div className="bg-white border-b border-[#E8E4DC]">
        <div className="container py-12">
          <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-3">How We Test</div>
          <h1 className="font-display text-4xl font-bold text-[#1A1A1A] mb-4">Review Methodology</h1>
          <p className="text-[#4A5A50] text-lg max-w-2xl">A transparent explanation of how we test, score, and rank teeth whitening products.</p>
        </div>
      </div>
      <div className="container py-12 lg:py-16">
        <div className="max-w-3xl">
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Our Testing Process</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Independent Purchase", desc: "We purchase every product ourselves at retail price. We do not accept free products in exchange for reviews." },
                { step: "02", title: "Baseline Assessment", desc: "Before testing, we photograph each participant's teeth and record their baseline shade using the VITA Classical Shade Guide — the same system used by dentists." },
                { step: "03", title: "30-Day Trial", desc: "Each product is used exactly as directed by the manufacturer for a minimum of 30 days. We track sensitivity, ease of use, and visible results at day 7, 14, and 30." },
                { step: "04", title: "Dentist Assessment", desc: "At the conclusion of testing, our advisory dentist assesses the results, reviews the ingredient formulation, and provides a clinical perspective on safety and effectiveness." },
                { step: "05", title: "Scoring & Ranking", desc: "Products are scored across eight criteria (see below) and ranked. Rankings are reviewed and approved by our editorial team before publication." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 bg-white border border-[#E8E4DC] rounded-lg p-5">
                  <div className="font-label font-bold text-[#C9A84C] text-lg flex-shrink-0 w-8">{step}</div>
                  <div>
                    <div className="font-semibold text-[#1A1A1A] mb-1">{title}</div>
                    <p className="text-sm text-[#4A5A50] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Scoring Criteria</h2>
            <p className="text-[#4A5A50] leading-relaxed mb-5">Each product is scored out of 10 across eight criteria. The final OHA Score is a weighted average.</p>
            <div className="overflow-x-auto rounded-xl border border-[#E8E4DC]">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Criterion</th>
                    <th>Weight</th>
                    <th>How We Assess</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Whitening Effectiveness", "30%", "Shade improvement measured at day 7, 14, and 30"],
                    ["Sensitivity", "20%", "Participant-reported sensitivity on a 1–10 scale"],
                    ["Ease of Use", "15%", "Tray fit, application process, session duration"],
                    ["Value for Money", "15%", "Cost per shade of improvement, kit longevity"],
                    ["Ingredient Quality", "10%", "Peroxide concentration, desensitising agents, formula safety"],
                    ["Tray Fit & Coverage", "5%", "How well the tray covers all tooth surfaces"],
                    ["Gel Volume", "3%", "Number of treatments included in the kit"],
                    ["Customer Support", "2%", "Response time and quality of manufacturer support"],
                  ].map(([criterion, weight, how]) => (
                    <tr key={criterion}>
                      <td className="font-medium">{criterion}</td>
                      <td><span className="font-bold text-[#1B4332]">{weight}</span></td>
                      <td className="text-sm text-[#4A5A50]">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="flex gap-3">
            <Link href="/editorial-policy" className="btn-outline text-sm">Editorial Policy</Link>
            <Link href="/disclosure" className="btn-outline text-sm">Disclosure</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
