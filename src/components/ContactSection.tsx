import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSanityContent } from "@/lib/useSanityContent";

// Formspree form endpoint — public by design, safe to commit.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrewbgkn";

const CONTACT_FALLBACK = {
  eyebrow: "Get in Touch",
  heading: "Schedule a Free Consultation",
  description:
    "Finding the right therapist can feel overwhelming. Reach out to schedule a free 20-minute phone consultation so we can talk through your needs, answer questions, and see if we’re a good fit to work together.",
  schedulingText:
    "Reach out to find a time to connect or schedule directly on my calendar by following the link below and selecting “I’m a new client”.",
  schedulingButtonLabel: "Schedule on my calendar",
  schedulingUrl: "https://britneyworleycounseling.clientsecure.me",
  phone: "(970) 818-0230",
  email: "britney@britneyworley.com",
  address: "226 Remington Street, Unit 1, Fort Collins, CO 80524",
};

const CONTACT_QUERY = `*[_type == "contactSection"][0]{
  eyebrow,
  heading,
  description,
  schedulingText,
  schedulingButtonLabel,
  schedulingUrl,
  phone,
  email,
  address
}`;

const voicemailLabels: Record<string, string> = {
  yes: "Yes",
  no: "No",
  "email-preferred": "Email preferred",
};

const emptyForm = {
  firstName: "",
  lastName: "",
  pronouns: "",
  phone: "",
  email: "",
  insurance: "",
  voicemail: "",
  message: "",
};

const ContactSection = () => {
  const { toast } = useToast();
  const content = useSanityContent("contactSection", CONTACT_QUERY, CONTACT_FALLBACK);
  const [formData, setFormData] = useState(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [voicemailError, setVoicemailError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.voicemail) {
      setVoicemailError(true);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "First name": formData.firstName,
          "Last name": formData.lastName,
          Pronouns: formData.pronouns,
          Phone: formData.phone,
          email: formData.email,
          "Insurance provider": formData.insurance,
          "May I leave a voicemail?": voicemailLabels[formData.voicemail] ?? "",
          "What brings you here?": formData.message,
          _subject: `New website inquiry from ${formData.firstName} ${formData.lastName}`,
          _gotcha: honeypot,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I look forward to connecting with you soon.",
      });
      setFormData(emptyForm);
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description:
          "Your message couldn't be sent. Please try again, or email britney@britneyworley.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-sage-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              {content.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {content.description}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-5">
              {content.schedulingText}
            </p>

            <Button variant="hero" size="lg" asChild className="mb-10">
              <a
                href={content.schedulingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.schedulingButtonLabel}
              </a>
            </Button>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{content.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{content.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Office</p>
                  <p className="font-medium">{content.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-sm space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Pronouns</label>
                  <Input
                    value={formData.pronouns}
                    onChange={(e) => setFormData({ ...formData, pronouns: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Insurance Provider</label>
                <Input
                  value={formData.insurance}
                  onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  May I leave a voicemail? <span className="text-primary">*</span>
                </label>
                <Select
                  required
                  name="voicemail"
                  value={formData.voicemail}
                  onValueChange={(value) => {
                    setFormData({ ...formData, voicemail: value });
                    setVoicemailError(false);
                  }}
                >
                  <SelectTrigger
                    aria-invalid={voicemailError}
                    className="bg-background aria-[invalid=true]:border-destructive"
                  >
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="email-preferred">Email preferred</SelectItem>
                  </SelectContent>
                </Select>
                {voicemailError && (
                  <p className="text-sm text-destructive mt-1.5">
                    Please select an option.
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  What brings you here?
                </label>
                <Textarea
                  placeholder="Tell me a little about what you're experiencing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
              {/* Honeypot field — hidden from real users, catches bots */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />
              <Button
                variant="hero"
                size="lg"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
