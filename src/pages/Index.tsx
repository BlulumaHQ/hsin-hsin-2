import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { companies } from "@/data/companies";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { ArrowRight, ExternalLink } from "lucide-react";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import founderImg from "@/assets/founders-portrait.jpg";
import craftsmanshipImg from "@/assets/hero-craftsmanship.jpg";
import insightCulture from "@/assets/insight-culture.jpg";

/* ── scroll-reveal hook ── */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

const revealClass = (visible: boolean, delay = 0) =>
  `transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
    visible
      ? "opacity-100 translate-y-0 blur-0"
      : "opacity-0 translate-y-5 blur-[4px]"
  }` + (delay ? ` delay-[${delay}ms]` : "");

/* ── hero slides data ── */
const slides = [
  {
    img: heroSlide1,
    alt: "Branding and event design installation at a trade show",
    kenburns: "animate-kenburns-1",
    headline: "Design,\nCulture,\n& Brand\nin Motion",
    headlineZh: "設計、\n文化與\n品牌動態",
    sub: "Connecting creativity with business through thoughtful design.",
    subZh: "透過精心設計，將創意與商業連結。",
  },
  {
    img: heroSlide2,
    alt: "Traditional custom picture framing workshop craftsmanship",
    kenburns: "animate-kenburns-2",
    headline: "Craftsmanship\nRooted in\nHeritage",
    headlineZh: "植根於\n傳承的\n工藝精神",
    sub: "Decades of material knowledge shaping lasting value.",
    subZh: "數十年的材料知識塑造長久價值。",
  },
  {
    img: heroSlide3,
    alt: "Asian artist teaching abstract fluid painting technique",
    kenburns: "animate-kenburns-3",
    headline: "Creative\nLegacy\nThrough\nArt",
    headlineZh: "透過藝術\n延續創意\n傳承",
    sub: "Carrying creative knowledge into the next generation.",
    subZh: "將創意知識傳遞給下一代。",
  },
];

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  useEffect(() => { const id = setInterval(next, 7000); return () => clearInterval(id); }, [next]);

  const slide = slides[current];

  // reveal refs
  const r1 = useReveal<HTMLElement>();
  const r2 = useReveal<HTMLElement>();
  const r3 = useReveal<HTMLElement>();
  const r4 = useReveal<HTMLElement>();
  const r5 = useReveal<HTMLElement>();
  const r6 = useReveal<HTMLElement>();

  return (
    <Layout editorial>
      <SEO
        title="HSIN HSIN | Vancouver Family Enterprise Group"
        description="HSIN HSIN is a Vancouver-based family enterprise connecting craftsmanship, art education, cultural events, lifestyle brands, and digital design through a multi-generational business ecosystem."
        path="/"
      />
      <StructuredData />

      {/* ═══════════ 1. HERO — full-screen immersive ═══════════ */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.img}
              alt={s.alt}
              className={`absolute inset-0 w-full h-full object-cover ${s.kenburns}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-foreground/50" />

        {/* hero text — bottom-left, enormous display type */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="px-6 sm:px-12 lg:px-20 pb-16 md:pb-24 max-w-[900px]">
            <h1
              className="font-display text-[clamp(2.5rem,8vw,7rem)] text-primary-foreground font-semibold leading-[0.9] tracking-[-0.03em] whitespace-pre-line transition-all duration-700"
              style={{ textWrap: "balance", overflowWrap: "break-word" }}
            >
              {t(slide.headline, slide.headlineZh)}
            </h1>
            <p className="mt-6 text-primary-foreground/70 text-sm md:text-base max-w-md leading-relaxed font-light tracking-wide">
              {t(slide.sub, slide.subZh)}
            </p>
          </div>
        </div>

        {/* slide indicators — vertical, right edge */}
        <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-[3px] rounded-full transition-all duration-500 ${
                i === current ? "h-10 bg-primary-foreground" : "h-4 bg-primary-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40">
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll</span>
          <div className="w-px h-8 bg-primary-foreground/30 animate-pulse" />
        </div>
      </section>

      {/* ═══════════ 2. ABOUT — editorial asymmetric ═══════════ */}
      <section ref={r1.ref} className="relative py-32 md:py-48">
        <div className="px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-y-12">
            {/* label — far left */}
            <div className={`col-span-12 md:col-span-2 ${revealClass(r1.visible)}`}>
              <p className="text-accent text-[10px] uppercase tracking-[0.35em] font-semibold md:mt-3">
                {t("About", "關於")}
              </p>
            </div>

            {/* headline — spanning center */}
            <div className={`col-span-12 md:col-span-8 md:col-start-3 ${revealClass(r1.visible, 100)}`}>
              <h2
                className="font-display text-[clamp(2rem,5vw,4.5rem)] text-foreground leading-[1.05] tracking-[-0.02em]"
                style={{ textWrap: "balance" }}
              >
                {t(
                  "A Vancouver Family Enterprise",
                  "溫哥華家族企業"
                )}
              </h2>
            </div>

            {/* body — offset right */}
            <div className={`col-span-12 md:col-span-5 md:col-start-7 ${revealClass(r1.visible, 200)}`}>
              <div className="w-12 h-px bg-accent mb-8" />
              <p className="text-muted-foreground leading-[1.8] text-[15px]">
                {t(
                  "Founded in Vancouver, Canada in 1995, HSIN HSIN is a diversified family enterprise group spanning art craftsmanship, cultural education, event planning, lifestyle retail, and digital brand strategy. Guided by the values of professionalism, innovation, and long-term stewardship, the group continues to evolve across generations while remaining rooted in community, culture, and quality.",
                  "欣欣企業成立於 1995 年加拿大溫哥華，是一個橫跨藝術工藝、文化教育、活動策劃、生活選品與品牌數位整合的家族企業集團。集團以「專業、創新、非凡」為核心精神，結合文化、美學、創意與永續價值，持續推動品牌升級、社區連結與世代傳承。"
                )}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 mt-8 text-accent text-sm font-medium hover:gap-3 transition-all group"
              >
                {t("Learn more about us", "了解更多")}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. FULL-BLEED IMAGE — craftsmanship ═══════════ */}
      <section ref={r2.ref} className="relative">
        <div className={`${revealClass(r2.visible)} overflow-hidden`}>
          <img
            src={craftsmanshipImg}
            alt="Craftsmanship heritage"
            className="w-full h-[60vh] md:h-[75vh] object-cover"
          />
        </div>
        {/* overlapping quote block */}
        <div className="relative md:absolute md:bottom-0 md:right-0 md:w-[480px] bg-primary text-primary-foreground p-10 md:p-14">
          <blockquote className="font-display text-xl md:text-2xl leading-[1.4] italic">
            {t(
              "Professional · Innovative · Extraordinary — Rooted in Value.",
              "專業・創新・非凡，為價值而生。永續經營，世代傳承。"
            )}
          </blockquote>
          <div className="w-10 h-px bg-accent mt-6" />
        </div>
      </section>

      {/* ═══════════ 4. ECOSYSTEM — editorial staggered layout ═══════════ */}
      <section ref={r3.ref} className="py-32 md:py-48">
        <div className="px-6 sm:px-12 lg:px-20">
          {/* section header — asymmetric */}
          <div className="grid grid-cols-12 gap-y-8 mb-20 md:mb-32">
            <div className={`col-span-12 md:col-span-3 ${revealClass(r3.visible)}`}>
              <p className="text-accent text-[10px] uppercase tracking-[0.35em] font-semibold">
                {t("Our Portfolio", "企業版圖")}
              </p>
            </div>
            <div className={`col-span-12 md:col-span-7 md:col-start-4 ${revealClass(r3.visible, 100)}`}>
              <h2
                className="font-display text-[clamp(2rem,4.5vw,4rem)] text-foreground leading-[1.1] tracking-[-0.02em]"
                style={{ textWrap: "balance" }}
              >
                {t("Our Ecosystem", "我們的生態系統")}
              </h2>
              <p className="text-muted-foreground leading-[1.8] text-[15px] mt-6 max-w-xl">
                {t(
                  "HSIN HSIN is a multi-generational family enterprise connecting craftsmanship, culture, lifestyle, creative industries, and digital innovation. Each company operates independently while contributing to a shared ecosystem rooted in quality, creativity, and long-term value.",
                  "欣欣是一家多代家族企業，連結工藝、文化、生活、創意產業與數位創新。每家公司獨立運營，同時為一個植根於品質、創意和長期價值的共享生態系統做出貢獻。"
                )}
              </p>
            </div>
          </div>

          {/* editorial company cards — staggered, not a grid */}
          <div className="space-y-20 md:space-y-32">
            {companies.map((company, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <EditorialCompanyRow key={company.id} company={company} flipped={!isEven} index={idx} />
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. FOUNDER IMAGE + TEXT ═══════════ */}
      <section ref={r4.ref} className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
          <div className={`relative overflow-hidden ${revealClass(r4.visible)}`}>
            <img
              src={founderImg}
              alt="HSIN HSIN founders"
              className="w-full h-full object-cover min-h-[50vh]"
            />
          </div>
          <div className={`flex items-center bg-secondary px-10 md:px-16 lg:px-24 py-16 md:py-0 ${revealClass(r4.visible, 150)}`}>
            <div>
              <p className="text-accent text-[10px] uppercase tracking-[0.35em] font-semibold mb-6">
                {t("Our Story", "我們的故事")}
              </p>
              <h2
                className="font-display text-[clamp(1.8rem,3.5vw,3.5rem)] text-foreground leading-[1.1] tracking-[-0.02em] mb-8"
                style={{ textWrap: "balance" }}
              >
                {t("Craftsmanship Rooted in Heritage", "植根於傳承的工藝精神")}
              </h2>
              <p className="text-muted-foreground leading-[1.8] text-[15px] max-w-md">
                {t(
                  "Built on decades of material knowledge, presentation expertise, and dedication to quality, our craftsmanship continues to shape lasting value across generations.",
                  "奠基於數十年的材料知識、呈現專業與對品質的執著，我們的工藝持續塑造跨世代的長久價值。"
                )}
              </p>
              <Link
                to="/founder"
                className="inline-flex items-center gap-1.5 mt-10 text-accent text-sm font-medium hover:gap-3 transition-all group"
              >
                {t("Meet the Family Story", "認識家族故事")}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 6. CULTURE — large type ═══════════ */}
      <section ref={r5.ref} className="py-32 md:py-48 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-y-12">
          <div className={`col-span-12 md:col-span-6 ${revealClass(r5.visible)}`}>
            <p className="text-accent text-[10px] uppercase tracking-[0.35em] font-semibold mb-6">
              {t("Community & Culture", "文化社區")}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.1] tracking-[-0.02em]"
              style={{ textWrap: "balance" }}
            >
              {t(
                "Creative Legacy Through Art",
                "透過藝術延續創意傳承"
              )}
            </h2>
            <p className="text-muted-foreground leading-[1.8] text-[15px] mt-8 max-w-md">
              {t(
                "Through artistic practice, cultural teaching, and hands-on exploration, HSIN HSIN carries creative knowledge forward into the next generation.",
                "透過藝術實踐、文化教學與動手探索，欣欣將創意知識傳遞給下一代。"
              )}
            </p>
            <Link
              to="/community"
              className="inline-flex items-center gap-1.5 mt-10 text-accent text-sm font-medium hover:gap-3 transition-all group"
            >
              {t("Explore Community & Culture", "探索文化社區")}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className={`col-span-12 md:col-span-5 md:col-start-8 ${revealClass(r5.visible, 150)}`}>
            <img
              src={insightCulture}
              alt="Culture and community"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ 7. INSIGHTS CTA — minimal ═══════════ */}
      <section ref={r6.ref} className="border-t border-border py-20 md:py-28">
        <div className={`px-6 sm:px-12 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 ${revealClass(r6.visible)}`}>
          <div>
            <p className="text-accent text-[10px] uppercase tracking-[0.35em] font-semibold mb-3">
              {t("Insights", "觀點")}
            </p>
            <h3
              className="font-display text-2xl md:text-3xl text-foreground tracking-[-0.01em]"
              style={{ textWrap: "balance" }}
            >
              {t("Read our latest insights", "閱讀我們的最新觀點")}
            </h3>
          </div>
          <Link
            to="/insights"
            className="btn-primary flex items-center gap-2 shrink-0"
          >
            {t("View All", "查看全部")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

/* ── Editorial Company Row ── */
interface EditorialCompanyRowProps {
  company: (typeof companies)[number];
  flipped: boolean;
  index: number;
}

const EditorialCompanyRow = ({ company, flipped, index }: EditorialCompanyRowProps) => {
  const { t } = useLanguage();
  const r = useReveal<HTMLDivElement>();

  const content = (
    <div ref={r.ref} className="grid grid-cols-12 gap-y-8 items-center">
      {/* number */}
      <div className={`col-span-12 md:col-span-1 ${revealClass(r.visible)}`}>
        <span className="font-display text-6xl md:text-7xl text-border font-semibold leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* logo */}
      <div
        className={`col-span-12 md:col-span-4 ${
          flipped ? "md:col-start-2 md:order-1" : "md:col-start-2 md:order-1"
        } ${revealClass(r.visible, 80)}`}
      >
        <div className="flex items-center justify-center h-48 md:h-64">
          <img
            src={company.logo}
            alt={`${company.nameEn} logo`}
            className="max-w-[80%] max-h-full object-contain"
          />
        </div>
      </div>

      {/* text */}
      <div
        className={`col-span-12 md:col-span-5 ${
          flipped ? "md:col-start-7 md:order-2" : "md:col-start-7 md:order-2"
        } ${revealClass(r.visible, 160)}`}
      >
        <p className="text-accent text-[10px] uppercase tracking-[0.25em] font-semibold mb-2">
          {t(company.categoryEn, company.categoryZh)}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-foreground leading-[1.15] tracking-[-0.01em] mb-4">
          {t(company.nameEn, company.nameZh)}
        </h3>
        <p className="text-muted-foreground text-[15px] leading-[1.8] mb-6">
          {t(company.descEn, company.descZh)}
        </p>
        {company.external ? (
          <a
            href={company.external}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-3 transition-all group"
          >
            {t("Visit Website", "訪問網站")}
            <ExternalLink size={14} />
          </a>
        ) : (
          <Link
            to={`/companies/${company.id}`}
            className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-3 transition-all group"
          >
            {t("Learn More", "了解更多")}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );

  return content;
};

export default Index;
