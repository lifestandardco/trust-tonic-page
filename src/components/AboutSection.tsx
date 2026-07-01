import { motion } from "framer-motion";
import therapistImage from "@/assets/therapist-portrait.webp";
import { useSanityContent } from "@/lib/useSanityContent";

type AboutStat = { value: string; label: string };
type AboutContent = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  stats: AboutStat[];
};

const FALLBACK: AboutContent = {
  eyebrow: "About Me",
  heading: "Hi, I'm Britney.",
  paragraphs: [
    "I strive to create a warm, authentic space where you feel genuinely connected to the person you're sharing your deepest experiences with. I am direct and conversational, aiming for sessions to feel relaxed and not overly clinical. While we’ll work through the difficult parts of life, I also leave room for laughter and joy.",
    "As a queer woman of color and first-generation college student, I have a deep passion for working with people from diverse backgrounds, particularly those who have faced marginalization or trauma.",
    "My approach is integrative—Everyone has their own story, and I believe care should reflect that. I often work from a relational-cultural and systems perspective because connection is the foundation of healing. Additionally, I draw on techniques from Motivational Interviewing, CBT, DBT, and Solution-Focused therapies in order to gain practical skills.",
  ],
  stats: [
    { value: "LPC", label: "Licensed Professional Counselor" },
    { value: "8+", label: "Years of Experience" },
    { value: "M.A.", label: "Clinical Mental Health Counseling" },
  ],
};

const QUERY = `*[_type == "aboutSection"][0]{
  eyebrow,
  heading,
  paragraphs,
  stats[]{ value, label }
}`;

const AboutSection = () => {
  const content = useSanityContent("aboutSection", QUERY, FALLBACK);

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
              {content.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 leading-snug">
              {content.heading}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {content.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex gap-8">
              {content.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-display font-semibold text-primary uppercase">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
