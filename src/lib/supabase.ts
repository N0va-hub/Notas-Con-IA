import { createClient } from '@supabase/supabase-js';

// Esto lee las llaves que pusiste en el archivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Creamos la conexión para que page.tsx pueda usarla
export const supabase = createClient(supabaseUrl, supabaseAnonKey);