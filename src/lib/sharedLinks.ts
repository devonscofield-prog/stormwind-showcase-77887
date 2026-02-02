/**
 * Shared Links Service
 *
 * Manages trackable share links that sales reps generate to send content
 * to clients. Uses localStorage as the persistence layer. When a Supabase
 * `shared_links` table is added, swap the storage calls here.
 */

export interface SharedLink {
  id: string;
  /** Short alphanumeric code used in the URL path */
  shortCode: string;
  /** Course being shared */
  courseId: string;
  courseTitle: string;
  /** Optional specific variant */
  variantId?: string;
  variantName?: string;
  /** Who created the link (from auth context) */
  createdByEmail: string;
  createdByName: string;
  /** Optional client/prospect name for attribution */
  clientName?: string;
  /** Optional client company */
  clientCompany?: string;
  createdAt: string;
  /** ISO date string; null = never expires */
  expiresAt: string | null;
  /** Running view count */
  viewCount: number;
  /** Individual view events */
  views: SharedLinkView[];
}

export interface SharedLinkView {
  viewedAt: string;
  sessionId: string;
  referrer: string;
}

const STORAGE_KEY = "shared_links";

// ---------------------------------------------------------------------------
// Short code generation
// ---------------------------------------------------------------------------

/** Generate a URL-safe short code (8 chars, alphanumeric) */
export const generateShortCode = (): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const array = new Uint8Array(8);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => chars[b % chars.length]).join("");
};

// ---------------------------------------------------------------------------
// CRUD helpers
// ---------------------------------------------------------------------------

export const getAllSharedLinks = (): SharedLink[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const persist = (links: SharedLink[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
};

export interface CreateSharedLinkInput {
  courseId: string;
  courseTitle: string;
  variantId?: string;
  variantName?: string;
  createdByEmail: string;
  createdByName: string;
  clientName?: string;
  clientCompany?: string;
  /** Number of days until expiration; 0 = never */
  expiresInDays?: number;
}

export const createSharedLink = (input: CreateSharedLinkInput): SharedLink => {
  const shortCode = generateShortCode();
  const now = new Date().toISOString();

  let expiresAt: string | null = null;
  if (input.expiresInDays && input.expiresInDays > 0) {
    const exp = new Date();
    exp.setDate(exp.getDate() + input.expiresInDays);
    expiresAt = exp.toISOString();
  }

  const link: SharedLink = {
    id: crypto.randomUUID(),
    shortCode,
    courseId: input.courseId,
    courseTitle: input.courseTitle,
    variantId: input.variantId,
    variantName: input.variantName,
    createdByEmail: input.createdByEmail,
    createdByName: input.createdByName,
    clientName: input.clientName || undefined,
    clientCompany: input.clientCompany || undefined,
    createdAt: now,
    expiresAt,
    viewCount: 0,
    views: [],
  };

  const links = getAllSharedLinks();
  links.push(link);
  persist(links);
  return link;
};

export const getSharedLinkByCode = (shortCode: string): SharedLink | null => {
  const links = getAllSharedLinks();
  return links.find((l) => l.shortCode === shortCode) || null;
};

export const recordSharedLinkView = (
  shortCode: string,
  sessionId: string,
  referrer: string
): SharedLink | null => {
  const links = getAllSharedLinks();
  const index = links.findIndex((l) => l.shortCode === shortCode);
  if (index === -1) return null;

  links[index].viewCount += 1;
  links[index].views.push({
    viewedAt: new Date().toISOString(),
    sessionId,
    referrer,
  });

  persist(links);
  return links[index];
};

export const deleteSharedLink = (id: string): void => {
  const links = getAllSharedLinks().filter((l) => l.id !== id);
  persist(links);
};

export const isLinkExpired = (link: SharedLink): boolean => {
  if (!link.expiresAt) return false;
  return new Date(link.expiresAt) < new Date();
};

/** Build the full shareable URL for a given short code */
export const buildShareUrl = (shortCode: string): string => {
  return `${window.location.origin}/s/${shortCode}`;
};
