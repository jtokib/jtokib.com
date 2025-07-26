import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uqtbhutphcsfuhglpndt.supabase.co'
// Use NEXT_PUBLIC_ prefix for client-side access, fallback to server-side var for build
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || process.env.SUPABASE_KEY || ''

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)