# React Query Setup - Usage Examples

This document provides examples of how to use the React Query setup in your Next.js application.

## Table of Contents
- [News Hooks](#news-hooks)
- [Auth Hooks](#auth-hooks)
- [Query Keys](#query-keys)
- [Best Practices](#best-practices)

## News Hooks

### Fetch News by Location

```tsx
import { useNewsByLocation } from "@/hooks";

function NewsComponent() {
  const { data, isLoading, error } = useNewsByLocation(
    51.5074, // lat
    -0.1278, // lon
    10,      // miles
    {
      language: "en",
      sort: "publish-time",
      "sort-direction": "DESC"
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.news?.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
}
```

### Fetch Single News Article

```tsx
import { useNewsById } from "@/hooks";

function NewsDetailPage({ id }: { id: string }) {
  const { data, isLoading, error } = useNewsById(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <article>
      <h1>{data?.title}</h1>
      <p>{data?.text}</p>
    </article>
  );
}
```

### Search News

```tsx
import { useSearchNews } from "@/hooks";
import { useState } from "react";

function SearchNews() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useSearchNews(searchQuery, {
    language: "en",
    limit: 20
  });

  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search news..."
      />
      {isLoading && <div>Searching...</div>}
      {data?.news?.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
}
```

### Prefetch News (for better UX)

```tsx
import { useNewsMutations } from "@/hooks";
import Link from "next/link";

function NewsList({ articles }: { articles: NewsArticle[] }) {
  const { prefetchNewsById } = useNewsMutations();

  return (
    <div>
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/news/${article.id}`}
          onMouseEnter={() => prefetchNewsById(article.id.toString())}
        >
          {article.title}
        </Link>
      ))}
    </div>
  );
}
```

## Auth Hooks

### Login

```tsx
import { useLogin } from "@/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLogin({
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
```

### Register

```tsx
import { useRegister } from "@/hooks";

function RegisterForm() {
  const registerMutation = useRegister({
    onSuccess: (data) => {
      console.log("Registered:", data.user);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    registerMutation.mutate({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string
    });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Get Current User

```tsx
import { useCurrentUser } from "@/hooks";

function UserProfile() {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <div>Loading user...</div>;
  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

### Check Authentication Status

```tsx
import { useIsAuthenticated } from "@/hooks";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <div>Please log in to access this page</div>;
  }

  return <>{children}</>;
}
```

### Update Profile

```tsx
import { useUpdateProfile } from "@/hooks";

function ProfileSettings() {
  const updateProfileMutation = useUpdateProfile({
    onSuccess: () => {
      alert("Profile updated successfully!");
    }
  });

  const handleUpdate = (data: Partial<User>) => {
    updateProfileMutation.mutate(data);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate({ name: "New Name" });
    }}>
      <button type="submit" disabled={updateProfileMutation.isPending}>
        Update Profile
      </button>
    </form>
  );
}
```

## Query Keys

Query keys are managed centrally in `lib/queryKeys.ts`. This ensures type safety and prevents typos.

```tsx
import { queryKeys } from "@/lib/queryKeys";
import { useQueryClient } from "@tanstack/react-query";

function MyComponent() {
  const queryClient = useQueryClient();

  // Invalidate all news queries
  const refreshNews = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.news.all });
  };

  // Invalidate specific news article
  const refreshArticle = (id: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.news.detail(id) });
  };

  // Get cached data
  const cachedNews = queryClient.getQueryData(queryKeys.news.all);

  return <button onClick={refreshNews}>Refresh News</button>;
}
```

## Best Practices

### 1. Use Query Options for Conditional Fetching

```tsx
// Only fetch when user is logged in
const { data } = useCurrentUser({
  enabled: !!token
});
```

### 2. Handle Loading and Error States

```tsx
const { data, isLoading, isError, error } = useNewsByLocation(lat, lon, miles);

if (isLoading) return <LoadingSpinner />;
if (isError) return <ErrorMessage error={error} />;
if (!data) return <EmptyState />;

return <NewsList news={data.news} />;
```

### 3. Use Mutations for Side Effects

```tsx
const loginMutation = useLogin({
  onSuccess: (data) => {
    // Handle success
    router.push("/dashboard");
  },
  onError: (error) => {
    // Handle error
    toast.error(error.message);
  }
});
```

### 4. Optimistic Updates

```tsx
const updateMutation = useUpdateProfile({
  onMutate: async (newData) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: queryKeys.auth.user() });
    
    // Snapshot previous value
    const previousUser = queryClient.getQueryData<User>(queryKeys.auth.user());
    
    // Optimistically update
    queryClient.setQueryData(queryKeys.auth.user(), {
      ...previousUser,
      ...newData
    });
    
    return { previousUser };
  },
  onError: (err, newData, context) => {
    // Rollback on error
    queryClient.setQueryData(queryKeys.auth.user(), context?.previousUser);
  }
});
```

### 5. Prefetching for Better UX

```tsx
// Prefetch on hover
<Link
  href={`/news/${id}`}
  onMouseEnter={() => prefetchNewsById(id)}
>
  {title}
</Link>
```

## Configuration

The React Query configuration is in `lib/react-query.ts`. You can customize:

- `staleTime`: How long data is considered fresh (default: 5 minutes)
- `gcTime`: How long unused data stays in cache (default: 10 minutes)
- `retry`: Number of retry attempts (default: 3)
- `refetchOnWindowFocus`: Refetch when window regains focus (default: false)

## React Query DevTools

The DevTools are automatically enabled in development mode. You'll see a floating button in the bottom-left corner of your app that opens the React Query DevTools panel.

