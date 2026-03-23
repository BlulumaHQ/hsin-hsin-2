import logoHsinFraming from "@/assets/logo-hsin-framing.svg";
import logoCambridgeArt from "@/assets/logo-cambridge-art.svg";
import logoHsinPr from "@/assets/logo-hsin-pr.png";
import logoLaPetiteElli from "@/assets/logo-la-petite-elli.png";
import logoBluluma from "@/assets/logo-bluluma.svg";

export interface Company {
  id: string;
  nameEn: string;
  nameZh: string;
  taglineEn: string;
  taglineZh: string;
  descEn: string;
  descZh: string;
  categoryEn: string;
  categoryZh: string;
  industryEn: string;
  industryZh: string;
  location: string;
  overviewEn: string;
  overviewZh: string;
  detailEn: string[];
  detailZh: string[];
  servicesEn: string[];
  servicesZh: string[];
  logo: string;
  external?: string;
}

export const companies: Company[] = [
  {
    id: "hsin-framing",
    nameEn: "Hsin Framing & Moulding",
    nameZh: "欣欣畫框",
    taglineEn: "Taste in Life, Mastery in Craft",
    taglineZh: "品味生活，精湛工藝",
    descEn: "A Vancouver-based craftsmanship studio specializing in museum-quality framing and art presentation.",
    descZh: "一家位於溫哥華的工藝工作室，專注於博物館級裱框與藝術展示。",
    categoryEn: "Craftsmanship",
    categoryZh: "工藝",
    industryEn: "Art Craftsmanship / Manufacturing",
    industryZh: "藝術工藝 / 製造",
    location: "Vancouver, Canada",
    overviewEn: "Hsin Framing & Moulding is the group's foundational craftsmanship business and one of the most established names within the HSIN HSIN family enterprise. Based in Vancouver since 1995, the company specializes in premium mouldings, custom framing, mirrors, and art presentation services for collectors, designers, galleries, and private clients.",
    overviewZh: "欣欣畫框是集團的基礎工藝事業，也是欣欣家族企業中最具歷史的品牌之一。自 1995 年起在溫哥華經營，公司專注於優質線條、定制裱框、鏡框及藝術展示服務，服務收藏家、設計師、畫廊及私人客戶。",
    detailEn: [
      "Built on a heritage of traditional craftsmanship and refined aesthetic judgment, Hsin Framing & Moulding brings together material expertise, precision workmanship, and presentation sensitivity. Its services range from custom framing for fine art and collectible objects to mirror framing, wall art consultation, conservation-minded mounting, and premium moulding supply.",
      "The company's deep roots in both manufacturing knowledge and artistic presentation have made it a trusted partner for those seeking quality, elegance, and technical care. Whether serving residential collectors, commercial interiors, hospitality projects, or exhibition-related needs, Hsin Framing & Moulding reflects the group's enduring commitment to craftsmanship, beauty, and long-term value.",
    ],
    detailZh: [
      "以傳統工藝傳承與精緻美學判斷為基礎，欣欣畫框結合了材料專業、精密工藝與展示敏感度。其服務涵蓋藝術品與收藏品的定制裱框、鏡框製作、牆面藝術諮詢、保護性裝裱及優質線條供應。",
      "公司在製造知識與藝術展示方面的深厚底蘊，使其成為追求品質、優雅與技術關懷的客戶的信賴夥伴。無論是服務住宅收藏家、商業室內設計、酒店項目還是展覽需求，欣欣畫框都體現了集團對工藝、美學與長期價值的持久承諾。",
    ],
    servicesEn: [
      "Custom framing",
      "Museum-quality acid-free framing",
      "Mirror framing",
      "Interior wall art consultation",
      "Premium moulding supply",
      "Custom decorative trim and finishing details",
      "Art presentation for collectors and designers",
    ],
    servicesZh: [
      "定制裱框",
      "博物館級無酸裱框",
      "鏡框製作",
      "室內牆面藝術諮詢",
      "優質線條供應",
      "定制裝飾修邊與精加工細節",
      "為收藏家和設計師提供藝術展示",
    ],
    logo: logoHsinFraming,
  },
  {
    id: "cambridge-art",
    nameEn: "Cambridge Art Center",
    nameZh: "劍橋藝術中心",
    taglineEn: "Preserving Heritage, Inspiring Creativity",
    taglineZh: "傳承文化，啟發創意",
    descEn: "An educational platform dedicated to metal arts, craftsmanship training, and creative development.",
    descZh: "一個專注於金屬藝術、工藝培訓及創意發展的教育平台。",
    categoryEn: "Culture",
    categoryZh: "文化",
    industryEn: "Art Education",
    industryZh: "藝術教育",
    location: "Vancouver, Canada",
    overviewEn: "Cambridge Art Center is the group's cultural education platform, dedicated to creative development, artistic mentorship, and the transmission of craftsmanship traditions to new generations.",
    overviewZh: "劍橋藝術中心是集團的文化教育平台，致力於創意發展、藝術指導及工藝傳統的世代傳承。",
    detailEn: [
      "Cambridge Art Center offers a learning environment where technique, artistic sensitivity, and cultural heritage are brought together through hands-on practice. The center supports students, emerging artists, and creative learners through programs in metal arts, craftsmanship, artistic development, portfolio building, and educational planning.",
      "Beyond technical training, the center plays a broader cultural role by encouraging confidence, discipline, and creative exploration. Through workshops, mentorship, and exhibition-oriented guidance, Cambridge Art Center helps preserve artistic traditions while opening new pathways for personal growth and contemporary expression.",
    ],
    detailZh: [
      "劍橋藝術中心提供一個學習環境，透過實踐操作將技術、藝術敏感度與文化遺產融為一體。中心透過金屬藝術、工藝、藝術發展、作品集建構和教育規劃等課程，支持學生、新興藝術家和創意學習者。",
      "除了技術培訓，中心還扮演更廣泛的文化角色，鼓勵自信、紀律和創意探索。透過工作坊、指導和展覽導向的輔導，劍橋藝術中心在保存藝術傳統的同時，為個人成長和當代表達開拓新途徑。",
    ],
    servicesEn: [
      "Metal arts workshops",
      "Creative craftsmanship training",
      "Portfolio development",
      "Academic planning for arts education",
      "Overseas exhibition guidance",
      "Cultural education programs",
      "Artist mentorship",
    ],
    servicesZh: [
      "金屬藝術工作坊",
      "創意工藝培訓",
      "作品集發展",
      "藝術教育學術規劃",
      "海外展覽指導",
      "文化教育課程",
      "藝術家指導",
    ],
    logo: logoCambridgeArt,
  },
  {
    id: "hsin-events",
    nameEn: "Hsin Hsin Events & PR",
    nameZh: "欣欣向榮活動策劃公關公司",
    taglineEn: "Integrated Creativity, Amplified Branding",
    taglineZh: "整合創意，擴大品牌影響力",
    descEn: "A cultural event planning and brand communications platform specializing in public relations, corporate events, and cultural programming.",
    descZh: "一個文化活動策劃與品牌傳播平台，專注於公共關係、企業活動及文化項目。",
    categoryEn: "Creative",
    categoryZh: "創意",
    industryEn: "Public Relations & Events",
    industryZh: "公共關係與活動",
    location: "Vancouver, Canada",
    overviewEn: "Hsin Hsin Events & PR is the group's brand communications and event planning division, specializing in integrated campaigns, event production, media coordination, and public-facing brand experiences.",
    overviewZh: "欣欣向榮活動策劃公關公司是集團的品牌傳播與活動策劃部門，專注於整合行銷活動、活動製作、媒體協調及面向公眾的品牌體驗。",
    detailEn: [
      "The company provides end-to-end support for organizations seeking to create polished, memorable, and strategically aligned events. Its capabilities include event planning, timeline and guest flow management, budget coordination, media relations, public relations support, design coordination, digital marketing assistance, and brand storytelling.",
      "With a cross-disciplinary mindset, Hsin Hsin Events & PR also supports cultural programming, venue-based events, lecture coordination, art-related activations, and identity-building experiences for brands and organizations. The result is a service model that combines structure, visibility, and creative impact.",
    ],
    detailZh: [
      "公司為希望創建精緻、令人難忘且策略一致的活動的組織提供端到端支援。其能力包括活動策劃、時間表與賓客流程管理、預算協調、媒體關係、公關支援、設計協調、數位行銷協助及品牌故事敘述。",
      "以跨領域思維，欣欣向榮活動策劃公關公司也支援文化項目、場地活動、講座協調、藝術相關活動及為品牌和組織打造身份認同的體驗。最終形成一個結合結構、曝光度和創意影響力的服務模式。",
    ],
    servicesEn: [
      "Event planning and execution",
      "Brand strategy and marketing planning",
      "Media relations and press materials",
      "Guest reception and event flow management",
      "Graphic design support",
      "Corporate website coordination",
      "Digital marketing and social media support",
      "Cultural programming and exhibition support",
      "Venue and lecture event coordination",
    ],
    servicesZh: [
      "活動策劃與執行",
      "品牌策略與行銷規劃",
      "媒體關係與新聞稿",
      "賓客接待與活動流程管理",
      "平面設計支援",
      "企業網站協調",
      "數位行銷與社群媒體支援",
      "文化項目與展覽支援",
      "場地與講座活動協調",
    ],
    logo: logoHsinPr,
  },
  {
    id: "la-petite-elli",
    nameEn: "La Petite Elli Coffee & Tea",
    nameZh: "La Petite Elli 咖啡與茶",
    taglineEn: "Where Nature Meets Everyday Wellness",
    taglineZh: "自然與日常健康的交匯",
    descEn: "A boutique lifestyle brand focused on organic herbal teas, specialty coffee, and curated wellness products.",
    descZh: "一個精品生活品牌，專注於有機草本茶、精品咖啡及精選健康產品。",
    categoryEn: "Lifestyle",
    categoryZh: "生活",
    industryEn: "Lifestyle & Wellness Retail",
    industryZh: "生活方式與健康零售",
    location: "Vancouver, Canada",
    overviewEn: "La Petite Elli Coffee & Tea is the group's lifestyle and wellness brand, built around specialty coffee, handcrafted herbal teas, premium mushrooms, dried goods, and a thoughtful approach to daily nourishment.",
    overviewZh: "La Petite Elli 咖啡與茶是集團的生活方式與健康品牌，圍繞精品咖啡、手工草本茶、優質菇類、乾燥食品及對日常營養的用心態度而建立。",
    detailEn: [
      "La Petite Elli brings together taste, wellness, and local sourcing through a curated collection of products designed to support both enjoyment and everyday balance. The brand offers specialty coffee, dried mushroom products, herbal wellness teas, and carefully selected ingredients that reflect a slower, more intentional way of living.",
      "Inspired by handcrafted quality and community-rooted values, La Petite Elli emphasizes freshness, trust, and sensory experience. From organic mushrooms and wellness blends to medium-roast coffee developed in collaboration with local roasting partners, the brand reflects the group's broader belief that lifestyle choices can be both beautiful and responsible.",
    ],
    detailZh: [
      "La Petite Elli 透過精心策劃的產品系列，將品味、健康和在地採購融為一體，旨在支持享受與日常平衡。品牌提供精品咖啡、乾燥菇類產品、草本養生茶及精心挑選的食材，反映一種更慢、更有意識的生活方式。",
      "受手工品質和社區紮根價值觀的啟發，La Petite Elli 強調新鮮、信任和感官體驗。從有機菇類和養生混合茶到與在地烘焙夥伴合作開發的中度烘焙咖啡，品牌反映了集團更廣泛的信念：生活方式的選擇可以同時是美麗且負責任的。",
    ],
    servicesEn: [
      "Specialty coffee",
      "Herbal wellness tea blends",
      "Premium dried mushrooms",
      "Organic ingredient retail",
      "Lifestyle gift items",
      "Curated seasonal products",
      "Community-based retail experiences",
    ],
    servicesZh: [
      "精品咖啡",
      "草本養生茶",
      "優質乾燥菇類",
      "有機食材零售",
      "生活方式禮品",
      "季節精選產品",
      "社區零售體驗",
    ],
    logo: logoLaPetiteElli,
  },
  {
    id: "bluluma",
    nameEn: "Bluluma Design",
    nameZh: "Bluluma Design",
    taglineEn: "Design with Strategy",
    taglineZh: "策略性設計",
    descEn: "A digital design studio focused on brand identity, website design, and digital storytelling.",
    descZh: "一家專注於品牌識別、網站設計和數位故事敘述的數位設計工作室。",
    categoryEn: "Digital",
    categoryZh: "數位",
    industryEn: "Brand Strategy & Digital Design",
    industryZh: "品牌策略與數位設計",
    location: "",
    overviewEn: "Bluluma Design is the group's digital and brand development studio, offering strategic identity design, website design, and visual storytelling services for modern businesses.",
    overviewZh: "Bluluma Design 是集團的數位與品牌發展工作室，為現代企業提供策略性品牌識別設計、網站設計及視覺故事敘述服務。",
    detailEn: [
      "Bluluma Design is a creative studio specializing in brand identity, website design, and digital storytelling.",
      "The studio partners with modern businesses to develop strong brand systems and engaging digital platforms.",
    ],
    detailZh: [
      "Bluluma Design 是一家專注於品牌識別、網站設計和數位故事敘述的創意工作室。",
      "工作室與現代企業合作，開發強大的品牌系統和引人入勝的數位平台。",
    ],
    servicesEn: [],
    servicesZh: [],
    logo: logoBluluma,
    external: "https://bluluma.com",
  },
];
