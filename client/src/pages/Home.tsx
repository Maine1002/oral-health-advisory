/**
 * Home Page — Oral Health Advisory
 * Design: Confident Authority — asymmetric hero, editorial sections, trust signals
 * Sections: Hero, Trust Bar, Featured Reviews, Quiz CTA, Expert Quote, Latest Guides, Newsletter
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  BookOpen,
  FlaskConical,
  Users,
  ChevronRight,
} from "lucide-react";

const HERO_IMG = "/images/hero-smile.webp";
const KIT_IMG = "/images/smilepro-kit.webp";
const DENTIST_IMG = "/images/dentist-consultation.webp";
const QUIZ_IMG = "/images/quiz-hero.webp";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= Math.round(score) ? "text-[#C9A84C] fill-[#C9A84C]" : "text-[#D4D4D4]"
          }`}
        />
      ))}
      <span className="ml-1 text-xs font-semibold text-[#4A6B5A]">{score.toFixed(1)}</span>
    </div>
  );
}

const featuredReviews = [
  {
    rank: 1,
    badge: "Editor's Choice",
    name: "SmilePro LED Whitening Kit",
    tagline: "Best overall at-home whitening kit in Australia",
    score: 9.4,
    price: "From $89",
    highlights: ["Dentist-formulated gel", "16-LED accelerator tray", "Results in 7 days"],
    href: "/best-whitening-kits",
    img: KIT_IMG,
    bestFor: "Best Overall",
  },
  {
    rank: 2,
    badge: "Best Value",
    name: "Colgate Optic White Advanced",
    tagline: "Reliable strips for everyday whitening maintenance",
    score: 7.8,
    price: "From $35",
    highlights: ["Easy to use", "No sensitivity", "Widely available"],
    href: "/best-whitening-kits",
    img: null,
    bestFor: "Budget Pick",
  },
  {
    rank: 3,
    badge: "Sensitive Teeth",
    name: "Opalescence Go 6%",
    tagline: "Gentle formula designed for sensitive enamel",
    score: 7.5,
    price: "From $65",
    highlights: ["Low peroxide formula", "Dentist-grade", "Minimal sensitivity"],
    href: "/sensitive-teeth-whitening",
    img: null,
    bestFor: "Sensitive Teeth",
  },
];

const guides = [
  {
    title: "LED Whitening vs Strips: Which Actually Works Better?",
    excerpt:
      "We tested both methods over 30 days. The results surprised us — and changed our top recommendation.",
    href: "/led-vs-strips",
    category: "Comparison",
    readTime: "8 min read",
  },
  {
    title: "Is Teeth Whitening Safe? What the Research Says",
    excerpt:
      "A comprehensive look at the evidence on peroxide-based whitening, enamel safety, and who should avoid it.",
    href: "/is-whitening-safe",
    category: "Safety",
    readTime: "10 min read",
  },
  {
    title: "At-Home vs In-Chair: A Dentist's Honest Comparison",
    excerpt:
      "Professional in-chair whitening costs 10x more. We break down when it's worth it — and when it's not.",
    href: "/at-home-vs-in-chair",
    category: "Guide",
    readTime: "7 min read",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const trustRef = useFadeUp();
  const reviewsRef = useFadeUp();
  const quizRef = useFadeUp();
  const expertRef = useFadeUp();
  const guidesRef = useFadeUp();

  useEffect(() => {
    // Animate hero on mount
    const el = heroRef.current;
    if (el) {
      setTimeout(() => el.classList.add("visible"), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* ── HERO ── */}
      <section className="pt-16 lg:pt-18 bg-[#FAFAF7] overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-4rem)] lg:min-h-[600px] py-12 lg:py-16">
            {/* Left: Text */}
            <div ref={heroRef} className="fade-up order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="badge-editors-choice">
                  <Award className="w-3 h-3" />
                  Independent Reviews
                </span>
                <span className="font-label text-xs text-[#6B7B6E] uppercase tracking-wider">
                  Updated March 2025
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] leading-tight mb-5">
                Australia's Most{" "}
                <em className="text-[#1B4332] not-italic">Trusted</em>{" "}
                Teeth Whitening Guide
              </h1>
              <p className="text-[#4A5A50] text-lg leading-relaxed mb-8 max-w-lg">
                Independent reviews, expert comparisons, and evidence-based guidance — so you can find the right whitening kit without the marketing noise.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/best-whitening-kits" className="btn-primary">
                  See Top Picks <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/quiz" className="btn-outline">
                  Find My Kit
                </Link>
              </div>
              {/* Mini trust signals */}
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: FlaskConical, text: "30+ products tested" },
                  { icon: Users, text: "Expert-reviewed" },
                  { icon: BookOpen, text: "Evidence-based" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-sm text-[#4A6B5A]">
                    <Icon className="w-4 h-4 text-[#1B4332]" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMG}
                  alt="Woman with bright, confident smile"
                  className="w-full h-[380px] lg:h-[520px] object-cover object-top"
                />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 shadow-lg border border-[#E8E4DC]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-[#C9A84C]" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-sm text-[#1A1A1A] leading-tight">
                        SmilePro
                      </div>
                      <div className="font-label text-[10px] text-[#C9A84C] uppercase tracking-wide">
                        #1 Editor's Choice 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#D4EAD0] opacity-60 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#F0EDE5] opacity-80 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div ref={trustRef} className="fade-up bg-[#1B4332] py-5">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-[#2D6A4F]">
            {[
              { value: "30+", label: "Products Tested" },
              { value: "5 yrs", label: "Editorial Experience" },
              { value: "100%", label: "Independent Reviews" },
              { value: "Dentist", label: "Expert Reviewed" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center px-4 py-1">
                <div className="font-display font-bold text-2xl text-[#C9A84C]">{value}</div>
                <div className="font-label text-xs text-[#A8C5A0] uppercase tracking-wider mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED REVIEWS ── */}
      <section className="py-16 lg:py-20 bg-[#FAFAF7]">
        <div ref={reviewsRef} className="fade-up container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-2">
                Our Top Picks
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Best Teeth Whitening Kits
              </h2>
              <p className="text-[#4A5A50] mt-2 max-w-xl">
                Independently tested and ranked. Updated regularly based on new products and ongoing testing.
              </p>
            </div>
            <Link
              href="/best-whitening-kits"
              className="flex items-center gap-1.5 text-[#1B4332] font-semibold text-sm hover:text-[#2D6A4F] transition-colors no-underline flex-shrink-0"
            >
              See full rankings <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-5">
            {featuredReviews.map((product, i) => (
              <div
                key={product.name}
                className={`card-product ${i === 0 ? "border-[#C9A84C] border-2" : ""}`}
              >
                <div className="p-5 lg:p-6">
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Rank */}
                    <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg ${
                          i === 0
                            ? "bg-[#C9A84C] text-[#1A1A1A]"
                            : "bg-[#F0EDE5] text-[#4A5A50]"
                        }`}
                      >
                        {product.rank}
                      </div>
                      {i === 0 && product.img && (
                        <img
                          src={product.img}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-lg border border-[#E8E4DC]"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={`${
                            i === 0 ? "badge-editors-choice" : "badge-best-pick"
                          }`}
                        >
                          {product.badge}
                        </span>
                        <span className="font-label text-xs text-[#6B7B6E] uppercase tracking-wide">
                          {product.bestFor}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-xl text-[#1A1A1A] mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[#4A5A50] text-sm mb-3">{product.tagline}</p>
                      <div className="flex flex-wrap gap-3 items-center mb-3">
                        <StarRating score={product.score} />
                        <span className="text-[#1B4332] font-semibold text-sm">
                          {product.price}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {product.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-1 text-xs text-[#4A6B5A]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#1B4332] flex-shrink-0" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0 flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
                      <div className="text-right hidden sm:block">
                        <div className="font-display font-bold text-2xl text-[#1B4332]">
                          {product.score}
                        </div>
                        <div className="font-label text-[10px] text-[#6B7B6E] uppercase tracking-wide">
                          OHA Score
                        </div>
                      </div>
                      <Link
                        href={product.href}
                        className={`${i === 0 ? "btn-primary" : "btn-outline"} text-sm py-2 px-4`}
                      >
                        {i === 0 ? "View Review" : "Read More"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/best-whitening-kits" className="btn-outline">
              View All 10 Kits Reviewed <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUIZ CTA ── */}
      <section className="py-16 lg:py-20 bg-[#1B4332] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${QUIZ_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#1B4332]/80" />
        <div ref={quizRef} className="fade-up container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-3">
              Personalised Recommendation
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Not Sure Which Kit Is Right for You?
            </h2>
            <p className="text-[#A8C5A0] text-lg mb-8 leading-relaxed">
              Answer 5 quick questions about your teeth, lifestyle, and goals. We'll match you with the perfect whitening solution — no guesswork required.
            </p>
            <Link href="/quiz" className="btn-gold text-base px-8 py-3.5">
              Take the Free Quiz <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-[#6B9B7A] text-sm mt-4">Takes less than 2 minutes</p>
          </div>
        </div>
      </section>

      {/* ── EXPERT QUOTE ── */}
      <section className="py-16 lg:py-20 bg-[#F0EDE5]">
        <div ref={expertRef} className="fade-up container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img
                src={DENTIST_IMG}
                alt="Dental professional reviewing patient records"
                className="w-full h-[340px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-4">
                Expert Perspective
              </div>
              <blockquote className="blockquote-editorial mb-6">
                "The biggest mistake people make is choosing a whitening product based on price alone. The delivery system — how the gel contacts the tooth — matters just as much as the peroxide concentration. A well-designed LED kit with a custom tray will outperform cheap strips every time."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-[#C9A84C] text-sm">DR</span>
                </div>
                <div>
                  <div className="font-display font-semibold text-[#1A1A1A] text-sm">
                    Dr. Sarah Mitchell, BDS
                  </div>
                  <div className="text-[#6B7B6E] text-xs">
                    General Dentist, Sydney — OHA Advisory Panel
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/dentist-recommendations" className="btn-primary text-sm">
                  What Dentists Recommend <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST GUIDES ── */}
      <section className="py-16 lg:py-20 bg-[#FAFAF7]">
        <div ref={guidesRef} className="fade-up container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-2">
                Buyer's Guides
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Make an Informed Decision
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card-product block no-underline group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge-best-pick">{guide.category}</span>
                    <span className="text-[#6B7B6E] text-xs">{guide.readTime}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#1A1A1A] mb-2 group-hover:text-[#1B4332] transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-[#4A5A50] text-sm leading-relaxed mb-4">{guide.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-[#1B4332] text-sm font-semibold">
                    Read guide <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY STRIP ── */}
      <section className="py-12 bg-[#F0EDE5] border-y border-[#E8E4DC]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-shrink-0">
              <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-1">
                Our Process
              </div>
              <h3 className="font-display font-semibold text-xl text-[#1A1A1A]">
                How We Review Products
              </h3>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", label: "Purchase & Test", desc: "We buy every product ourselves" },
                { step: "02", label: "30-Day Trial", desc: "Real-world use over 30 days" },
                { step: "03", label: "Expert Review", desc: "Dentist assessment of results" },
                { step: "04", label: "Score & Rank", desc: "Objective scoring across 8 criteria" },
              ].map(({ step, label, desc }) => (
                <div key={step} className="flex gap-3">
                  <div className="font-label font-bold text-[#C9A84C] text-sm flex-shrink-0 mt-0.5">
                    {step}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1A1A1A]">{label}</div>
                    <div className="text-xs text-[#6B7B6E] mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/methodology" className="btn-outline text-sm flex-shrink-0">
              Full Methodology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
