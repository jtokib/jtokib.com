import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client with server-side key
const supabaseUrl = 'https://uqtbhutphcsfuhglpndt.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  // Handle CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  try {
    if (req.method === 'GET') {
      // Fetch guestbook entries
      const { data: entries, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        console.error('Error fetching guestbook entries:', error)
        return new Response(
          JSON.stringify({ error: 'Failed to fetch entries' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      return new Response(JSON.stringify(entries), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    if (req.method === 'POST') {
      // Add new guestbook entry
      const body = await req.json()
      const { name, message } = body

      // Input validation
      if (!name || !message) {
        return new Response(
          JSON.stringify({ error: 'Name and message are required' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      // Sanitize inputs
      const sanitizedName = name.trim().substring(0, 50)
      const sanitizedMessage = message.trim().substring(0, 1000)

      // Word count validation
      const wordCount = sanitizedMessage.split(/\s+/).filter((word: string) => word.length > 0).length
      if (wordCount > 250) {
        return new Response(
          JSON.stringify({ error: 'Message must be 250 words or less' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      // Insert new entry
      const { data, error } = await supabase
        .from('guestbook')
        .insert([
          {
            name: sanitizedName,
            message: sanitizedMessage
          }
        ])
        .select()

      if (error) {
        console.error('Error inserting guestbook entry:', error)
        return new Response(
          JSON.stringify({ error: 'Failed to save entry' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      return new Response(JSON.stringify(data[0]), {
        status: 201,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
}