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
              alt="Britney Worley, M.A., LPC, NCC"
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
              Hi, I'm Britney.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I strive to create a warm, authentic space where you feel genuinely connected to the person you're sharing your deepest experiences with. I am direct and conversational, aiming for sessions to feel relaxed and not overly clinical.
              </p>
              <p>
                As a queer woman of color and first-generation college student, I have a deep passion for working with people from diverse backgrounds, particularly those who have faced marginalization or trauma.
              </p>
              <p>
                My approach is integrative—drawing on techniques from CBT, DBT, and EMDR—but I always make sure we leave room for laughter and joy along the way.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-2xl font-display font-semibold text-primary uppercase">LPC</p>
                <p className="text-sm text-muted-foreground">Licensed Counselor</p>
              </div>
              <div>
                <p className="text-2xl font-display font-semibold text-primary uppercase">8+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl font-display font-semibold text-primary uppercase">NCC</p>
                <p className="text-sm text-muted-foreground">National Certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;