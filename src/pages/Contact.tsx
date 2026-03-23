import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { Mail, MapPin, ArrowRight, Loader2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mwvrklpb";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "HSIN HSIN Website Inquiry",
          _source: "HSIN HSIN Contact Page",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full border border-border rounded px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent";
  const labelClass = "text-xs uppercase tracking-widest text-accent font-medium block mb-1.5";

  return (
    <Layout>
      <SEO
        title="Contact HSIN HSIN | Vancouver Family Enterprise"
        description="Get in touch with HSIN HSIN Family Enterprise in Vancouver, Canada. Reach out for general inquiries, partnership opportunities, or brand collaboration."
        path="/contact"
      />

      <PageHero title={t("Contact HSIN HSIN", "聯繫欣欣")} />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-6">
                HSIN HSIN Family Enterprise
              </h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-accent mt-0.5" />
                  <span>Vancouver, BC, Canada</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Mail size={18} className="text-accent mt-0.5" />
                  <a href="mailto:info@hsinhsin.ca" className="hover:text-accent transition-colors">info@hsinhsin.ca</a>
                </div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground mb-8">
                <p>{t("General inquiries", "一般諮詢")}</p>
                <p>{t("Partnership inquiries", "合作諮詢")}</p>
                <p>{t("Brand collaboration inquiries", "品牌合作諮詢")}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
                  {t("About HSIN HSIN", "關於欣欣")} <ArrowRight size={14} />
                </Link>
                <Link to="/companies" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
                  {t("Our Companies", "旗下企業")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              {status === "success" ? (
                <div className="bg-secondary rounded-lg p-8 text-center">
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {t(
                      "Thank you for your message.",
                      "感謝您的來信。"
                    )}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "Your inquiry has been sent successfully. We will get back to you soon.",
                      "您的訊息已成功送出，我們將盡快與您聯絡。"
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <div>
                    <label htmlFor="contact-name" className={labelClass}>{t("Name", "姓名")} *</label>
                    <input id="contact-name" name="name" type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>{t("Email", "電子郵件")} *</label>
                    <input id="contact-email" name="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>{t("Phone", "電話")}</label>
                    <input id="contact-phone" name="phone" type="tel" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className={labelClass}>{t("Company / Organization", "公司／組織")}</label>
                    <input id="contact-company" name="company" type="text" maxLength={150} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className={labelClass}>{t("Subject", "主旨")}</label>
                    <input id="contact-subject" name="subject" type="text" maxLength={200} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className={labelClass}>{t("Message", "訊息")} *</label>
                    <textarea id="contact-message" name="message" required rows={5} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                  </div>

                  {status === "error" && (
                    <p className="text-destructive text-sm">
                      {t("Something went wrong. Please try again later.", "發生錯誤，請稍後再試。")}
                    </p>
                  )}

                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full text-center inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === "sending" ? (
                      <><Loader2 size={16} className="animate-spin" /> {t("Sending...", "發送中...")}</>
                    ) : (
                      t("Send Message", "發送訊息")
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
