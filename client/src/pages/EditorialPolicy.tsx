/**
 * Editorial Policy — Oral Health Advisory
 */

import { Link } from "wouter";

export default function EditorialPolicy() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-16 lg:pt-18">
      <div className="bg-white border-b border-[#E8E4DC]">
        <div className="container py-12">
          <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-3">Transparency</div>
          <h1 className="font-display text-4xl font-bold text-[#1A1A1A] mb-4">Editorial Policy</h1>
          <p className="text-[#4A5A50] text-lg max-w-2xl">How we create, review, and maintain our content.</p>
        </div>
      </div>
      <div className="container py-12 lg:py-16">
        <div className="max-w-3xl prose-style">
          {[
            {
              title: "Independence",
              content: "Oral Health Advisory operates independently of any product manufacturer or retailer. Our editorial team makes all ranking and recommendation decisions without input from commercial partners. Affiliate relationships (see our Disclosure page) do not influence our editorial assessments.",
            },
            {
              title: "How We Select Products to Review",
              content: "We identify products based on market availability, consumer interest, and our own research into the teeth whitening category. We prioritise products that are widely available to Australian consumers. We do not accept products for review in exchange for positive coverage.",
            },
            {
              title: "Our Review Process",
              content: "All products are independently purchased by our team. We test products over a minimum 30-day period and assess them across eight criteria: whitening effectiveness, sensitivity, ease of use, value for money, ingredient quality, tray fit, gel volume, and customer support. Results are reviewed by our advisory dentist before publication.",
            },
            {
              title: "Expert Review",
              content: "Our advisory dentist, Dr. Sarah Mitchell (BDS), reviews all product assessments and guides for clinical accuracy. Expert quotes are verified and attributed with the reviewer's consent. We do not fabricate or embellish expert opinions.",
            },
            {
              title: "Content Updates",
              content: "We review and update our content regularly to reflect new products, updated research, and changes in the market. All pages display a 'Last Updated' date. We correct errors promptly when they are identified.",
            },
            {
              title: "Corrections Policy",
              content: "If you identify an error in our content, please contact us at editorial@oralhealthadvisory.org. We will investigate and correct errors within 48 hours of verification.",
            },
          ].map(({ title, content }) => (
            <section key={title} className="mb-8">
              <h2 className="font-display text-xl font-bold text-[#1A1A1A] mb-3">{title}</h2>
              <p className="text-[#4A5A50] leading-relaxed">{content}</p>
            </section>
          ))}
          <div className="flex gap-3 mt-8">
            <Link href="/methodology" className="btn-outline text-sm">Review Methodology</Link>
            <Link href="/disclosure" className="btn-outline text-sm">Disclosure Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
