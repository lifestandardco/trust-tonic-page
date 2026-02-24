import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-therapy.webp";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Warm, welcoming therapy office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-body text-sm uppercase tracking-[0.2em] text-cream/80 mb-4"
          >
            Licensed Professional Counselor
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-cream leading-tight mb-6"
          >
            A safe, conversational space to{" "}
            <span className="italic">heal, grow,</span>{" "}
            and connect.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-cream/85 mb-10 max-w-lg leading-relaxed"
          >
            Relational and trauma-informed therapy for individuals navigating life transitions, identity, and recovery. Let's create meaningful change together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="px-8 py-6"
            >
              Schedule a Free Consultation
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-6 border-cream/60 text-cream hover:bg-cream/10 hover:text-cream"
            >
              My Approach
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;