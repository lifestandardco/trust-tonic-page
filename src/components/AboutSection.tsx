import { motion } from "framer-motion";
import therapistImage from "@/assets/therapist-portrait.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={therapistImage}
              alt="Dr. Sarah Mitchell, Licensed Clinical Therapist"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 leading-snug">
              Hi, I'm Dr. Sarah Mitchell
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of clinical experience, I specialize in helping
                adults navigate the complexities of modern life — from anxiety and
                depression to relationship challenges and major life transitions.
              </p>
              <p>
                My approach is warm, collaborative, and grounded in evidence-based
                methods including CBT, EMDR, and mindfulness-based therapies. I believe
                every person has the capacity for meaningful change, and my role is to
                walk alongside you on that journey.
              </p>
              <p>
                I hold a Doctorate in Clinical Psychology from Columbia University and
                am licensed in New York and California.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-display font-semibold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-display font-semibold text-primary">1,200+</p>
                <p className="text-sm text-muted-foreground">Clients Helped</p>
              </div>
              <div>
                <p className="text-3xl font-display font-semibold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
