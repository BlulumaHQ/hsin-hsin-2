import { Helmet } from "react-helmet-async";

const SITE_URL = "https://hsinhsin.lovable.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HSIN HSIN Family Enterprise",
  alternateName: "HSIN HSIN",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "HSIN HSIN is a Vancouver-based family enterprise connecting craftsmanship, art education, cultural events, lifestyle brands, and digital design through a multi-generational business ecosystem.",
  foundingDate: "1995",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
  },
  founder: {
    "@type": "Person",
    name: "The Lin Family",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HSIN HSIN Family Enterprise",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Vancouver-based family enterprise group spanning craftsmanship, art education, cultural events, lifestyle brands, and digital design.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  email: "info@hsinhsin.ca",
};

const StructuredData = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
  </Helmet>
);

export default StructuredData;
