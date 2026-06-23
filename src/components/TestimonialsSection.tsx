import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "After working alongside Britney for several years I can confidently say she is one of the most skilled and talented clinicians I have ever worked with. She is funny, kind and knowledgeable. Her clients are lucky to have her as their counselor.",
    name: "Jessie Charbonneau, LPC, LAC",
  },
  {
    quote:
      "I worked alongside Britney for years and she is incredibly kind, warm, and funny. She is a skilled clinician who provides compassion and support with just the right blend of humor. Highly recommend if you need skillful support in growing toward your goals!",
    name: "Dr. Jeff Paulez, PhD",
  },
  {
    quote:
      "Britney is a compassionate, knowledgeable and helpful therapist. She is able to connect through kindness and a sense of humor to form meaningful relationships with her clients. I recommend her for anyone who is ready to create change in a safe environment!",
    name: "Jesselyn DeFilippo, LPC",
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
            What My Colleagues Say
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
