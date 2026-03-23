import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-hsinhsin-new.png";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const showBg = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg
          ? "bg-primary/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 sm:px-12 lg:px-20 flex items-center justify-between h-20 md:h-24">
        <button onClick={() => handleNavClick("/")} className="flex items-center gap-3">
          <img src={logoImg} alt="HSIN HSIN" className="h-[45px] md:h-[60px] w-auto" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`text-primary-foreground/70 hover:text-primary-foreground text-[13px] font-sans font-medium tracking-wide transition-colors duration-300 ${
                location.pathname === item.path ? "text-primary-foreground" : ""
              }`}
            >
              {t(item.labelEn, item.labelZh)}
            </button>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-primary-foreground/50 hover:text-primary-foreground text-[13px] font-medium ml-2 transition-colors"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-primary-foreground/50 hover:text-primary-foreground text-xs font-medium"
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
        <nav className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/5 pb-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`block w-full text-left px-6 sm:px-12 py-3 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors ${
                location.pathname === item.path ? "text-primary-foreground" : ""
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
