import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import foundersImg from "@/assets/founders-portrait.webp";
import founderHeritageImg from "@/assets/founder-heritage.webp";
import ceoImg from "@/assets/founder-portrait-new.webp";

const Founder = () => {
  const { t } = useLanguage();

  const roles = [
    { en: "Vice President of the Canadian Women's Association", zh: "加拿大婦女聯合會副會長" },
    { en: "Standing Director of the United Chinese Community Enrichment Services Society of Canada", zh: "加拿大華人聯合總會常務理事" },
    { en: "Director of the Canadian Entrepreneurs Association", zh: "加拿大企業家協會理事" },
    { en: "Permanent Member of the Canadian Construction Renovation Association", zh: "加拿大建築裝修協會永久會員" },
    { en: "Advisor to the World Chinese Business Women's Association", zh: "世界華人工商婦女企管協會顧問" },
  ];

  const milestones = [
    { year: "1995", en: "HSIN HSIN Family Enterprise founded in Vancouver", zh: "欣欣家族企業在溫哥華成立" },
    { year: "", en: "North America Million Dollar Writer — Seven consecutive years at Maison Birks", zh: "連續七屆榮獲 Maison Birks「North America Million Dollar Writer」殊榮" },
    { year: "", en: "Brand Ambassador for Van Cleef & Arpels, Graff, and Maison Birks", zh: "擔任梵克雅寶、格拉夫及 Maison Birks 品牌大使" },
    { year: "", en: "Founded HH Nexus Capital — expanded group structure", zh: "成立衡寰國際資本——擴展集團架構" },
    { year: "", en: "Fundraising Chair, Canadian Liver Foundation — raised over CAD $2 million", zh: "加拿大肝臟基金會募款主席——成功募得超過兩百萬加元" },
    { year: "2023", en: "Outstanding Woman of Vancouver Award", zh: "獲頒「溫哥華傑出女士」榮譽獎項" },
  ];

  return (
    <Layout>
      <SEO
        title="Founder Story | The Lin Family Legacy"
        description="Discover the story of the Lin family and their journey building HSIN HSIN, a multi-generational family enterprise in Vancouver, Canada spanning craftsmanship, culture, and creative business."
        path="/founder"
      />

      <PageHero
        title={t("The Lin Family Legacy", "林氏家族傳承")}
        subtitle={t("Heritage, Craftsmanship & Stewardship", "傳承・工藝・永續經營")}
      />

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="section-container max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5 space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={foundersImg} alt={t("The Lin Family founders of HSIN HSIN enterprise", "欣欣企業林氏家族創辦人")} className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={founderHeritageImg} alt={t("Hsin Framing & Moulding early craftsmanship workshop", "欣欣畫框早期工藝工作坊")} className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="md:w-3/5 space-y-5 text-muted-foreground leading-relaxed">
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                {t("The Lin Family Legacy", "林氏家族傳承")}
              </h2>
              <p>
                {t(
                  "The story of HSIN HSIN begins with the founding generation of the Lin family, who established the business in Vancouver, Canada in 1995 with a commitment to craftsmanship, integrity, and long-term relationships.",
                  "欣欣的故事始於林氏家族的創始一代，他們於 1995 年在溫哥華創立了這家企業，秉持工藝精神、誠信經營與長期關係的承諾。"
                )}
              </p>
              <p>
                {t(
                  "What began as a small family operation rooted in traditional craftsmanship gradually evolved into a diversified enterprise connecting art, culture, education, and lifestyle businesses.",
                  "最初只是一個植根於傳統工藝的小型家族事業，逐步發展成為一個連結藝術、文化、教育與生活方式的多元化企業。"
                )}
              </p>
              <p>
                {t(
                  "From the earliest days, the family believed that craftsmanship was not only about making objects, but about preserving beauty, culture, and meaning.",
                  "從創業之初，家族便深信工藝不僅在於製作物品，更在於保存美感、文化與意義。"
                )}
              </p>
              <p>
                {t(
                  "Today HSIN HSIN represents a new generation of family enterprise—blending heritage craftsmanship with contemporary entrepreneurship and cultural engagement.",
                  "如今，欣欣代表著新一代家族企業——將傳統工藝與當代創業精神及文化參與融為一體。"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 md:py-24">
        <div className="section-container max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={ceoImg} alt="Emily Lin, CEO of HH Nexus Capital and HSIN HSIN family enterprise" className="w-full h-auto object-cover" />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h2 className="font-display text-2xl text-foreground">Emily Lin</h2>
                <p className="text-accent text-sm uppercase tracking-widest mt-1 font-medium">
                  {t("CEO · HH Nexus Capital", "CEO · 衡寰國際資本")}
                </p>
                <p className="text-muted-foreground text-xs mt-1">Vancouver, BC, Canada</p>
              </div>
            </div>
            <div className="md:w-2/3 space-y-5 text-muted-foreground leading-relaxed">
              <h3 className="font-display text-xl text-foreground">
                {t("Emily Lin 林欣怡", "Emily Lin 林欣怡")}
              </h3>
              <p>
                {t(
                  "Emily Lin is a cross-disciplinary entrepreneur and brand strategist, currently leading HH Nexus Capital while also driving the long-term development of the broader family enterprise. Her experience spans craftsmanship industries, luxury jewelry, high-net-worth client service, integrated brand strategy, and city-scale cultural event planning.",
                  "Emily Lin 林欣怡為跨界企業領導者與品牌策略顧問，現任衡寰國際資本（HH Nexus Capital）總裁，長期活躍於工藝產業、精品珠寶、高端客戶服務、品牌整合行銷與城市文化活動策劃等領域。"
                )}
              </p>
              <p>
                {t(
                  "She previously served as a senior luxury advisor at Canada's historic jewelry house Maison Birks and acted as a brand ambassador for Van Cleef & Arpels, Graff, and Maison Birks. During that period, she achieved the North America Million Dollar Writer distinction for seven consecutive years. She also built extensive experience across the international luxury jewelry sector, including BVLGARI, Cartier, Montblanc, Tiffany & Co., and Chaumet.",
                  "她曾於加拿大百年珠寶品牌 Maison Birks 任職高端品牌顧問，並擔任 Van Cleef & Arpels 梵克雅寶、Graff 格拉夫及 Maison Birks 品牌大使，期間連續七屆榮獲「North America Million Dollar Writer」百萬銷售殊榮。其後亦於 BVLGARI、Cartier、Montblanc、Tiffany & Co. 與 Chaumet 等國際頂級珠寶品牌體系中累積深厚的高端客戶管理與珠寶鑑賞經驗。"
                )}
              </p>
              <p>
                {t(
                  "After returning to the family enterprise, Emily established HH Nexus Capital as a broader group structure and expanded multiple platforms including Hsin Hsin Events & PR and La Petite Elli Coffee & Tea. Her work has focused on connecting craftsmanship heritage, cultural programming, healthy lifestyle products, and modern brand development into a more contemporary and digitally capable ecosystem.",
                  "回歸家族企業後，她整合成立衡寰國際資本（HH Nexus Capital），並拓展多元品牌平台，包括 Hsin Hsin Events & PR（欣欣向榮活動策劃公關公司）與生活方式品牌 La Petite Elli Coffee & Tea，致力於結合文化創意、城市活動與健康生活產業，推動企業品牌年輕化與數位化發展。"
                )}
              </p>
              <p>
                {t(
                  "Emily is also deeply committed to philanthropy and public service. As a Fundraising Chair for the Canadian Liver Foundation, she helped raise over CAD $2 million for liver disease and hepatitis research. In recognition of her contributions to community and cultural initiatives, she received the Outstanding Woman of Vancouver Award in 2023.",
                  "Emily Lin 同時積極投入社會公益，曾擔任加拿大肝臟基金會募款主席，成功募得超過兩百萬加元作為肝臟疾病研究基金。她亦長期支持文化與社區公益活動，並於 2023 年獲頒「溫哥華傑出女士」榮譽獎項。"
                )}
              </p>
            </div>
          </div>

          {/* Current Roles */}
          <div className="mb-16">
            <h3 className="font-display text-xl text-foreground mb-6">
              {t("Current Positions", "現任職務")}
            </h3>
            <ul className="space-y-3">
              {roles.map((role, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  {t(role.en, role.zh)}
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-display text-xl text-foreground mb-6">
              {t("Selected Achievements", "精選成就")}
            </h3>
            <div className="space-y-6 border-l-2 border-border pl-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[2.55rem] top-1 w-3 h-3 rounded-full bg-accent" />
                  {m.year && (
                    <p className="text-accent text-xs uppercase tracking-widest font-medium mb-1">{m.year}</p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(m.en, m.zh)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-12 flex flex-wrap gap-6">
            <Link to="/community" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
              {t("Explore Community & Culture", "探索文化社區")} <ArrowRight size={14} />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
              {t("About HSIN HSIN", "關於欣欣")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Founder;
