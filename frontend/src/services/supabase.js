import { createClient } from '@supabase/supabase-js';

// Import environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if supabase config exists
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL and key must be provided in environment variables!');
}

// Create client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
