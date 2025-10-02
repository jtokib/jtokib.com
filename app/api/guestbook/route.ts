import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { validateEntry, sanitizeEntry, type CreateEntryInput } from '../../../lib/guestbook-simple'
import { CORS_HEADERS } from '../cors'

function getSupabaseClient() {
  return createClient(
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export async function GET() {
  try {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch guestbook entries' },
        {
          status: 500,
          headers: CORS_HEADERS
        }
      )
    }

    return NextResponse.json(data || [], {
      headers: CORS_HEADERS
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      {
        status: 500,
        headers: CORS_HEADERS
      }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const input = body as CreateEntryInput

    // Validate input
    const validationError = validateEntry(input)
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        {
          status: 400,
          headers: CORS_HEADERS
        }
      )
    }

    // Sanitize input
    const sanitized = sanitizeEntry(input)

    // Insert into database
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('guestbook')
      .insert([sanitized])
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to create guestbook entry' },
        {
          status: 500,
          headers: CORS_HEADERS
        }
      )
    }

    return NextResponse.json(data, {
      headers: CORS_HEADERS
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      {
        status: 500,
        headers: CORS_HEADERS
      }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: CORS_HEADERS,
  })
}