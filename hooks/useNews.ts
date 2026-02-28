import { useQuery, useMutation, useQueryClient, UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import {
  getNewsByLocation,
  getNewsById,
  searchNews,
  getNewsWithFilters,
  getTopNews,
  getLatestNews,
  NewsArticle,
  NewsResponse,
  NewsSearchParams,
} from "@/services/news.service";
import { queryKeys, NewsFilters } from "@/lib/queryKeys";

/**
 * useNews Hook
 * 
 * Custom React Query hooks for news-related operations.
 * Provides:
 * - useNewsByLocation: Fetch news by location
 * - useNewsById: Fetch single news article
 * - useSearchNews: Search news articles
 * - useNewsWithFilters: Fetch news with filters
 * - useTopNews: Fetch top news articles
 * - useNewsMutations: Mutations for news operations
 */

/**
 * Fetch news articles by location
 */
export const useNewsByLocation = (
  lat: number,
  lon: number,
  miles: number,
  filters?: NewsFilters,
  options?: Omit<UseQueryOptions<NewsResponse>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: queryKeys.news.byLocation(lat, lon, miles),
    queryFn: () => getNewsByLocation(lat, lon, miles, filters),
    enabled: !!lat && !!lon && !!miles, // Only run if all required params are provided
    ...options,
  });
};

/**
 * Fetch a single news article by ID
 */
export const useNewsById = (
  id: string,
  options?: Omit<UseQueryOptions<NewsArticle>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: queryKeys.news.detail(id),
    queryFn: () => getNewsById(id),
    enabled: !!id, // Only run if ID is provided
    ...options,
  });
};

/**
 * Search news articles
 */
export const useSearchNews = (
  query: string,
  filters?: NewsFilters,
  options?: Omit<UseQueryOptions<NewsResponse>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: queryKeys.news.search(query, filters),
    queryFn: () => searchNews(query, filters),
    enabled: !!query && query.length > 0, // Only run if query is provided
    ...options,
  });
};

/**
 * Fetch news articles with filters
 */
export const useNewsWithFilters = (
  filters?: NewsFilters,
  options?: Omit<UseQueryOptions<NewsResponse>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: queryKeys.news.list(filters),
    queryFn: () => getNewsWithFilters(filters),
    ...options,
  });
};

/**
 * Fetch top news articles
 */
export const useTopNews = (
  limit: number = 10,
  options?: Omit<UseQueryOptions<NewsResponse>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: [...queryKeys.news.all, "top", limit],
    queryFn: () => getTopNews(limit),
    ...options,
  });
};

/**
 * Fetch latest news articles
 */
export const useLatestNews = (
  filters?: NewsFilters,
  options?: Omit<UseQueryOptions<NewsResponse>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: queryKeys.news.latest(filters),
    queryFn: () => getLatestNews(filters),
    ...options,
  });
};

/**
 * News mutations hook
 * Provides mutations for news-related operations
 */
export const useNewsMutations = () => {
  const queryClient = useQueryClient();

  // Invalidate news queries after mutations
  const invalidateNews = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.news.all });
  };

  // Prefetch news by ID
  const prefetchNewsById = async (id: string) => {
    await queryClient.prefetchQuery({
      queryKey: queryKeys.news.detail(id),
      queryFn: () => getNewsById(id),
    });
  };

  // Prefetch news by location
  const prefetchNewsByLocation = async (
    lat: number,
    lon: number,
    miles: number,
    filters?: NewsFilters
  ) => {
    await queryClient.prefetchQuery({
      queryKey: queryKeys.news.byLocation(lat, lon, miles),
      queryFn: () => getNewsByLocation(lat, lon, miles, filters),
    });
  };

  return {
    invalidateNews,
    prefetchNewsById,
    prefetchNewsByLocation,
  };
};

