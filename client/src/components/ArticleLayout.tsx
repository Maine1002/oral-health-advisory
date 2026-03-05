/**
 * ArticleLayout — Oral Health Advisory
 * Shared layout for all article/review/guide pages
 * Features: sticky TOC sidebar, breadcrumb, article header, CTA sidebar
 */

import { ReactNode } from "react";
import { Link } from "wouter";
import { ChevronRight, Clock, Calendar, Award } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
}

interface ArticleLayoutProps {
  breadcrumb: { label: string; href: string }[];
  badge?: string;
  title: string;
  subtitle?: string;
  author?: string;
  authorTitle?: string;
  readTime?: string;
  updatedDate?: string;
  toc?: TOCItem[];
  children: ReactNode;
  sidebarCTA?: ReactNode;
}

export default function ArticleLayout({
  breadcrumb,
  badge,
  title,
  subtitle,
  author = "OHA Editorial Team",
  authorTitle = "Oral Health Advisory",
  readTime = "8 min read",
  updatedDate = "March 2025",
  toc,
  children,
  sidebarCTA,
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-16 lg:pt-18">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E8E4DC]">
        <div className="container py-3">
          <nav className="flex items-center gap-1.5 text-xs text-[#6B7B6E]">
            <Link href="/" className="hover:text-[#1B4332] transition-colors no-underline">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                <Link
                  href={crumb.href}
                  className="hover:text-[#1B4332] transition-colors no-underline"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Article header */}
      <div className="bg-white border-b border-[#E8E4DC]">
        <div className="container py-10 lg:py-12">
          <div className="max-w-3xl">
            {badge && (
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-editors-choice">
                  <Award className="w-3 h-3" />
                  {badge}
                </span>
              </div>
            )}
            <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[#4A5A50] text-lg leading-relaxed mb-5">{subtitle}</p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7B6E]">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-full bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-[#C9A84C] text-[10px]">OHA</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1A1A1A]">{author}</span>
                  <span className="text-[#6B7B6E]"> · {authorTitle}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {readTime}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Updated {updatedDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-10 lg:py-14">
        <div className="flex gap-10 lg:gap-14">
          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-3xl">
            {children}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
              {toc && toc.length > 0 && (
                <div className="bg-white border border-[#E8E4DC] rounded-xl p-5">
                  <div className="font-label text-xs text-[#C9A84C] uppercase tracking-widest mb-3">
                    Contents
                  </div>
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-[#4A5A50] hover:text-[#1B4332] transition-colors no-underline block py-0.5"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              {sidebarCTA}

              {/* Trust box */}
              <div className="bg-[#F0F7F3] border border-[#D4EAD0] rounded-xl p-5">
                <div className="font-label text-xs text-[#1B4332] uppercase tracking-widest mb-2">
                  Our Promise
                </div>
                <p className="text-xs text-[#4A6B5A] leading-relaxed">
                  Every product on this site is independently purchased and tested. We never accept payment for positive reviews. See our{" "}
                  <Link href="/editorial-policy" className="text-[#1B4332] underline">
                    editorial policy
                  </Link>.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
