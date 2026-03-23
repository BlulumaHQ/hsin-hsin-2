import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-hsinhsin-new.png";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", labelEn: "Home", labelZh: "首頁" },
    { path: "/about", labelEn: "About Us", labelZh: "關於我們" },
    { path: "/companies", labelEn: "Our Companies", labelZh: "旗下企業" },
    { path: "/founder", labelEn: "Our Story", labelZh: "我們的故事" },
    { path: "/community", labelEn: "Community", labelZh: "文化社區" },
    { path: "/insights", labelEn: "Insights", labelZh: "觀點" },
    { path: "/contact", labelEn: "Contact", labelZh: "聯繫我們" },
  ];

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="section-container flex items-center justify-between h-20 md:h-28">
        <button onClick={() => handleNavClick("/")} className="flex items-center gap-3">
          <img src={logoImg} alt="HSIN HSIN" className="h-[55px] md:h-[80px] w-auto" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`text-primary-foreground/80 hover:text-accent text-sm font-medium tracking-wide transition-colors ${
                location.pathname === item.path ? "text-accent" : ""
              }`}
            >
              {t(item.labelEn, item.labelZh)}
            </button>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-primary-foreground/60 hover:text-accent text-sm font-medium ml-2 border border-primary-foreground/20 px-3 py-1 rounded transition-colors"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-primary-foreground/60 hover:text-accent text-xs font-medium border border-primary-foreground/20 px-2 py-1 rounded"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`block w-full text-left px-6 py-3 text-primary-foreground/80 hover:text-accent text-sm ${
                location.pathname === item.path ? "text-accent" : ""
              }`}
            >
              {t(item.labelEn, item.labelZh)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
