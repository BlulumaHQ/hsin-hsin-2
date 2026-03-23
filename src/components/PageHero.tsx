import heroImg from "@/assets/hero-slide-1.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="HSIN HSIN family enterprise branding and event design"
        className="absolute inset-0 w-full h-full object-cover object-[center_70%]"
      />
      <div className="absolute inset-0 page-overlay" />
      <div className="relative z-10 text-center px-4 py-20 md:py-28">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
