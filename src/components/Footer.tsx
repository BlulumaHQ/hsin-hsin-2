import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@/assets/logo-hsinhsin-new.png";

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
          {/* Left zone: Logo + brand line */}
          <div className="md:col-span-4">
            <img src={logoImg} alt="HSIN HSIN" className="h-[80px] w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-[280px]">
              {t(
                "Professional · Innovative · Extraordinary Rooted in Value.",
                "專業・創新・非凡，為價值而生。"
              )}
            </p>
          </div>

          {/* Middle zone: Spacer */}
          <div className="hidden md:block md:col-span-3" />

          {/* Right zone: Quick Links + Contact */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent mb-5">
                {t("Quick Links", "快速連結")}
              </h4>
              <div className="flex flex-col gap-2.5">
                <button onClick={() => handleNavClick("/about")} className="text-left text-primary-foreground/60 hover:text-accent text-sm transition-colors">{t("About Us", "關於我們")}</button>
                <button onClick={() => handleNavClick("/companies")} className="text-left text-primary-foreground/60 hover:text-accent text-sm transition-colors">{t("Our Companies", "旗下企業")}</button>
                <button onClick={() => handleNavClick("/founder")} className="text-left text-primary-foreground/60 hover:text-accent text-sm transition-colors">{t("Our Story", "我們的故事")}</button>
                <button onClick={() => handleNavClick("/community")} className="text-left text-primary-foreground/60 hover:text-accent text-sm transition-colors">{t("Community", "文化社區")}</button>
                <button onClick={() => handleNavClick("/contact")} className="text-left text-primary-foreground/60 hover:text-accent text-sm transition-colors">{t("Contact", "聯繫")}</button>
              </div>
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent mb-5">
                {t("Contact", "聯繫")}
              </h4>
              <p className="text-primary-foreground/60 text-sm">Vancouver, BC, Canada</p>
              <p className="text-primary-foreground/60 text-sm mt-1.5">info@hsinhsin.ca</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} HSIN HSIN Family Enterprise Group. {t("All rights reserved.", "版權所有。")} | Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Bluluma</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
