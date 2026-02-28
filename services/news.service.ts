import axios from "@/lib/axiosInstance";
import { NewsFilters } from "@/lib/queryKeys";

/**
 * News Service
 * 
 * All news-related API calls are centralized here.
 * This service handles:
 * - Fetching news by location
 * - Fetching news by ID
 * - Searching news
 * - Fetching news with filters
 */

export interface NewsArticle {
  id: number;
  title: string;
  text: string;
  summary: string;
  category: string;
  url: string;
  image?: string;
  author?: string;
  language?: string;
  source_country?: string;
  sentiment?: number;
  entities?: Array<{
    symbol?: string;
    name?: string;
    type?: string;
  }>;
  publish_date?: string;
  created_at?: string;
  updated_at?: string;
}

export interface NewsResponse {
  news?: NewsArticle[];
  available?: number;
  total?: number;
  page?: number;
  limit?: number;
}

export interface NewsSearchParams {
  lat: number;
  lon: number;
  miles: number;
  filters?: NewsFilters;
}

/**
 * Fetch news articles by location
 * @param lat - Latitude
 * @param lon - Longitude
 * @param miles - Radius in miles
 * @param filters - Optional filters (language, sort, etc.)
 */
export const getNewsByLocation = async (
  lat: number,
  lon: number,
  miles: number,
  filters?: NewsFilters
): Promise<NewsResponse> => {
  try {
    const params: Record<string, any> = {
      "location-filter": `${lat},${lon},${miles}`,
      ...filters,
    };

    const response = await axios.get("/search-news", { params });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching news by location:", error);
    throw error;
  }
};

/**
 * Fetch a single news article by ID
 * @param id - News article ID
 */
// export const getNewsById = async (id: string): Promise<NewsArticle> => {
//   try {
//     const response = await axios.get(`/news/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("❌ Error fetching news by ID:", error);
//     throw error;
//   }
// };
export const getNewsById = async (id: string): Promise<NewsArticle> => {
  try {
    const response = await axios.get(
      "/mediahouse/getAggregatedNewsForWebsite"
    );

    const list =
      response.data?.newsArray ||
      response.data?.news ||
      [];

    const article = list.find(
      (item: any) => String(item.id) === String(id)
    );

    if (!article) {
      throw new Error("News not found");
    }

    return article;
  } catch (error) {
    console.error("❌ Error fetching news by ID:", error);
    throw error;
  }
};

/**
 * Search news articles
 * @param query - Search query string
 * @param filters - Optional filters
 */
export const searchNews = async (
  query: string,
  filters?: NewsFilters
): Promise<NewsResponse> => {
  try {
    const params: Record<string, any> = {
      text: query,
      ...filters,
    };

    const response = await axios.get("/search-news", { params });
    return response.data;
  } catch (error) {
    console.error("❌ Error searching news:", error);
    throw error;
  }
};

/**
 * Fetch news articles with filters
 * @param filters - News filters (language, sort, category, etc.)
 */
export const getNewsWithFilters = async (
  filters?: NewsFilters
): Promise<NewsResponse> => {
  try {
    const params: Record<string, any> = {
      ...filters,
    };

    const response = await axios.get("/search-news", { params });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching news with filters:", error);
    throw error;
  }
};

/**
 * Fetch top news articles
 * @param limit - Number of articles to fetch (default: 10)
 */
export const getTopNews = async (limit: number = 10): Promise<NewsResponse> => {
  try {
    const params: Record<string, any> = {
      number: limit,
      sort: "publish-time",
      "sort-direction": "DESC",
    };

    const response = await axios.get("/search-news", { params });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching top news:", error);
    throw error;
  }
};

/**
 * Fetch latest news articles
 * @param filters - Optional filters (limit, language, sort, etc.)
 */
export const getLatestNews = async (
  filters?: NewsFilters
): Promise<NewsResponse> => {
  try {
    const params: Record<string, any> = {
      sort: "publish-time",
      "sort-direction": "DESC",
      limit: filters?.limit || 8, // Default to 8 for latest news section
      ...filters,
    };

    const response = await axios.get("/mediahouse/getAggregatedNewsForWebsite", { params });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching latest news:", error);
    throw error;
  }
};

