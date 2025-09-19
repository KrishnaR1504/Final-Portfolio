import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '../../../app/generated/prisma'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { type, message } = await request.json()
    
    // Store the event in the database
    const event = await prisma.analyticsEvent.create({
      data: {
        type,
        message,
        userId: null // We'll set this when we have user authentication
      }
    })

    return NextResponse.json({ success: true, event })
  } catch (error) {
    console.error('Error tracking analytics event:', error)
    return NextResponse.json({ success: false, error: 'Failed to track event' }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Get all analytics events for the dashboard
    const events = await prisma.analyticsEvent.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 50 // Limit to last 50 events
    })

    return NextResponse.json({ events })
  } catch (error) {
    console.error('Error fetching analytics events:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch events' }, { status: 500 })
  }
} 