import { NextRequest, NextResponse } from 'next/server'
import { createGuestbookServiceForEnvironment, type CreateGuestbookEntryInput } from '../../../lib/guestbook/server'

export async function GET() {
  try {
    const service = createGuestbookServiceForEnvironment()
    const result = await service.getEntries()

    if (!result.success) {
      console.error('Service error:', result.error)
      const errorMessage = result.error?.message || result.error?.userMessage || 'Failed to fetch guestbook entries'
      return NextResponse.json(
        { error: errorMessage },
        { 
          status: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      )
    }

    return NextResponse.json(result.data || [], {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, message } = body as CreateGuestbookEntryInput

    const service = createGuestbookServiceForEnvironment()
    const result = await service.createEntry({ name, message })

    if (!result.success) {
      const errorMessage = result.error?.message || result.error?.userMessage || ''
      const status = errorMessage.includes('validation') || errorMessage.includes('required') || 
                     errorMessage.includes('characters') || errorMessage.includes('words') ? 400 : 500
      
      return NextResponse.json(
        { error: errorMessage || 'Failed to create guestbook entry' },
        { 
          status,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      )
    }

    return NextResponse.json(result.data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}