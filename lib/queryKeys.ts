/**
 * Query Keys Factory
 * 
 * Centralized query key management for type-safe query keys.
 * This ensures consistency and prevents typos in query keys.
 * 
 * Usage:
 * - queryKeys.news.all -> ['news']
 * - queryKeys.news.detail(id) -> ['news', 'detail', id]
 * - queryKeys.news.list(filters) -> ['news', 'list', filters]
 */

export const queryKeys = {
  // News related query keys
  news: {
    all: ["news"] as const,
    lists: () => [...queryKeys.news.all, "list"] as const,
    list: (filters?: NewsFilters) => [...queryKeys.news.lists(), filters] as const,
    details: () => [...queryKeys.news.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.news.details(), id] as const,
    search: (query: string, filters?: NewsFilters) =>
      [...queryKeys.news.all, "search", query, filters] as const,
    byLocation: (lat: number, lon: number, miles: number) =>
      [...queryKeys.news.all, "location", lat, lon, miles] as const,
    latest: (filters?: NewsFilters) =>
      [...queryKeys.news.all, "latest", filters] as const,
  },
  // Auth related query keys
  auth: {
    all: ["auth"] as const,
    user: () => [...queryKeys.auth.all, "user"] as const,
    session: () => [...queryKeys.auth.all, "session"] as const,
  },
  // Curator related query keys
  curator: {
    all: ["curator"] as const,
    posts: () => [...queryKeys.curator.all, "posts"] as const,
  },
} as const;

// Types for query parameters
export interface NewsFilters {
  language?: string;
  sort?: string;
  "sort-direction"?: "ASC" | "DESC";
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
}

