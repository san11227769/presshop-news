import axios from "@/lib/axiosInstance";

/**
 * Auth Service
 * 
 * All authentication-related API calls are centralized here.
 * This service handles:
 * - User login
 * - User registration
 * - User logout
 * - Session validation
 * - Password reset
 * - User profile updates
 */

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  confirmPassword?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface LoginResponse extends AuthResponse {
  message?: string;
}

export interface RegisterResponse extends AuthResponse {
  message?: string;
}

/**
 * Login user
 * @param credentials - User login credentials
 */
export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await axios.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("❌ Error logging in:", error);
    throw error;
  }
};

/**
 * Register new user
 * @param data - User registration data
 */
export const register = async (
  data: RegisterData
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post("/auth/register", data);
    return response.data;
  } catch (error) {
    console.error("❌ Error registering user:", error);
    throw error;
  }
};

/**
 * Logout user
 * This might be a local operation or an API call depending on your backend
 */
export const logout = async (): Promise<void> => {
  try {
    // If your backend requires a logout endpoint, uncomment this:
    // await axios.post("/auth/logout");
    
    // Clear local storage or cookies
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  } catch (error) {
    console.error("❌ Error logging out:", error);
    throw error;
  }
};

/**
 * Get current user session
 */
export const getCurrentUser = async (): Promise<User> => {
  try {
    const response = await axios.get("/auth/me");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching current user:", error);
    throw error;
  }
};

/**
 * Refresh authentication token
 * @param refreshToken - Refresh token
 */
export const refreshToken = async (
  refreshToken: string
): Promise<{ token: string; refreshToken: string }> => {
  try {
    const response = await axios.post("/auth/refresh", { refreshToken });
    return response.data;
  } catch (error) {
    console.error("❌ Error refreshing token:", error);
    throw error;
  }
};

/**
 * Request password reset
 * @param email - User email
 */
export const requestPasswordReset = async (email: string): Promise<void> => {
  try {
    await axios.post("/auth/forgot-password", { email });
  } catch (error) {
    console.error("❌ Error requesting password reset:", error);
    throw error;
  }
};

/**
 * Reset password with token
 * @param token - Reset token
 * @param password - New password
 */
export const resetPassword = async (
  token: string,
  password: string
): Promise<void> => {
  try {
    await axios.post("/auth/reset-password", { token, password });
  } catch (error) {
    console.error("❌ Error resetting password:", error);
    throw error;
  }
};

/**
 * Update user profile
 * @param data - Updated user data
 */
export const updateProfile = async (
  data: Partial<User>
): Promise<User> => {
  try {
    const response = await axios.put("/auth/profile", data);
    return response.data;
  } catch (error) {
    console.error("❌ Error updating profile:", error);
    throw error;
  }
};

