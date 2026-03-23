import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { companies } from "@/data/companies";
import { ArrowRight, ExternalLink } from "lucide-react";

const ecosystemCategories = [
  { en: "Craftsmanship", zh: "工藝" },
  { en: "Culture", zh: "文化" },
  { en: "Lifestyle", zh: "生活" },
  { en: "Creative", zh: "創意" },
  { en: "Digital", zh: "數位" },
];

const Companies = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO
        title="Our Companies | HSIN HSIN Business Ecosystem"
        description="Explore the HSIN HSIN business ecosystem — a diversified portfolio of companies spanning craftsmanship, art education, cultural events, lifestyle brands, and digital design in Vancouver, Canada."
        path="/companies"
      />

      <PageHero
        title={t("Our Companies", "旗下企業")}
        subtitle={t(
          "A diversified ecosystem rooted in heritage, creativity, and community",
          "植根於傳承、創意和社區的多元化生態系統"
        )}
      />

      {/* Ecosystem Intro */}
      <section className="py-16 md:py-20">
        <div className="section-container max-w-3xl text-center">
          <p className="text-accent text-xs uppercase tracking-widest font-medium mb-3">
            {t("Brand Architecture", "品牌架構")}
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
      </section>

      {/* Companies by Category */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          {ecosystemCategories.map((category) => {
            const categoryCompanies = companies.filter(
              (c) => c.categoryEn === category.en
            );
            if (categoryCompanies.length === 0) return null;

            return (
              <div key={category.en} className="mb-16 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-display text-xl md:text-2xl text-foreground">
                    {t(category.en, category.zh)}
                  </h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {categoryCompanies.map((company) => {
                  const content = (
                    <div className="flex flex-col md:flex-row items-center gap-8 group">
                      <div className="w-full md:w-2/5">
                        <div
                          style={{
                            width: "100%",
                            height: "260px",
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            paddingLeft: "0px",
                            paddingRight: "0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={company.logo}
                            alt={`${company.nameEn} logo`}
                            style={{
                              display: "block",
                              width: "94%",
                              height: "100%",
                              objectFit: "contain",
                              objectPosition: "center center",
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-3/5">
                        <p className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold mb-1">
                          {t(company.categoryEn, company.categoryZh)}
                        </p>
                        <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                          {t(company.nameEn, company.nameZh)}
                        </h3>
                        <p className="text-muted-foreground/50 text-xs mb-3 italic">
                          {t(company.taglineEn, company.taglineZh)}
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-5">
                          {t(company.descEn, company.descZh)}
                        </p>
                        <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                          {company.external ? (
                            <>
                              {t("Visit Website", "訪問網站")}{" "}
                              <ExternalLink size={14} />
                            </>
                          ) : (
                            <>
                              {t("Learn More", "了解更多")}{" "}
                              <ArrowRight size={14} />
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  );

                  return company.external ? (
                    <a
                      key={company.id}
                      href={company.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-b border-border pb-10 mb-10 last:border-0 last:pb-0 last:mb-0"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={company.id}
                      to={`/companies/${company.id}`}
                      className="block border-b border-border pb-10 mb-10 last:border-0 last:pb-0 last:mb-0"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal link to Insights */}
      <section className="pb-16">
        <div className="section-container max-w-3xl text-center">
          <Link to="/insights" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
            {t("Read insights on craftsmanship and enterprise", "閱讀工藝與企業觀點")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
