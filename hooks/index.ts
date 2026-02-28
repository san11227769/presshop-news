/**
 * Hooks Index
 * 
 * Central export point for all custom hooks.
 * This allows for cleaner imports:
 * 
 * Instead of: import { useNewsByLocation } from "@/hooks/useNews"
 * You can use: import { useNewsByLocation } from "@/hooks"
 */

// News Hooks
export * from "./useNews";

// Auth Hooks
export * from "./useAuth";

// Incidents Hook (existing)
export * from "./useIncidents";

