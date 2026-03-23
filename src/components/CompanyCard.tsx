import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Company } from "@/data/companies";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const { t } = useLanguage();

  const card = (
    <article
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group"
    >
      {/* Category */}
      <div className="px-6 pt-5 pb-1">
        <p className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">
          {t(company.categoryEn, company.categoryZh)}
        </p>
      </div>

      {/* Company Name */}
      <div className="px-6 pb-2">
        <h3 className="font-display text-lg text-foreground leading-snug">
          {t(company.nameEn, company.nameZh)}
        </h3>
      </div>

      {/* ========== FULL-WIDTH LOGO PANEL ========== */}
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

      {/* Description + Button */}
      <div className="px-6 pb-6 flex flex-col flex-1">
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {t(company.descEn, company.descZh)}
        </p>
        <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
          {company.external ? (
            <>
              {t("Visit Website", "訪問網站")} <ExternalLink size={14} />
            </>
          ) : (
            <>
              {t("Learn More", "了解更多")} <ArrowRight size={14} />
            </>
          )}
        </div>
      </div>
    </article>
  );

  if (company.external) {
    return (
      <a href={company.external} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return <Link to={`/companies/${company.id}`}>{card}</Link>;
};

export default CompanyCard;
