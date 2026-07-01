import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSanityContent } from "@/lib/useSanityContent";

type FaqItem = { question: string; answer: string };
type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

const FALLBACK: FaqContent = {
  eyebrow: "Common Questions",
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "What happens during the first consultation?",
      answer:
        "The 15-20 minute phone consultation is a relaxed way for us to connect. We'll discuss what brings you to therapy, any questions you have about my approach, and determine if we're a good fit to work together.",
    },
    {
      question: "Do you offer in-person or virtual sessions?",
      answer:
        "Both. I see clients in-person at my office in Fort Collins, Colorado, and offer secure teletherapy sessions for individuals located anywhere in the state.",
    },
    {
      question: "How long and how frequent are sessions?",
      answer:
        "Individual sessions are 50 minutes long. Typically, we meet weekly or every other week, depending on your goals and current needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I require 24 hours' notice for cancellations. This allows me to offer the time slot to other individuals who may need it.",
    },
  ],
};

const QUERY = `*[_type == "faqSection"][0]{
  eyebrow,
  heading,
  items[]{ question, answer }
}`;

const FAQSection = () => {
  const content = useSanityContent("faqSection", QUERY, FALLBACK);

  return (
    <section id="faq" className="py-24 bg-sage-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            {content.heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {content.items.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
