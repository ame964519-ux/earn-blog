"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase, isSupabaseConfigured } from "./supabase";

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

  // Load session and bookmarks
  useEffect(() => {
    try {
      if (isSupabaseConfigured()) {
        // 1. Supabase Session Listener
        supabase.auth.getSession().then(({ data: { session } }) => {
          if (session?.user) {
            const mappedUser: User = {
              id: session.user.id,
              name: session.user.user_metadata?.name || session.user.email?.split("@")[0] || "User",
              email: session.user.email || "",
              avatar: session.user.user_metadata?.avatar_url || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
              joinedDate: new Date(session.user.created_at).toISOString().split("T")[0],
            };
            setUser(mappedUser);
            loadSupabaseBookmarks(session.user.id);
          } else {
            loadLocalSession();
          }
        });

        const { data: authListener } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            if (session?.user) {
              const mappedUser: User = {
                id: session.user.id,
                name: session.user.user_metadata?.name || session.user.email?.split("@")[0] || "User",
                email: session.user.email || "",
                avatar: session.user.user_metadata?.avatar_url || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
                joinedDate: new Date(session.user.created_at).toISOString().split("T")[0],
              };
              setUser(mappedUser);
              loadSupabaseBookmarks(session.user.id);
            } else if (event === "SIGNED_OUT") {
              setUser(null);
              setBookmarks([]);
              localStorage.removeItem(AUTH_STORAGE_KEY);
              localStorage.removeItem(BOOKMARKS_STORAGE_KEY);
            }
          }
        );

        return () => {
          authListener?.subscription.unsubscribe();
        };
      } else {
        loadLocalSession();
      }
    } catch (e) {
      console.error("Auth initialization error:", e);
      loadLocalSession();
    }
  }, []);

  const loadLocalSession = () => {
    try {
      const existingUsersRaw = localStorage.getItem(USERS_DB_KEY);
      if (!existingUsersRaw) {
        localStorage.setItem(USERS_DB_KEY, JSON.stringify(INITIAL_REGISTERED_USERS));
      } else {
        const users = JSON.parse(existingUsersRaw);
        if (!users.some((u: any) => u.email === "ame964519@gmail.com")) {
          users.push(INITIAL_REGISTERED_USERS[0]);
          localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
        }
      }

      const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

      const savedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (savedBookmarks) {
        setBookmarks(JSON.parse(savedBookmarks));
      }
    } catch (e) {
      console.error("Local session load error:", e);
    }
  };

  const loadSupabaseBookmarks = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("bookmarks")
        .select("post_slug")
        .eq("user_id", userId);

      if (!error && data) {
        const slugs = data.map((b) => b.post_slug);
        setBookmarks(slugs);
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(slugs));
      }
    } catch (err) {
      console.warn("Could not fetch Supabase bookmarks:", err);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<AuthResponse> => {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    if (!trimmedName || !trimmedEmail || !password) {
      return { success: false, error: "Please fill in all registration fields." };
    }

    if (password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters long." };
    }

    // If Supabase is connected
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: trimmedEmail,
          password: password,
          options: {
            data: {
              name: trimmedName,
              avatar_url: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
            },
          },
        });

        if (error) {
          return { success: false, error: error.message };
        }

        if (data.user) {
          const newUser: User = {
            id: data.user.id,
            name: trimmedName,
            email: trimmedEmail,
            avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
            joinedDate: new Date().toISOString().split("T")[0],
          };
          setUser(newUser);
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
          return { success: true };
        }
      } catch (err: any) {
        console.error("Supabase signup exception:", err);
      }
    }

    // Local / Offline Fallback Mode
    try {
      const existingUsersRaw = localStorage.getItem(USERS_DB_KEY);
      const existingUsers: Array<{ name: string; email: string; password?: string }> = existingUsersRaw
        ? JSON.parse(existingUsersRaw)
        : [...INITIAL_REGISTERED_USERS];

      const alreadyExists = existingUsers.some((u) => u.email.toLowerCase() === trimmedEmail);
      if (alreadyExists) {
        return {
          success: false,
          error: "An account with this email address already exists. Please sign in instead.",
        };
      }

      existingUsers.push({
        name: trimmedName,
        email: trimmedEmail,
        password: password,
      });
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(existingUsers));

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
      return { success: false, error: "Failed to create account. Please try again." };
    }
  };

  const login = async (email: string, password: string): Promise<AuthResponse> => {
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail || !password) {
      return { success: false, error: "Please enter both your email address and password." };
    }

    // If Supabase is connected
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: trimmedEmail,
          password: password,
        });

        if (error) {
          return { success: false, error: error.message };
        }

        if (data.user) {
          const loggedUser: User = {
            id: data.user.id,
            name: data.user.user_metadata?.name || trimmedEmail.split("@")[0],
            email: trimmedEmail,
            avatar: data.user.user_metadata?.avatar_url || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
            joinedDate: new Date(data.user.created_at).toISOString().split("T")[0],
          };
          setUser(loggedUser);
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(loggedUser));
          loadSupabaseBookmarks(data.user.id);
          return { success: true };
        }
      } catch (err: any) {
        console.error("Supabase login exception:", err);
      }
    }

    // Local / Offline Fallback Mode
    try {
      const existingUsersRaw = localStorage.getItem(USERS_DB_KEY);
      const existingUsers: Array<{ name: string; email: string; password?: string }> = existingUsersRaw
        ? JSON.parse(existingUsersRaw)
        : [...INITIAL_REGISTERED_USERS];

      const found = existingUsers.find((u) => u.email.toLowerCase() === trimmedEmail);
      if (!found) {
        return {
          success: false,
          error: `No account found for "${trimmedEmail}". Please check your email or click 'Create Free Account' below.`,
        };
      }

      if (found.password !== password) {
        return {
          success: false,
          error: "Incorrect password entered. Please check your password and try again.",
        };
      }

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
      return { success: false, error: "Authentication system error. Please try again." };
    }
  };

  const logout = async () => {
    if (isSupabaseConfigured()) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.warn("Supabase signout warning:", e);
      }
    }
    setUser(null);
    setBookmarks([]);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(BOOKMARKS_STORAGE_KEY);
  };

  const toggleBookmark = async (slug: string) => {
    let updated: string[];
    const isCurrentlySaved = bookmarks.includes(slug);

    if (isCurrentlySaved) {
      updated = bookmarks.filter((s) => s !== slug);
    } else {
      updated = [...bookmarks, slug];
    }

    setBookmarks(updated);
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));

    // Sync with Supabase Cloud DB if user is logged in
    if (isSupabaseConfigured() && user) {
      try {
        if (isCurrentlySaved) {
          await supabase
            .from("bookmarks")
            .delete()
            .match({ user_id: user.id, post_slug: slug });
        } else {
          await supabase
            .from("bookmarks")
            .insert([{ user_id: user.id, post_slug: slug }]);
        }
      } catch (dbErr) {
        console.warn("Supabase bookmark sync error:", dbErr);
      }
    }
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
