"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinedDate: string;
}

interface AuthResponse {
  success: boolean;
  error?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<AuthResponse>;
  signup: (name: string, email: string, password: string) => Promise<AuthResponse>;
  logout: () => void;
  bookmarks: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => ({ success: false }),
  signup: async () => ({ success: false }),
  logout: () => {},
  bookmarks: [],
  toggleBookmark: () => {},
  isBookmarked: () => false,
});

const AUTH_STORAGE_KEY = "earnsmartly_user_session";
const BOOKMARKS_STORAGE_KEY = "earnsmartly_user_bookmarks";
const USERS_DB_KEY = "earnsmartly_registered_users";

// Default registered accounts for testing
const INITIAL_REGISTERED_USERS = [
  {
    name: "Admin Abdullah",
    email: "ame964519@gmail.com",
    password: "password123",
  },
  {
    name: "EarnSmartly Member",
    email: "member@earnsmartly.com",
    password: "password123",
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Initialize DB and load session on mount
  useEffect(() => {
    try {
      // Ensure seed accounts exist in user database
      const existingUsersRaw = localStorage.getItem(USERS_DB_KEY);
      if (!existingUsersRaw) {
        localStorage.setItem(USERS_DB_KEY, JSON.stringify(INITIAL_REGISTERED_USERS));
      } else {
        const users = JSON.parse(existingUsersRaw);
        // Ensure admin account is always present
        if (!users.some((u: any) => u.email === "ame964519@gmail.com")) {
          users.push(INITIAL_REGISTERED_USERS[0]);
          localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
        }
      }

      // Load active session
      const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

      // Load bookmarks
      const savedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (savedBookmarks) {
        setBookmarks(JSON.parse(savedBookmarks));
      }
    } catch (e) {
      console.error("Auth session load error:", e);
    }
  }, []);

  const signup = async (name: string, email: string, password: string): Promise<AuthResponse> => {
    try {
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedName = name.trim();

      if (!trimmedName || !trimmedEmail || !password) {
        return { success: false, error: "Please fill in all registration fields." };
      }

      if (password.length < 6) {
        return { success: false, error: "Password must be at least 6 characters long." };
      }

      const existingUsersRaw = localStorage.getItem(USERS_DB_KEY);
      const existingUsers: Array<{ name: string; email: string; password?: string }> = existingUsersRaw
        ? JSON.parse(existingUsersRaw)
        : [...INITIAL_REGISTERED_USERS];

      // Check if user already exists
      const alreadyExists = existingUsers.some((u) => u.email.toLowerCase() === trimmedEmail);
      if (alreadyExists) {
        return {
          success: false,
          error: "An account with this email address already exists. Please sign in instead.",
        };
      }

      // Save new user record
      const newUserRecord = {
        name: trimmedName,
        email: trimmedEmail,
        password: password,
      };

      existingUsers.push(newUserRecord);
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(existingUsers));

      // Create session
      const newUser: User = {
        id: `user_${Date.now()}`,
        name: trimmedName,
        email: trimmedEmail,
        avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
        joinedDate: new Date().toISOString().split("T")[0],
      };

      setUser(newUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
      return { success: true };
    } catch (e) {
      console.error("Signup error:", e);
      return { success: false, error: "Failed to create account. Please try again." };
    }
  };

  const login = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const trimmedEmail = email.trim().toLowerCase();

      if (!trimmedEmail || !password) {
        return { success: false, error: "Please enter both your email address and password." };
      }

      const existingUsersRaw = localStorage.getItem(USERS_DB_KEY);
      const existingUsers: Array<{ name: string; email: string; password?: string }> = existingUsersRaw
        ? JSON.parse(existingUsersRaw)
        : [...INITIAL_REGISTERED_USERS];

      // 1. STRICT CHECK: Does user exist?
      const found = existingUsers.find((u) => u.email.toLowerCase() === trimmedEmail);
      if (!found) {
        return {
          success: false,
          error: `No account found for "${trimmedEmail}". Please check your email or click 'Create Free Account' below.`,
        };
      }

      // 2. STRICT CHECK: Does password match?
      if (found.password !== password) {
        return {
          success: false,
          error: "Incorrect password entered. Please check your password and try again.",
        };
      }

      // Valid credentials -> Log user in
      const loggedUser: User = {
        id: `user_${Date.now()}`,
        name: found.name,
        email: found.email,
        avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
        joinedDate: new Date().toISOString().split("T")[0],
      };

      setUser(loggedUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(loggedUser));
      return { success: true };
    } catch (e) {
      console.error("Login error:", e);
      return { success: false, error: "Authentication system error. Please try again." };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const toggleBookmark = (slug: string) => {
    setBookmarks((prev) => {
      let updated: string[];
      if (prev.includes(slug)) {
        updated = prev.filter((s) => s !== slug);
      } else {
        updated = [...prev, slug];
      }
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmarked = (slug: string) => {
    return bookmarks.includes(slug);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        bookmarks,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
