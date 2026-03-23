import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";

import imgCraftsmanship from "@/assets/insight-craftsmanship.jpg";
import imgHeritage from "@/assets/insight-heritage.jpg";
import imgCulture from "@/assets/insight-culture.jpg";
import imgLifestyle from "@/assets/insight-lifestyle.jpg";
import imgBranding from "@/assets/insight-branding.jpg";

const articles = [
  {
    titleEn: "The Role of Craftsmanship in Modern Creative Industries",
    titleZh: "工藝在現代創意產業中的角色",
    metaDesc: "Explore how traditional craftsmanship continues to shape modern creative industries through material knowledge, aesthetic precision, and heritage preservation.",
    contentEn: "In an era of mass production and disposable goods, craftsmanship represents something more enduring. It is the convergence of material knowledge, practiced skill, and aesthetic sensitivity. For families and businesses rooted in craft traditions, the challenge lies in preserving these qualities while adapting to contemporary expectations. Quality framing, hand-finished details, and conservation-minded presentation are not relics of the past — they are increasingly sought by collectors, designers, and institutions that understand the irreplaceable value of the handmade touch.",
    contentZh: "在大規模生產和一次性商品的時代，工藝代表著更持久的事物。它是材料知識、實踐技能和美學敏感度的匯聚。對於植根於工藝傳統的家庭和企業，挑戰在於在適應當代期望的同時保存這些品質。優質裱框、手工精加工細節和保護性展示不是過去的遺物——它們越來越受到理解手工觸感不可替代價值的收藏家、設計師和機構的追捧。",
    category: "Craftsmanship",
    image: imgCraftsmanship,
    altEn: "Artisan hands performing detailed craftsmanship work",
    altZh: "工匠雙手進行精細工藝工作",
    linkTo: "/about",
    linkText: "Learn about our heritage",
    linkTextZh: "了解我們的傳承",
  },
  {
    titleEn: "Why Family Enterprises Create Long-Term Cultural Value",
    titleZh: "為什麼家族企業能創造長期文化價值",
    metaDesc: "Discover why heritage family businesses like HSIN HSIN create lasting cultural and community value through patient brand building and genuine engagement.",
    contentEn: "Heritage businesses carry a perspective that younger companies rarely possess — a deep understanding of cycles, a commitment to relationships over transactions, and a willingness to invest in quality even when short-term returns are uncertain. In a family enterprise context, this long-term orientation becomes a strategic advantage. It allows for patient brand building, careful market positioning, and the kind of trust that only develops over years of consistent service and genuine community engagement.",
    contentZh: "傳統企業擁有年輕公司很少具備的視角——對週期的深刻理解、對關係而非交易的承諾，以及即使短期回報不確定時也願意投資於品質。在家族企業的背景下，這種長期導向成為一種策略優勢。它允許耐心的品牌建設、謹慎的市場定位，以及只有通過多年持續服務和真誠社區參與才能發展的信任。",
    category: "Enterprise",
    image: imgHeritage,
    altEn: "Heritage business building representing long-term enterprise value",
    altZh: "代表長期企業價值的傳統商業建築",
    linkTo: "/founder",
    linkText: "Read the Lin Family story",
    linkTextZh: "閱讀林氏家族故事",
  },
  {
    titleEn: "Art Education and Community Development",
    titleZh: "藝術教育與社區發展",
    metaDesc: "How investing in art education, cultural programming, and community events builds resilient businesses and strengthens local communities.",
    contentEn: "The most resilient businesses are those that contribute more than products or services — they contribute to the cultural and social fabric of their communities. By investing in art education, cultural programming, and community-building events, enterprises create relationships that sustain them across economic cycles. These investments may not show immediate financial returns, but they build the kind of goodwill, loyalty, and brand equity that compound over generations.",
    contentZh: "最具韌性的企業是那些不僅提供產品或服務，還為社區的文化和社會結構做出貢獻的企業。通過投資藝術教育、文化項目和社區建設活動，企業創建跨越經濟週期的關係。這些投資可能不會顯示即時的財務回報，但它們建立的善意、忠誠度和品牌資產會隨著世代而增長。",
    category: "Community",
    image: imgCulture,
    altEn: "Community art education workshop with students learning creative techniques",
    altZh: "社區藝術教育工作坊，學生學習創意技術",
    linkTo: "/community",
    linkText: "Explore our community initiatives",
    linkTextZh: "探索我們的社區計畫",
  },
  {
    titleEn: "Brand Design and Cultural Storytelling",
    titleZh: "品牌設計與文化敘事",
    metaDesc: "Learn how lifestyle brands that authentically communicate values around quality, health, and responsibility build deeper customer communities.",
    contentEn: "Today's consumers are increasingly drawn to brands whose values align with their own. A carefully sourced cup of specialty coffee, a thoughtfully curated wellness tea, or a sustainably harvested mushroom product — each reflects a deeper set of choices about quality, health, and environmental responsibility. Lifestyle brands that communicate these values authentically build communities around shared beliefs, creating a deeper connection between product and purpose.",
    contentZh: "當今消費者越來越被與自身價值觀一致的品牌所吸引。一杯精心採購的精品咖啡、一款用心策劃的養生茶，或一份可持續採收的菇類產品——每一項都反映了對品質、健康和環境責任的更深層選擇。真誠傳達這些價值的生活方式品牌會圍繞共同信念建立社區，在產品與目的之間創造更深層的連結。",
    category: "Lifestyle",
    image: imgLifestyle,
    altEn: "Curated lifestyle products reflecting brand values and cultural storytelling",
    altZh: "精選生活產品反映品牌價值與文化敘事",
    linkTo: "/companies",
    linkText: "View our companies",
    linkTextZh: "查看旗下企業",
  },
  {
    titleEn: "Lifestyle Brands and Creative Entrepreneurship",
    titleZh: "生活品牌與創意創業",
    metaDesc: "How integrated branding strategy connects visual identity, digital presence, and storytelling to unify diverse family enterprise businesses.",
    contentEn: "As family enterprises evolve, so too must their approach to brand identity. An integrated branding strategy — one that connects visual identity, digital presence, event experiences, and storytelling — can unify diverse business units under a coherent group narrative. For multi-division family groups, this means each subsidiary carries its own identity while contributing to a larger, recognizable brand ecosystem. The result is a structure that is both flexible and cohesive, modern and heritage-connected.",
    contentZh: "隨著家族企業的發展，其品牌識別方法也必須與時俱進。整合品牌策略——將視覺識別、數位存在、活動體驗和故事敘述連結起來——可以在一個連貫的集團敘事下統一多元化的事業單位。對於多事業部的家族集團，這意味著每個子公司在保有自身識別的同時，也為更大的、可辨識的品牌生態系統做出貢獻。結果是一個既靈活又具凝聚力、既現代又與傳承相連的結構。",
    category: "Branding",
    image: imgBranding,
    altEn: "Modern brand identity design and creative entrepreneurship strategy",
    altZh: "現代品牌識別設計與創意創業策略",
    linkTo: "/about",
    linkText: "About HSIN HSIN",
    linkTextZh: "關於欣欣",
  },
];

const Insights = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO
        title="Insights | Craftsmanship, Culture and Creative Enterprise"
        description="Read insights on craftsmanship, culture, art education, brand design, and creative entrepreneurship from HSIN HSIN, a Vancouver-based family enterprise group."
        path="/insights"
      />

      <PageHero
        title={t("Insights", "觀點")}
        subtitle={t("Perspectives on craft, culture, and enterprise", "關於工藝、文化和企業的觀點")}
      />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-4xl space-y-16">
          {articles.map((article, i) => (
            <article key={i} className="border-b border-border pb-12 last:border-0">
              <div className="rounded-lg overflow-hidden mb-6 shadow-md">
                <img
                  src={article.image}
                  alt={t(article.altEn, article.altZh)}
                  className="w-full h-[280px] md:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-accent text-xs uppercase tracking-widest font-medium mb-2">{article.category}</p>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                {t(article.titleEn, article.titleZh)}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(article.contentEn, article.contentZh)}
              </p>
              <Link to={article.linkTo} className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
                {t(article.linkText, article.linkTextZh)} <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
