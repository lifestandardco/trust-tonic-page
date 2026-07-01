import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "./sanity";

/**
 * Returns `fallback`, with any non-empty fields from the Sanity document
 * applied on top. This keeps the site fully rendered from the hardcoded
 * fallback even before Sanity is populated (or if a fetch fails), then
 * upgrades to CMS content field-by-field once it loads.
 */
function applyFallback<T extends object>(
  fallback: T,
  doc: Partial<T> | null | undefined,
): T {
  if (!doc) return fallback;
  const merged: T = { ...fallback };
  (Object.keys(doc) as Array<keyof T>).forEach((key) => {
    const value = doc[key];
    const isEmptyArray = Array.isArray(value) && value.length === 0;
    if (value !== null && value !== undefined && !isEmptyArray) {
      merged[key] = value as T[keyof T];
    }
  });
  return merged;
}

/**
 * Fetches a Sanity document via GROQ and merges it over a fallback.
 * Uses the app's existing React Query provider for caching.
 */
export function useSanityContent<T extends object>(
  key: string,
  query: string,
  fallback: T,
): T {
  const { data } = useQuery({
    queryKey: ["sanity", key],
    queryFn: () => sanityClient.fetch<Partial<T> | null>(query),
    staleTime: 60_000,
    retry: 1,
  });
  return applyFallback(fallback, data);
}
