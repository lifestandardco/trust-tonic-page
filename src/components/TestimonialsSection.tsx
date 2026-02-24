import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dr. Mitchell helped me find my way back to myself. After years of struggling with anxiety, I finally feel like I can breathe again.",
    name: "Emily R.",
    detail: "Client for 2 years",
  },
  {
    quote:
      "I was hesitant to start therapy, but Sarah made me feel safe from the very first session. She's changed my life in ways I didn't think possible.",
    name: "Michael T.",
    detail: "Client for 1 year",
  },
  {
    quote:
      "Her warmth and expertise are unmatched. I've recommended her to friends and family — she truly listens and cares.",
    name: "Jessica L.",
    detail: "Client for 3 years",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Kind Words
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium">
            What My Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-terracotta text-terracotta" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
