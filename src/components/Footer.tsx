import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const links = [
    { path: "/about", labelEn: "About", labelZh: "關於" },
    { path: "/companies", labelEn: "Companies", labelZh: "企業" },
    { path: "/founder", labelEn: "Our Story", labelZh: "故事" },
    { path: "/community", labelEn: "Community", labelZh: "社區" },
    { path: "/insights", labelEn: "Insights", labelZh: "觀點" },
    { path: "/contact", labelEn: "Contact", labelZh: "聯繫" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-6 sm:px-12 lg:px-20 py-16 md:py-24">
        {/* Top: large brand name */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-primary-foreground/10 leading-[0.9] tracking-[-0.03em] select-none">
            HSIN HSIN
          </h2>
        </div>

        {/* Middle: links + contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">
          <div className="md:col-span-6">
            <p className="text-primary-foreground/30 text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">
              {t("Navigation", "導航")}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors duration-300"
                >
                  {t(item.labelEn, item.labelZh)}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-primary-foreground/30 text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">
              {t("Contact", "聯繫")}
            </p>
            <p className="text-primary-foreground/50 text-sm">Vancouver, BC, Canada</p>
            <p className="text-primary-foreground/50 text-sm mt-1">info@hsinhsin.ca</p>
            <p className="text-primary-foreground/30 text-sm mt-6 leading-relaxed max-w-[280px]">
              {t(
                "Professional · Innovative · Extraordinary — Rooted in Value.",
                "專業・創新・非凡，為價值而生。"
              )}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/8 mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-primary-foreground/25 text-xs">
            © {new Date().getFullYear()} HSIN HSIN Family Enterprise Group. {t("All rights reserved.", "版權所有。")}
          </p>
          <p className="text-primary-foreground/25 text-xs">
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-accent/60 hover:text-accent transition-colors">
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
