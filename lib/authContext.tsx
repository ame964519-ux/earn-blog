"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinedDate: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  signup: (name: string, email: string, password?: string) => Promise<boolean>;
  logout: () => void;
  bookmarks: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  bookmarks: [],
  toggleBookmark: () => {},
  isBookmarked: () => false,
});

const AUTH_STORAGE_KEY = "earnsmartly_user_session";
const BOOKMARKS_STORAGE_KEY = "earnsmartly_user_bookmarks";
const USERS_DB_KEY = "earnsmartly_registered_users";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Load user session and bookmarks from browser localStorage on startup
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

      const savedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (savedBookmarks) {
        setBookmarks(JSON.parse(savedBookmarks));
      }
    } catch (e) {
      console.error("Auth session load error:", e);
    }
  }, []);

  const signup = async (name: string, email: string, password?: string): Promise<boolean> => {
    try {
      const trimmedEmail = email.trim().toLowerCase();
      const existingUsersRaw = localStorage.getItem(USERS_DB_KEY);
      const existingUsers: Array<{ name: string; email: string; password?: string }> = existingUsersRaw
        ? JSON.parse(existingUsersRaw)
        : [];

      // Save new user in database
      const newUserRecord = {
        name: name.trim(),
        email: trimmedEmail,
        password: password || "demo123",
      };

      existingUsers.push(newUserRecord);
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(existingUsers));

      const newUser: User = {
        id: `user_${Date.now()}`,
        name: name.trim(),
        email: trimmedEmail,
        avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
        joinedDate: new Date().toISOString().split("T")[0],
      };

      setUser(newUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
      return true;
    } catch (e) {
      console.error("Signup error:", e);
      return false;
    }
  };

  const login = async (email: string, password?: string): Promise<boolean> => {
    try {
      const trimmedEmail = email.trim().toLowerCase();
      const existingUsersRaw = localStorage.getItem(USERS_DB_KEY);
      const existingUsers: Array<{ name: string; email: string; password?: string }> = existingUsersRaw
        ? JSON.parse(existingUsersRaw)
        : [];

      const found = existingUsers.find((u) => u.email === trimmedEmail);
      const displayName = found ? found.name : trimmedEmail.split("@")[0].toUpperCase();

      const loggedUser: User = {
        id: `user_${Date.now()}`,
        name: displayName,
        email: trimmedEmail,
        avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
        joinedDate: new Date().toISOString().split("T")[0],
      };

      setUser(loggedUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(loggedUser));
      return true;
    } catch (e) {
      console.error("Login error:", e);
      return false;
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
