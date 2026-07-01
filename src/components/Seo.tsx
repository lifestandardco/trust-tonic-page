import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.britneyworleycounseling.com";

type SeoProps = {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/services". Used for the canonical URL. */
  path: string;
  noindex?: boolean;
};

/**
 * Sets per-page <title>, meta description, canonical URL, and matching
 * Open Graph / Twitter title+description. The site-wide og:image and
 * structured data live in index.html.
 */
const Seo = ({ title, description, path, noindex }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
};

export default Seo;
