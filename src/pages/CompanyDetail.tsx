import { useParams, Navigate, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { companies } from "@/data/companies";
import { ArrowLeft, CheckCircle } from "lucide-react";

const CompanyDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const company = companies.find((c) => c.id === id);

  if (!company) return <Navigate to="/companies" replace />;
  if (company.external) {
    window.location.href = company.external;
    return null;
  }

  return (
    <Layout>
      <SEO
        title={`${company.nameEn} | HSIN HSIN`}
        description={company.descEn}
        path={`/companies/${company.id}`}
      />

      <PageHero
        title={t(company.nameEn, company.nameZh)}
        subtitle={t(company.taglineEn, company.taglineZh)}
      />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-5xl">
          <Link to="/companies" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-10 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> {t("Back to Our Companies", "返回旗下企業")}
          </Link>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-secondary rounded-lg p-10 flex items-center justify-center mb-6">
                <img src={company.logo} alt={`${company.nameEn} logo`} className="max-h-28 max-w-[220px] w-auto object-contain" />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent font-medium">{t("Industry", "產業")}</p>
                  <p className="text-foreground text-sm mt-1">{t(company.industryEn, company.industryZh)}</p>
                </div>
                {company.location && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent font-medium">{t("Location", "地點")}</p>
                    <p className="text-foreground text-sm mt-1">{company.location}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Main content */}
            <div className="md:w-2/3 space-y-8">
              <div>
                <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">{t("Overview", "概述")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t(company.overviewEn, company.overviewZh)}
                </p>
              </div>

              <div className="space-y-4">
                {company.detailEn.map((_, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {t(company.detailEn[i], company.detailZh[i])}
                  </p>
                ))}
              </div>

              {company.servicesEn.length > 0 && (
                <div>
                  <h3 className="font-display text-lg text-foreground mb-4">{t("Key Services", "主要服務")}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {company.servicesEn.map((_, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        {t(company.servicesEn[i], company.servicesZh[i])}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-secondary rounded-lg p-8 mt-8">
                <h3 className="font-display text-lg text-foreground mb-2">
                  {t("Interested in working together?", "有興趣合作嗎？")}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(
                    "Reach out to learn more about our services and how we can support your needs.",
                    "聯繫我們，了解更多關於我們的服務及如何支持您的需求。"
                  )}
                </p>
                <Link to="/contact" className="btn-primary">
                  {t("Contact Us", "聯繫我們")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyDetail;
