import { motion } from "framer-motion";
import { Heart, Users, Sparkles, Shield, Fingerprint } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Relationship & Emotional Well-being",
    description:
      "Relationship challenges and recurring dynamics, healing from past traumatic experiences, boundaries, communication, anxiety, depression, and managing emotional reactivity.",
  },
  {
    icon: Sparkles,
    title: "Life Transitions & Personal Growth",
    description:
      "Life and career transitions, college students and young adults navigating independence and self-discovery, and support for self-esteem and self-confidence.",
  },
  {
    icon: Shield,
    title: "Alcohol & Substance Use",
    description:
      "Exploring your relationship with alcohol or substances, clarifying whether current use fits your goals and values, and supporting harm reduction, reduced use, or sobriety.",
  },
  {
    icon: Fingerprint,
    title: "Identity & Marginalization",
    description:
      "Support for LGBTQIAA+ individuals and those navigating marginalization related to race, gender, sexuality, size, and ability in a safe, affirming space.",
  },
];

const ServicesSection = () => {
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
          <p className="text-muted-foreground max-w-xl mx-auto">
            Many of these concerns are connected, and counseling can provide space to
            explore how they show up in your life, relationships, and sense of self.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
