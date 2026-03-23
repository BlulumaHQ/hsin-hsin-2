import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { companies } from "@/data/companies";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import CompanyCard from "@/components/CompanyCard";
import { ArrowRight } from "lucide-react";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    img: heroSlide1,
    alt: "Branding and event design installation at a trade show",
    kenburns: "animate-kenburns-1",
    category: "Creative Enterprise",
    categoryZh: "創意企業",
    headline: "Design, Culture, and Brand in Motion",
    headlineZh: "設計、文化與品牌動態",
    sub: "From visual identity to experiential storytelling, HSIN HSIN connects creativity with business through thoughtful design, communication, and presentation.",
    subZh: "從視覺識別到體驗式敘事，欣欣透過精心設計、傳播與呈現，將創意與商業連結在一起。",
    btn1: "Explore Our Companies",
    btn1Zh: "探索旗下企業",
    btn1Link: "/companies",
    btn2: "Our Story",
    btn2Zh: "我們的故事",
    btn2Link: "/about",
  },
  {
    img: heroSlide2,
    alt: "Traditional custom picture framing workshop craftsmanship",
    kenburns: "animate-kenburns-2",
    category: "Craftsmanship Heritage",
    categoryZh: "工藝傳承",
    headline: "Craftsmanship Rooted in Heritage",
    headlineZh: "植根於傳承的工藝精神",
    sub: "Built on decades of material knowledge, presentation expertise, and dedication to quality, our craftsmanship continues to shape lasting value across generations.",
    subZh: "奠基於數十年的材料知識、呈現專業與對品質的執著，我們的工藝持續塑造跨世代的長久價值。",
    btn1: "Discover Our Heritage",
    btn1Zh: "探索我們的傳承",
    btn1Link: "/founder",
    btn2: "View Our Companies",
    btn2Zh: "查看旗下企業",
    btn2Link: "/companies",
  },
  {
    img: heroSlide3,
    alt: "Asian artist teaching abstract fluid painting technique in art studio",
    kenburns: "animate-kenburns-3",
    category: "Art Education & Legacy",
    categoryZh: "藝術教育與傳承",
    headline: "Creative Legacy Through Art",
    headlineZh: "透過藝術延續創意傳承",
    sub: "Through artistic practice, cultural teaching, and hands-on exploration, HSIN HSIN carries creative knowledge forward into the next generation.",
    subZh: "透過藝術實踐、文化教學與動手探索，欣欣將創意知識傳遞給下一代。",
    btn1: "Explore Community & Culture",
    btn1Zh: "探索文化社區",
    btn1Link: "/community",
    btn2: "Meet the Family Story",
    btn2Zh: "認識家族故事",
    btn2Link: "/founder",
  },
];

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <Layout>
      <SEO
        title="HSIN HSIN | Vancouver Family Enterprise Group"
        description="HSIN HSIN is a Vancouver-based family enterprise connecting craftsmanship, art education, cultural events, lifestyle brands, and digital design through a multi-generational business ecosystem."
        path="/"
      />
      <StructuredData />

      {/* Hero Slider */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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
        <div className="absolute inset-0 hero-slide-overlay" />
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 max-w-3xl">
          <p className="text-accent text-xs md:text-sm uppercase tracking-[0.35em] font-semibold drop-shadow">
            {t(slide.category, slide.categoryZh)}
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground font-bold tracking-tight leading-tight mt-4 drop-shadow-lg transition-all duration-700">
            {t(slide.headline, slide.headlineZh)}
          </h1>
          <p className="text-primary-foreground/75 mt-4 text-sm md:text-base leading-relaxed max-w-xl drop-shadow transition-all duration-700">
            {t(slide.sub, slide.subZh)}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <button onClick={() => { navigate(slide.btn1Link); window.scrollTo(0, 0); }} className="btn-primary">
              {t(slide.btn1, slide.btn1Zh)}
            </button>
            <button onClick={() => { navigate(slide.btn2Link); window.scrollTo(0, 0); }} className="btn-accent !text-primary-foreground !border-primary-foreground/40 hover:!bg-primary-foreground/10">
              {t(slide.btn2, slide.btn2Zh)}
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 sm:left-12 lg:left-20 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-accent w-8" : "bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 md:py-24">
        <div className="section-container max-w-3xl text-center">
          <p className="text-accent text-xs uppercase tracking-widest font-medium mb-3">
            {t("About HSIN HSIN", "關於欣欣")}
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6">
            {t("A Vancouver Family Enterprise", "溫哥華家族企業")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t(
              "Founded in Vancouver, Canada in 1995, HSIN HSIN is a diversified family enterprise group spanning art craftsmanship, cultural education, event planning, lifestyle retail, and digital brand strategy. Guided by the values of professionalism, innovation, and long-term stewardship, the group continues to evolve across generations while remaining rooted in community, culture, and quality.",
              "欣欣企業成立於 1995 年加拿大溫哥華，是一個橫跨藝術工藝、文化教育、活動策劃、生活選品與品牌數位整合的家族企業集團。集團以「專業、創新、非凡」為核心精神，結合文化、美學、創意與永續價值，持續推動品牌升級、社區連結與世代傳承。"
            )}
          </p>
          <blockquote className="border-l-2 border-accent pl-6 text-foreground italic font-display text-lg md:text-xl">
            {t(
              "Professional · Innovative · Extraordinary — Rooted in Value.",
              "專業・創新・非凡，為價值而生。永續經營，世代傳承。"
            )}
          </blockquote>
          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
              {t("Learn more about us", "了解更多")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Ecosystem Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent text-xs uppercase tracking-widest font-medium mb-3">
              {t("Our Portfolio", "企業版圖")}
            </p>
            <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6">
              {t("Our Ecosystem", "我們的生態系統")}
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                "HSIN HSIN is a multi-generational family enterprise connecting craftsmanship, culture, lifestyle, creative industries, and digital innovation.",
                "欣欣是一家多代家族企業，連結工藝、文化、生活、創意產業與數位創新。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                "Through a portfolio of specialized companies, the group brings together heritage craftsmanship, cultural education, curated experiences, and modern brand development.",
                "透過一系列專業公司，集團匯聚傳統工藝、文化教育、策劃體驗與現代品牌發展。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Each company operates independently while contributing to a shared ecosystem rooted in quality, creativity, and long-term value.",
                "每家公司獨立運營，同時為一個植根於品質、創意和長期價值的共享生態系統做出貢獻。"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/insights" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
              {t("Read our latest insights", "閱讀我們的最新觀點")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
