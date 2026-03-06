/**
 * Find Your Perfect Whitening Kit Quiz — Oral Health Advisory
 * 5-question interactive quiz that recommends SmilePro as the primary result
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle, Award, ExternalLink, RotateCcw } from "lucide-react";

const QUIZ_IMG = "/images/quiz-hero.webp";
const KIT_IMG = "/images/smilepro-kit.webp";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; icon?: string }[];
}

const questions: Question[] = [
  {
    id: "goal",
    question: "What's your main whitening goal?",
    options: [
      { label: "Maximum whitening — I want the brightest smile possible", value: "max", icon: "✨" },
      { label: "Gradual brightening — I want a natural improvement", value: "gradual", icon: "🌟" },
      { label: "Maintenance — I want to keep my smile bright", value: "maintain", icon: "🔄" },
      { label: "Special occasion — I have an event coming up", value: "occasion", icon: "🎉" },
    ],
  },
  {
    id: "sensitivity",
    question: "How sensitive are your teeth?",
    options: [
      { label: "Not sensitive at all — I can eat ice cream without issues", value: "none", icon: "🧊" },
      { label: "Mildly sensitive — occasional twinges with hot/cold", value: "mild", icon: "😐" },
      { label: "Moderately sensitive — I avoid very hot or cold foods", value: "moderate", icon: "😬" },
      { label: "Very sensitive — sensitivity is a real concern for me", value: "high", icon: "😣" },
    ],
  },
  {
    id: "budget",
    question: "What's your budget for whitening?",
    options: [
      { label: "Under $50 — I want an affordable option", value: "low", icon: "💰" },
      { label: "$50–$100 — I'm happy to invest for good results", value: "mid", icon: "💳" },
      { label: "$100–$150 — I want the best at-home option", value: "high", icon: "💎" },
      { label: "Budget isn't a concern — I want the best results", value: "any", icon: "🏆" },
    ],
  },
  {
    id: "lifestyle",
    question: "How would you describe your whitening lifestyle?",
    options: [
      { label: "Busy — I need something quick and easy", value: "busy", icon: "⚡" },
      { label: "Consistent — I'll follow a routine if it works", value: "consistent", icon: "📅" },
      { label: "Occasional — I'll whiten a few times a year", value: "occasional", icon: "🗓️" },
      { label: "First-timer — this is my first whitening experience", value: "first", icon: "🌱" },
    ],
  },
  {
    id: "concern",
    question: "What's your biggest concern about whitening?",
    options: [
      { label: "Effectiveness — I want real, visible results", value: "results", icon: "📊" },
      { label: "Safety — I want to protect my enamel", value: "safety", icon: "🛡️" },
      { label: "Sensitivity — I don't want pain or discomfort", value: "sensitivity", icon: "💊" },
      { label: "Convenience — I want something easy to use", value: "convenience", icon: "✅" },
    ],
  },
];

interface Result {
  name: string;
  tagline: string;
  score: string;
  price: string;
  description: string;
  href: string;
  external: boolean;
  highlights: string[];
  isTopPick: boolean;
}

function getResult(answers: Record<string, string>): Result {
  const { sensitivity, budget } = answers;

  // High sensitivity + low budget → Colgate strips
  if (sensitivity === "high" && budget === "low") {
    return {
      name: "Colgate Optic White Advanced",
      tagline: "Gentle strips for sensitive teeth on a budget",
      score: "7.8/10",
      price: "From $35",
      description: "Given your sensitivity concerns and budget, Colgate Optic White strips are a gentle, affordable starting point. The low peroxide concentration minimises sensitivity while still delivering gradual brightening.",
      href: "/best-whitening-kits",
      external: false,
      highlights: ["Very gentle formula", "Affordable", "Easy to use"],
      isTopPick: false,
    };
  }

  // High sensitivity → Opalescence
  if (sensitivity === "high" || sensitivity === "moderate") {
    return {
      name: "SmilePro LED Kit (Sensitive Mode)",
      tagline: "LED whitening designed for sensitive teeth",
      score: "9.1/10",
      price: "From $89",
      description: "Based on your sensitivity profile, we recommend SmilePro's sensitive formula. It uses a lower-concentration gel with potassium nitrate to calm the nerve, combined with LED acceleration so you need fewer sessions — reducing overall exposure. You'll still get excellent results without the discomfort.",
      href: "https://smilepro.com.au",
      external: true,
      highlights: ["Sensitive formula available", "Potassium nitrate for comfort", "LED acceleration = fewer sessions"],
      isTopPick: true,
    };
  }

  // Low budget → Colgate
  if (budget === "low") {
    return {
      name: "Colgate Optic White Advanced",
      tagline: "Best budget whitening option",
      score: "7.8/10",
      price: "From $35",
      description: "For your budget, Colgate Optic White strips are the best option. They're reliable, widely available, and deliver gradual brightening without breaking the bank. If you find you want more dramatic results, consider upgrading to SmilePro.",
      href: "/best-whitening-kits",
      external: false,
      highlights: ["Best value for money", "Reliable results", "No sensitivity"],
      isTopPick: false,
    };
  }

  // Default → SmilePro
  return {
    name: "SmilePro LED Whitening Kit",
    tagline: "Australia's best at-home whitening kit",
    score: "9.4/10",
    price: "From $89",
    description: "Based on your answers, SmilePro LED Whitening Kit is your perfect match. It delivers maximum whitening results with a dentist-formulated gel and LED accelerator, designed for people who want real results without the dental chair price tag. It's our #1 pick for 2025 — and it's the kit we'd recommend to anyone serious about whitening.",
    href: "https://smilepro.com.au",
    external: true,
    highlights: ["Dentist-formulated gel", "16-LED accelerator", "Results in 7 days", "Custom-fit tray"],
    isTopPick: true,
  };
}

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentStep];
  const progress = ((currentStep) / questions.length) * 100;
  const selectedAnswer = answers[question?.id];

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? getResult(answers) : null;

  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-16 lg:pt-18">
      {/* Hero */}
      <div className="relative bg-[#1B4332] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${QUIZ_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[#1B4332]/75" />
        <div className="container relative z-10 py-12 text-center">
          <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-3">Free Personalised Quiz</div>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
            Find Your Perfect Whitening Kit
          </h1>
          <p className="text-[#A8C5A0] max-w-lg mx-auto">
            Answer 5 quick questions and we'll match you with the best whitening solution for your teeth, lifestyle, and budget.
          </p>
        </div>
      </div>

      {/* Quiz body */}
      <div className="container py-10 lg:py-14">
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-[#6B7B6E] mb-2">
                  <span className="font-medium">Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(((currentStep) / questions.length) * 100)}% complete</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* Question */}
              <div className="bg-white border border-[#E8E4DC] rounded-2xl p-7 lg:p-8 shadow-sm">
                <h2 className="font-display text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-6">
                  {question.question}
                </h2>
                <div className="space-y-3 mb-8">
                  {question.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className={`quiz-option w-full text-left flex items-center gap-3 ${
                        selectedAnswer === opt.value ? "selected" : ""
                      }`}
                    >
                      {opt.icon && <span className="text-xl flex-shrink-0">{opt.icon}</span>}
                      <span className="text-sm leading-snug">{opt.label}</span>
                      {selectedAnswer === opt.value && (
                        <CheckCircle className="w-4 h-4 text-[#1B4332] ml-auto flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 text-sm font-semibold text-[#4A5A50] hover:text-[#1B4332] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!selectedAnswer}
                    className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {currentStep === questions.length - 1 ? "See My Result" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : result ? (
            /* Result */
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-[#D4EAD0] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#1B4332]" />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-2">
                  Your Perfect Match
                </h2>
                <p className="text-[#4A5A50]">Based on your answers, here's our personalised recommendation.</p>
              </div>

              <div className={`rounded-2xl border-2 overflow-hidden ${result.isTopPick ? "border-[#C9A84C]" : "border-[#E8E4DC]"} bg-white shadow-lg`}>
                {result.isTopPick && (
                  <div className="bg-[#C9A84C] px-6 py-2.5 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#1A1A1A]" />
                    <span className="font-label font-bold text-sm text-[#1A1A1A] uppercase tracking-wide">
                      Our Top Recommendation for You
                    </span>
                  </div>
                )}
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row gap-5 mb-6">
                    {result.isTopPick && (
                      <img src={KIT_IMG} alt={result.name} className="w-32 h-32 object-cover rounded-xl border border-[#E8E4DC] flex-shrink-0" />
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={result.isTopPick ? "badge-editors-choice" : "badge-best-pick"}>
                          {result.isTopPick ? "Best Match" : "Good Match"}
                        </span>
                        <span className="font-bold text-[#1B4332] text-sm">{result.score}</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl text-[#1A1A1A] mb-1">{result.name}</h3>
                      <p className="text-[#4A5A50] text-sm mb-1">{result.tagline}</p>
                      <p className="font-semibold text-[#1B4332]">{result.price}</p>
                    </div>
                  </div>

                  <p className="text-[#4A5A50] leading-relaxed mb-5">{result.description}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {result.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-sm text-[#2D4A3E]">
                        <CheckCircle className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {result.external ? (
                      <a href={result.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Shop Now <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link href={result.href} className="btn-primary">
                        Read Full Review <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                    <button onClick={handleReset} className="btn-outline flex items-center gap-2 text-sm">
                      <RotateCcw className="w-3.5 h-3.5" />
                      Retake Quiz
                    </button>
                  </div>
                  {result.external && (
                    <p className="text-[#6B7B6E] text-xs mt-3">Affiliate link — we may earn a commission. See our <Link href="/disclosure" className="text-[#1B4332] underline">disclosure</Link>.</p>
                  )}
                </div>
              </div>

              {/* Also consider */}
              <div className="mt-8 bg-[#F0EDE5] rounded-xl p-5">
                <div className="font-label text-xs text-[#6B7B6E] uppercase tracking-wide mb-3">Also Consider</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Best for Sensitive Teeth", href: "/sensitive-teeth-whitening" },
                    { name: "Full Kit Comparison (10 products)", href: "/best-whitening-kits" },
                    { name: "LED vs Strips Guide", href: "/led-vs-strips" },
                    { name: "Is Whitening Safe?", href: "/is-whitening-safe" },
                  ].map(({ name, href }) => (
                    <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#1B4332] font-medium hover:text-[#2D6A4F] no-underline">
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
