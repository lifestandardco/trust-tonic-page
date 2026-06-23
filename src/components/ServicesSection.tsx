import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Fingerprint, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Heart,
    title: "Trauma, Relationship & Emotional Well-being",
    description:
      "Navigate patterns in relationships, strengthen boundaries, and process experiences of trauma and emotional reactivity for healthier connections.",
    details: [
      "Past trauma showing up in current emotions and relationships",
      "Angry outbursts and emotional reactivity that feels overwhelming",
      "Difficulty asserting needs or saying no",
      "Feeling stuck in repeated relationship cycles",
    ],
  },
  {
    icon: Sparkles,
    title: "Life Transitions & Personal Growth",
    description:
      "Specialized support for college students and young adults navigating independence, career changes, and self-discovery.",
    details: [
      "Feeling overwhelmed or experiencing self-doubt during life transitions",
      "Struggling with decision-making or adjusting to independence",
      "Navigating college, grad school, early career stress, or career exploration",
      "Questioning your direction, identity, or next steps",
    ],
  },
  {
    icon: Shield,
    title: "Alcohol & Substance Use",
    description:
      "Explore your relationship with alcohol and substances through a harm-reduction lens, aligning choices with your goals and values.",
    details: [
      "Wanting to cut back, take breaks, or explore moderation",
      "Noticing substance use tied to stress, anxiety, emotions, or life transitions",
      "Exploring sobriety with support that meets you where you are",
    ],
  },
  {
    icon: Fingerprint,
    title: "Identity & Marginalization",
    description:
      "A safe space to explore LGBTQIAA+ identities and the impacts of systemic oppression related to race, gender, and ability.",
    details: [
      "Processing identity-based stress, discrimination, or feeling misunderstood",
      "Coming out, being out, or navigating disclosure with friends and family",
      "Exploring family of origin, cultural norms, and identity as a whole",
    ],
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-sage-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            How I Can Help
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            Areas of Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            const detailId = `service-detail-${i}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative min-h-[25rem] rounded-2xl bg-card shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Front face */}
                <div className="flex h-full flex-col p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={detailId}
                    className="group/btn mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary self-start rounded-sm transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                    Common experiences
                    <Plus
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-90 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Reveal panel — fades over the card, no layout shift */}
                <div
                  id={detailId}
                  role="region"
                  aria-label={`${service.title} — more information`}
                  className={cn(
                    "absolute inset-0 flex flex-col rounded-2xl bg-card p-8 shadow-md ring-1 ring-primary/10",
                    "opacity-0 translate-y-2 pointer-events-none transition-all duration-300 ease-out",
                    "motion-reduce:transition-none motion-reduce:translate-y-0",
                    isOpen && "opacity-100 translate-y-0 pointer-events-auto"
                  )}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-display font-semibold leading-tight">
                      {service.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(null)}
                      aria-label={`Close ${service.title} details`}
                      className="ml-auto -mr-2 -mt-2 p-2 shrink-0 rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Common experiences
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80 leading-snug overflow-y-auto">
                    {service.details.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
