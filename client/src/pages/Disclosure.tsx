/**
 * Disclosure & Affiliate Policy — Oral Health Advisory
 */

import { Link } from "wouter";

export default function Disclosure() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-16 lg:pt-18">
      <div className="bg-white border-b border-[#E8E4DC]">
        <div className="container py-12">
          <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-3">Transparency</div>
          <h1 className="font-display text-4xl font-bold text-[#1A1A1A] mb-4">Disclosure & Affiliate Policy</h1>
          <p className="text-[#4A5A50] text-lg max-w-2xl">How we fund our operations and how that affects (and doesn't affect) our editorial decisions.</p>
        </div>
      </div>
      <div className="container py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="bg-[#FFF8E6] border border-[#F0D080] rounded-xl p-5 mb-8">
            <p className="text-sm text-[#6B5000] leading-relaxed">
              <strong>Summary:</strong> Oral Health Advisory earns commissions when you purchase products through links on our site. This does not influence our rankings or editorial assessments. We only recommend products we genuinely believe offer value.
            </p>
          </div>

          {[
            {
              title: "Affiliate Relationships",
              content: "Some links on Oral Health Advisory are affiliate links. This means that if you click on a link and make a purchase, we may earn a small commission at no additional cost to you. These commissions help fund our independent testing and editorial operations.",
            },
            {
              title: "How Affiliate Relationships Affect Our Content",
              content: "They don't. Our editorial team makes all ranking and recommendation decisions independently. Products are ranked based on our testing results and scoring criteria — not on the commission rate they offer. We have turned down affiliate relationships with products that didn't meet our quality standards.",
            },
            {
              title: "SmilePro",
              content: "Oral Health Advisory has an affiliate relationship with SmilePro. SmilePro is ranked #1 in our Best Teeth Whitening Kits guide because it genuinely performed best in our independent testing — not because of our commercial relationship. We would rank it #1 regardless of any affiliate arrangement.",
            },
            {
              title: "Identifying Affiliate Links",
              content: "Affiliate links on this site are typically labelled with 'Affiliate link' or 'We may earn a commission' near the link or button. All external links to product retailers should be assumed to be affiliate links unless otherwise stated.",
            },
            {
              title: "Advertising",
              content: "Oral Health Advisory does not currently display third-party advertising. If we introduce advertising in the future, we will clearly label all paid placements and ensure they do not influence our editorial content.",
            },
            {
              title: "Contact",
              content: "If you have questions about our disclosure policy or commercial relationships, please contact us at editorial@oralhealthadvisory.org.",
            },
          ].map(({ title, content }) => (
            <section key={title} className="mb-8">
              <h2 className="font-display text-xl font-bold text-[#1A1A1A] mb-3">{title}</h2>
              <p className="text-[#4A5A50] leading-relaxed">{content}</p>
            </section>
          ))}

          <div className="flex gap-3 mt-8">
            <Link href="/editorial-policy" className="btn-outline text-sm">Editorial Policy</Link>
            <Link href="/methodology" className="btn-outline text-sm">Review Methodology</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
