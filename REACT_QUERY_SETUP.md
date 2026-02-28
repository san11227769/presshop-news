# React Query Setup - Complete Implementation

## 📁 Project Structure

```
presshop_news_aggregator/
├── lib/
│   ├── react-query.ts          # QueryClient configuration
│   ├── queryKeys.ts            # Type-safe query keys factory
│   └── react-query-examples.md # Usage examples
├── services/
│   ├── index.ts                # Service exports
│   ├── news.service.ts         # News API service
│   ├── auth.service.ts         # Auth API service
│   └── curatorService.ts       # Existing curator service
├── hooks/
│   ├── index.ts                # Hook exports
│   ├── useNews.ts              # News React Query hooks
│   ├── useAuth.ts              # Auth React Query hooks
│   └── useIncidents.ts         # Existing incidents hook
└── app/
    └── providers.tsx           # Updated with QueryClient & DevTools
```

## ✅ What's Been Implemented

### 1. **QueryClient Configuration** (`lib/react-query.ts`)
- ✅ Optimized default settings (staleTime, gcTime, retry logic)
- ✅ Proper error handling configuration
- ✅ Refetch strategies configured

### 2. **Query Keys Factory** (`lib/queryKeys.ts`)
- ✅ Type-safe query key management
- ✅ Centralized key definitions
- ✅ Prevents typos and ensures consistency

### 3. **News Service** (`services/news.service.ts`)
- ✅ `getNewsByLocation()` - Fetch news by location
- ✅ `getNewsById()` - Fetch single news article
- ✅ `searchNews()` - Search news articles
- ✅ `getNewsWithFilters()` - Fetch with filters
- ✅ `getTopNews()` - Fetch top news

### 4. **Auth Service** (`services/auth.service.ts`)
- ✅ `login()` - User login
- ✅ `register()` - User registration
- ✅ `logout()` - User logout
- ✅ `getCurrentUser()` - Get current user
- ✅ `refreshToken()` - Refresh auth token
- ✅ `requestPasswordReset()` - Request password reset
- ✅ `resetPassword()` - Reset password
- ✅ `updateProfile()` - Update user profile

### 5. **News Hooks** (`hooks/useNews.ts`)
- ✅ `useNewsByLocation()` - Query hook for location-based news
- ✅ `useNewsById()` - Query hook for single article
- ✅ `useSearchNews()` - Query hook for search
- ✅ `useNewsWithFilters()` - Query hook with filters
- ✅ `useTopNews()` - Query hook for top news
- ✅ `useNewsMutations()` - Utility mutations (prefetch, invalidate)

### 6. **Auth Hooks** (`hooks/useAuth.ts`)
- ✅ `useLogin()` - Login mutation
- ✅ `useRegister()` - Registration mutation
- ✅ `useLogout()` - Logout mutation
- ✅ `useCurrentUser()` - Current user query
- ✅ `useRefreshToken()` - Token refresh mutation
- ✅ `useRequestPasswordReset()` - Password reset request
- ✅ `useResetPassword()` - Password reset
- ✅ `useUpdateProfile()` - Profile update mutation
- ✅ `useIsAuthenticated()` - Authentication status check

### 7. **Providers** (`app/providers.tsx`)
- ✅ Updated to use centralized QueryClient
- ✅ React Query DevTools integrated (development only)

## 🚀 Quick Start

### Basic Usage Example

```tsx
import { useNewsByLocation } from "@/hooks";
import { useLogin } from "@/hooks";

// In your component
function MyComponent() {
  // Fetch news
  const { data: news, isLoading } = useNewsByLocation(51.5074, -0.1278, 10);
  
  // Login mutation
  const loginMutation = useLogin({
    onSuccess: () => console.log("Logged in!")
  });
  
  return (
    <div>
      {isLoading ? "Loading..." : news?.news?.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
}
```

## 📦 Dependencies

All required packages are already installed:
- ✅ `@tanstack/react-query` (v5.90.7)
- ✅ `@tanstack/react-query-devtools` (dev dependency - newly added)

## 🎯 Key Features

1. **Type Safety**: Full TypeScript support with proper types
2. **Centralized Configuration**: All query settings in one place
3. **Type-Safe Query Keys**: Prevents typos and ensures consistency
4. **Optimized Caching**: Smart cache management with configurable stale times
5. **Error Handling**: Built-in retry logic and error handling
6. **DevTools**: React Query DevTools for debugging (dev only)
7. **Scalable Structure**: Easy to extend with new services and hooks

## 📚 Documentation

See `lib/react-query-examples.md` for detailed usage examples and best practices.

## 🔧 Configuration

Default settings can be modified in `lib/react-query.ts`:
- `staleTime`: 5 minutes (data considered fresh)
- `gcTime`: 10 minutes (cache retention)
- `retry`: 3 attempts with exponential backoff
- `refetchOnWindowFocus`: false
- `refetchOnReconnect`: true

## 🎨 Best Practices

1. **Always use the hooks** instead of calling services directly
2. **Use query keys from the factory** for consistency
3. **Handle loading and error states** in your components
4. **Use prefetching** for better UX (e.g., on hover)
5. **Invalidate queries** after mutations to keep data fresh

## 🔄 Next Steps

1. Replace any direct API calls with the new hooks
2. Update existing components to use the new hooks
3. Add more services/hooks as needed following the same pattern
4. Customize query defaults in `lib/react-query.ts` if needed

---

**Setup Complete!** 🎉 Your React Query implementation is ready to use.

