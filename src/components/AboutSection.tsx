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
              alt="Britney Worley, Counselor"
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
              Hi, I'm Britney
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Many clients come to counseling looking for support with repeated
                struggles in their lives or in the ways they relate to themselves and
                others. I help people understand these patterns, navigate life&apos;s
                challenges, and create meaningful change that strengthens connection and
                fosters personal growth.
              </p>
              <p>
                I strive to create a warm, authentic space rather than a stiff,
                overly-clinical experience. I&apos;m direct and offer practical feedback
                with warmth and validation, so sessions feel conversational, grounded,
                and collaborative.
              </p>
              <p>
                My work is integrative and relational. I draw from relational-cultural
                and systems perspectives, as well as techniques from Motivational
                Interviewing, CBT, DBT, and solution-focused therapies to support both
                insight and practical skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
