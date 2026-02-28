import { QueryClient } from "@tanstack/react-query";

/**
 * React Query Client Configuration
 * 
 * This configuration provides optimal defaults for:
 * - Stale time: Data is considered fresh for 5 minutes
 * - Cache time: Unused data stays in cache for 10 minutes
 * - Retry logic: Retry failed requests up to 3 times with exponential backoff
 * - Refetch on window focus: Disabled to prevent unnecessary requests
 * - Refetch on reconnect: Enabled to sync data when connection is restored
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data is considered fresh for 5 minutes
      staleTime: 1000 * 60 * 5,
      // Unused data stays in cache for 10 minutes
      gcTime: 1000 * 60 * 10, // Previously cacheTime
      // Retry failed requests
      retry: 3,
      // Retry delay with exponential backoff
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      // Don't refetch on window focus (prevents unnecessary requests)
      refetchOnWindowFocus: false,
      // Refetch on reconnect (sync data when connection restored)
      refetchOnReconnect: true,
      // Don't refetch on mount if data is fresh
      refetchOnMount: true,
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
      // Retry delay for mutations
      retryDelay: 1000,
    },
  },
});

