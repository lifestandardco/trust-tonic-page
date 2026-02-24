import { motion } from "framer-motion";
import { Heart, Brain, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Anxiety & Depression",
    description:
      "Evidence-based techniques to help you manage overwhelming thoughts and feelings, and rediscover joy in daily life.",
  },
  {
    icon: Heart,
    title: "Relationship Counseling",
    description:
      "Build healthier communication patterns, heal from past wounds, and create deeper connections with those who matter most.",
  },
  {
    icon: Sparkles,
    title: "Trauma & EMDR",
    description:
      "Safely process traumatic experiences using EMDR and other proven approaches to help you find relief and resilience.",
  },
  {
    icon: Users,
    title: "Life Transitions",
    description:
      "Navigate career changes, loss, parenthood, or other pivotal moments with support, clarity, and confidence.",
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
            Every person's journey is unique. I offer personalized support across a
            range of specialties.
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
