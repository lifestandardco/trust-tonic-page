import { createClient } from "@sanity/client";

// Public, read-only client for fetching website content from Sanity.
// projectId/dataset are not secrets — they ship to the browser by design.
export const sanityClient = createClient({
  projectId: "tl2cmlt6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
