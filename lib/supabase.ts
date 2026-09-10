import { createClient } from "@supabase/supabase-js";

// Production defaults for live cloud database
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://jbhoainndarrctmsurnu.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_yQ12p6WRZTnNumJ61SXAFQ_XI4tuh8o";

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes("your-project") &&
    !supabaseAnonKey.includes("your-anon-key")
  );
};

// Client for browser and edge environments
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
