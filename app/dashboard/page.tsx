"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AnalyticsEvent {
  id: string
  type: string
  message: string
  createdAt: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [events, setEvents] = useState<AnalyticsEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("isLoggedIn") !== "true") {
      router.push("/login")
      return
    }

    // Fetch analytics events
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/analytics')
        const data = await response.json()
        if (data.success) {
          setEvents(data.events)
        }
      } catch (error) {
        console.error('Failed to fetch events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [router])

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'contact_form_submit':
        return '📧'
      case 'social_link_click':
        return '🔗'
      default:
        return '📊'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-900 section-padding">
      <div className="container-custom">
        <div className="glass-effect p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Analytics Dashboard</h2>
          
          {/* Google Analytics Info */}
          <div className="mb-8 p-4 bg-dark-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 gradient-text">Google Analytics</h3>
            <p className="text-gray-400 mb-2">Measurement ID: G-JJ65ZPP89Q</p>
            <p className="text-gray-400 text-sm">
              View detailed analytics at{' '}
              <a 
                href="https://analytics.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:underline"
              >
                analytics.google.com
              </a>
            </p>
          </div>

          {/* Analytics Events */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Tracked Events</h3>
            {events.length === 0 ? (
              <div className="bg-dark-800 rounded-lg p-4 text-gray-400 text-center">
                No events tracked yet. Events will appear here when visitors interact with your site.
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {events.map((event) => (
                  <div key={event.id} className="bg-dark-800 rounded-lg p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{getEventIcon(event.type)}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-white">{event.type}</span>
                          <span className="text-xs text-gray-500">{formatDate(event.createdAt)}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{event.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Event Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-400">
                {events.filter(e => e.type === 'contact_form_submit').length}
              </div>
              <div className="text-gray-400 text-sm">Contact Form Submissions</div>
            </div>
            <div className="bg-dark-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-400">
                {events.filter(e => e.type === 'social_link_click').length}
              </div>
              <div className="text-gray-400 text-sm">Social Link Clicks</div>
            </div>
            <div className="bg-dark-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-400">
                {events.length}
              </div>
              <div className="text-gray-400 text-sm">Total Events</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 