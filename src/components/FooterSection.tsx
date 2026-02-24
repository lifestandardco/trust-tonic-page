const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground/70">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display text-lg font-semibold text-primary-foreground">
              Dr. Sarah Mitchell
            </p>
            <p className="text-sm mt-1">Licensed Clinical Psychologist — NY & CA</p>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Dr. Sarah Mitchell. All rights reserved.</p>
            <p className="mt-1">
              If you are in crisis, please call{" "}
              <a href="tel:988" className="underline text-primary-foreground">
                988 Suicide & Crisis Lifeline
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
