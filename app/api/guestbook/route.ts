import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'
import validator from 'validator'

export async function GET() {
  try {
    const { data: entries, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) {
      console.error('Error fetching guestbook entries:', error)
      return NextResponse.json(
        { error: 'Failed to fetch entries' },
        { status: 500 }
      )
    }

    return NextResponse.json(entries)
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, message } = body

    // Input validation
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      )
    }

    // Sanitize and validate inputs
    const sanitizedName = validator.escape(name.trim())
    const sanitizedMessage = validator.escape(message.trim())

    if (sanitizedName.length > 50) {
      return NextResponse.json(
        { error: 'Name must be 50 characters or less' },
        { status: 400 }
      )
    }

    if (sanitizedMessage.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be 1000 characters or less' },
        { status: 400 }
      )
    }

    if (sanitizedMessage.split(' ').length > 250) {
      return NextResponse.json(
        { error: 'Message must be 250 words or less' },
        { status: 400 }
      )
    }

    // Basic profanity filter (simple check)
    const profanityWords = ['spam', 'test123', 'badword'] // Add more as needed
    const messageWords = sanitizedMessage.toLowerCase().split(' ')
    const nameWords = sanitizedName.toLowerCase().split(' ')
    
    const hasProfanity = [...messageWords, ...nameWords].some(word => 
      profanityWords.some(profane => word.includes(profane))
    )

    if (hasProfanity) {
      return NextResponse.json(
        { error: 'Please keep your message appropriate' },
        { status: 400 }
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
      return NextResponse.json(
        { error: 'Failed to save entry' },
        { status: 500 }
      )
    }

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}