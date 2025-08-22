'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

const supabaseUrl = 'https://uqtbhutphcsfuhglpndt.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseKey) {
  throw new Error('Missing SUPABASE_KEY environment variable')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export interface GuestbookEntry {
  id: string
  name: string
  message: string
  created_at: string
}

export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  try {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) {
      console.error('Supabase error:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Unexpected error:', error)
    return []
  }
}

export async function addGuestbookEntry(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const message = formData.get('message') as string

    // Server-side validation
    if (!name || !message) {
      return { success: false, error: 'Name and message are required' }
    }

    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    if (trimmedName.length === 0 || trimmedMessage.length === 0) {
      return { success: false, error: 'Name and message cannot be empty' }
    }

    if (trimmedName.length > 50) {
      return { success: false, error: 'Name must be 50 characters or less' }
    }

    if (trimmedMessage.length > 1000) {
      return { success: false, error: 'Message must be 1000 characters or less' }
    }

    // Word count validation
    const wordCount = trimmedMessage.split(/\s+/).filter(word => word.length > 0).length
    if (wordCount > 250) {
      return { success: false, error: 'Message must be 250 words or less' }
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('guestbook')
      .insert({
        name: trimmedName,
        message: trimmedMessage
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: 'Failed to save entry' }
    }

    // Revalidate the page to show the new entry
    revalidatePath('/')

    return { success: true, data }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, error: 'Internal server error' }
  }
}