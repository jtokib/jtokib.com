import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uqtbhutphcsfuhglpndt.supabase.co'
// Use NEXT_PUBLIC_ for client-side access - this is safe for anon keys
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || ''

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)