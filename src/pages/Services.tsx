import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Phone, Armchair, Users, ShieldCheck, Info, type LucideIcon } from "lucide-react";
import { useSanityContent } from "@/lib/useSanityContent";

const ICONS: Record<string, LucideIcon> = {
  phone: Phone,
  armchair: Armchair,
  users: Users,
};

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  price: string;
};

type ServicesContent = {
  eyebrow: string;
  services: ServiceItem[];
  insuranceHeading: string;
  inNetworkHeading: string;
  inNetwork: string[];
  billingHeading: string;
  billingText: string;
  goodFaithHeading: string;
  goodFaithText: string;
  ctaHeading: string;
  ctaButtonLabel: string;
};

const FALLBACK: ServicesContent = {
  eyebrow: "Services & Rates",
  services: [
    {
      icon: "phone",
      title: "Free Consultation",
      description:
        "Finding the right therapist is an important part of counseling. I offer a free 15-20 minute phone consultation to explore your needs and determine if we are the right fit.",
      price: "15-20 mins | Free",
    },
    {
      icon: "armchair",
      title: "Individual Therapy",
      description:
        "Offered both in-person and virtually. I accept private pay and am an in-network provider for several major insurance plans.",
      price: "50 mins | $160*",
    },
    {
      icon: "users",
      title: "Group Therapy",
      description:
        "I have run a variety of groups including: Alcohol and Drug Support Groups, LGBTQIA+ Support Groups, DBT Skills Group and Interpersonal Process groups.",
      price: "90 mins | TBD",
    },
  ],
  insuranceHeading: "Insurance & Billing",
  inNetworkHeading: "In-Network With",
  inNetwork: [
    "United",
    "UMR",
    "Optum & Optum EAP",
    "Aetna",
    "Meritain",
    "Oscar",
    "Anthem Blue Cross Blue Shield",
    "Kaiser via Carelon",
  ],
  billingHeading: "Billing Details",
  billingText:
    "Private pay is accepted at a rate of $160 per session. For out-of-network providers, I am happy to provide a superbill for you to submit for potential reimbursement.",
  goodFaithHeading: "Good Faith Estimate",
  goodFaithText:
    'Under the "No Surprises Act," you have the right to receive a "Good Faith Estimate" explaining how much your medical care will cost. This applies to patients who do not have insurance or are not using insurance. For questions or more information, please visit www.cms.gov/nosurprises.',
  ctaHeading: "Ready to get started?",
  ctaButtonLabel: "Schedule a consultation",
};

const QUERY = `*[_type == "servicesPage"][0]{
  eyebrow,
  services[]{ icon, title, description, price },
  insuranceHeading,
  inNetworkHeading,
  inNetwork,
  billingHeading,
  billingText,
  goodFaithHeading,
  goodFaithText,
  ctaHeading,
  ctaButtonLabel
}`;

const Services = () => {
  const navigate = useNavigate();
  const content = useSanityContent("servicesPage", QUERY, FALLBACK);

  const scrollToContact = () => {
    // Navigate home and let Index.tsx smooth-scroll to the contact form
    // once it has rendered (matches the NavBar pattern).
    navigate("/", { state: { scrollTo: "#contact" } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Services & Rates | Britney Worley Counseling — Fort Collins Therapist"
        description="Free consultation, individual therapy, and group therapy in Fort Collins and online across Colorado. In-network with United, Aetna, Optum, Kaiser, and more. See rates, insurance, and billing details."
        path="/services"
      />
      <NavBar />

      <main className="pt-20">
        {/* Header Section - Uses Sage Light like your Services Section */}
        <section className="py-24 bg-sage-light">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {content.eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
                Get support for your <span className="italic">mental healthcare</span> needs.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Services Detail Grid - Matching the grid-gap of your home page */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16">
              {content.services.map((service, i) => {
                const Icon = ICONS[service.icon] ?? Phone;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-medium">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <p className="text-lg font-display font-semibold text-primary">{service.price}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Insurance & Rates - Clean, Tag-based formatting */}
        <section className="py-24 bg-sage-light">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <ShieldCheck className="text-primary w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-display font-medium">
                  {content.insuranceHeading}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-16 mb-16">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-semibold">
                    {content.inNetworkHeading}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {content.inNetwork.map((ins) => (
                      <span
                        key={ins}
                        className="px-5 py-2.5 bg-background rounded-full border border-border text-sm font-medium shadow-sm"
                      >
                        {ins}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-semibold">
                    {content.billingHeading}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{content.billingText}</p>
                </div>
              </div>

              {/* Good Faith Estimate - Standardized with your UI components */}
              <div className="p-10 border border-border rounded-3xl bg-background/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <Info className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div className="space-y-3">
                    <h5 className="font-display font-medium text-lg text-foreground">
                      {content.goodFaithHeading}
                    </h5>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      {content.goodFaithText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">
              {content.ctaHeading}
            </h2>
            <Button size="lg" className="px-12 py-8 text-lg rounded-full" onClick={scrollToContact}>
              {content.ctaButtonLabel}
            </Button>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Services;
