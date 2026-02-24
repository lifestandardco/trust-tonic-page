import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Phone, Armchair, Users, ShieldCheck, Receipt, Info } from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    // This allows the "Book" button to navigate back home to the contact form
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="pt-20">
        {/* Header Section - Uses Sage Light like your Services Section */}
        <section className="py-24 bg-sage-light">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Services & Rates
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
                Get support for your <span className="italic">mental healthcare</span> needs.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Services Detail Grid - Matching the grid-gap of your home page */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16">
              {/* Free Consultation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-medium">Free Consultation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Finding the right therapist is an important part of counseling. I offer a free 15-20 minute phone consultation to explore your needs and determine if we are the right fit.
                </p>
                <p className="text-lg font-display font-semibold text-primary">15-20 mins | Free</p>
              </motion.div>

              {/* Individual Therapy */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Armchair className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-medium">Individual Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Offered both in-person and virtually. I accept private pay and am an in-network provider for several major insurance plans.
                </p>
                <p className="text-lg font-display font-semibold text-primary">50 mins | $160*</p>
              </motion.div>

              {/* Group Therapy */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-medium">Group Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I have experience running LGBTQIA+ support, DBT skills, and recovery groups. Please check back for future group offerings.
                </p>
                <p className="text-lg font-display font-semibold text-primary">90 mins | TBD</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Insurance & Rates - Clean, Tag-based formatting */}
        <section className="py-24 bg-sage-light">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <ShieldCheck className="text-primary w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-display font-medium">Insurance & Billing</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-16 mb-16">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-semibold">In-Network With</h4>
                  <div className="flex flex-wrap gap-3">
                    {["United", "UMR", "Optum", "Aetna", "Meritain", "Oscar"].map((ins) => (
                      <span key={ins} className="px-5 py-2.5 bg-background rounded-full border border-border text-sm font-medium shadow-sm">
                        {ins}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-semibold">Billing Details</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Private pay is accepted at a rate of $160 per session. For out-of-network providers, I am happy to provide a superbill for you to submit for potential reimbursement.
                  </p>
                </div>
              </div>

              {/* Good Faith Estimate - Standardized with your UI components */}
              <div className="p-10 border border-border rounded-3xl bg-background/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <Info className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div className="space-y-3">
                    <h5 className="font-display font-medium text-lg text-foreground">Good Faith Estimate</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      Under the "No Surprises Act," you have the right to receive a "Good Faith Estimate" explaining how much your medical care will cost. This applies to patients who do not have insurance or are not using insurance. For questions or more information, please visit www.cms.gov/nosurprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">Ready to get started?</h2>
            <Button size="lg" className="px-12 py-8 text-lg rounded-full" onClick={scrollToContact}>
              Schedule a consultation
            </Button>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Services;