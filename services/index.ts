/**
 * Services Index
 * 
 * Central export point for all services.
 * This allows for cleaner imports:
 * 
 * Instead of: import { getNewsByLocation } from "@/services/news.service"
 * You can use: import { getNewsByLocation } from "@/services"
 */

// News Service
export * from "./news.service";

// Auth Service
export * from "./auth.service";

// Curator Service (existing)
export * from "./curatorService";

