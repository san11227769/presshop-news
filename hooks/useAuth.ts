import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import {
  login,
  register,
  logout,
  getCurrentUser,
  refreshToken,
  requestPasswordReset,
  resetPassword,
  updateProfile,
  LoginCredentials,
  RegisterData,
  User,
  AuthResponse,
  LoginResponse,
  RegisterResponse,
} from "@/services/auth.service";
import { queryKeys } from "@/lib/queryKeys";

/**
 * useAuth Hook
 * 
 * Custom React Query hooks for authentication operations.
 * Provides:
 * - useLogin: Login mutation
 * - useRegister: Registration mutation
 * - useLogout: Logout mutation
 * - useCurrentUser: Get current user query
 * - useRefreshToken: Refresh token mutation
 * - usePasswordReset: Password reset mutations
 * - useUpdateProfile: Update profile mutation
 */

/**
 * Login mutation
 */
export const useLogin = (
  options?: UseMutationOptions<LoginResponse, Error, LoginCredentials>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (data, variables, context) => {
      // Store token and user data
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        if (data.refreshToken) {
          localStorage.setItem("refreshToken", data.refreshToken);
        }
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Set user query data
      queryClient.setQueryData(queryKeys.auth.user(), data.user);

      // Call custom onSuccess if provided
      options?.onSuccess?.(data, variables, context, undefined as any);
    },
    ...options,
  });
};

/**
 * Register mutation
 */
export const useRegister = (
  options?: UseMutationOptions<RegisterResponse, Error, RegisterData>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register,
    onSuccess: (data, variables, context) => {
      // Store token and user data
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        if (data.refreshToken) {
          localStorage.setItem("refreshToken", data.refreshToken);
        }
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Set user query data
      queryClient.setQueryData(queryKeys.auth.user(), data.user);

      // Call custom onSuccess if provided
      options?.onSuccess?.(data, variables, context, undefined as any);
    },
    ...options,
  });
};

/**
 * Logout mutation
 */
export const useLogout = (
  options?: UseMutationOptions<void, Error, void>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: (data, variables, context) => {
      // Clear all query data
      queryClient.clear();

      // Remove auth-related data
      queryClient.removeQueries({ queryKey: queryKeys.auth.all });

      // Call custom onSuccess if provided
      options?.onSuccess?.(data, variables, context, undefined as any);
    },
    ...options,
  });
};

/**
 * Get current user query
 */
export const useCurrentUser = (
  options?: Omit<UseQueryOptions<User>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: queryKeys.auth.user(),
    queryFn: getCurrentUser,
    retry: false, // Don't retry if user is not authenticated
    staleTime: 1000 * 60 * 5, // Consider user data fresh for 5 minutes
    ...options,
  });
};

/**
 * Refresh token mutation
 */
export const useRefreshToken = (
  options?: UseMutationOptions<
    { token: string; refreshToken: string },
    Error,
    string
  >
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: refreshToken,
    onSuccess: (data, variables, context) => {
      // Update stored tokens
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
      }

      // Call custom onSuccess if provided
      options?.onSuccess?.(data, variables, context, undefined as any);
    },
    ...options,
  });
};

/**
 * Request password reset mutation
 */
export const useRequestPasswordReset = (
  options?: UseMutationOptions<void, Error, string>
) => {
  return useMutation({
    mutationFn: requestPasswordReset,
    ...options,
  });
};

/**
 * Reset password mutation
 */
export const useResetPassword = (
  options?: UseMutationOptions<void, Error, { token: string; password: string }>
) => {
  return useMutation({
    mutationFn: ({ token, password }) => resetPassword(token, password),
    ...options,
  });
};

/**
 * Update profile mutation
 */
export const useUpdateProfile = (
  options?: UseMutationOptions<User, Error, Partial<User>>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (data, variables, context) => {
      // Update user query data
      queryClient.setQueryData(queryKeys.auth.user(), data);

      // Update stored user data
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(data));
      }

      // Call custom onSuccess if provided
      options?.onSuccess?.(data, variables, context, undefined as any);
    },
    ...options,
  });
};

/**
 * Check if user is authenticated
 * Returns true if user data exists in cache
 */
export const useIsAuthenticated = (): boolean => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(queryKeys.auth.user());

  // Also check localStorage as fallback
  if (!user && typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        queryClient.setQueryData(queryKeys.auth.user(), parsedUser);
        return true;
      } catch {
        return false;
      }
    }
  }

  return !!user;
};

