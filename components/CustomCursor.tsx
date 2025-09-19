'use client'

import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const requestRef = useRef<number>()

  useEffect(() => {
    // Hide the native cursor on desktop
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      )
    }
    if (!isTouchDevice()) {
      document.body.style.cursor = 'none'
      if (dotRef.current) dotRef.current.style.display = 'block'
      if (ringRef.current) ringRef.current.style.display = 'block'
    } else {
      if (dotRef.current) dotRef.current.style.display = 'none'
      if (ringRef.current) ringRef.current.style.display = 'none'
    }
    return () => {
      document.body.style.cursor = ''
      if (dotRef.current) dotRef.current.style.display = ''
      if (ringRef.current) ringRef.current.style.display = ''
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const animate = () => {
      // Trailing effect for the ring
      ring.current.x += (mouse.current.x - ring.current.x) * 0.35
      ring.current.y += (mouse.current.y - ring.current.y) * 0.35
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`
      }
      requestRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [])

  // Magnetic effect on buttons
  useEffect(() => {
    const handleMouseEnter = (e: Event) => {
      if (ringRef.current) {
        ringRef.current.style.transform += ' scale(1.5)'
        ringRef.current.style.background = 'rgba(59,130,246,0.15)'
        ringRef.current.style.borderColor = '#3b82f6'
      }
      // Hide native cursor for clickable elements
      if (e.target instanceof HTMLElement) {
        e.target.style.cursor = 'none'
      }
    }
    const handleMouseLeave = (e: Event) => {
      if (ringRef.current) {
        ringRef.current.style.transform = ringRef.current.style.transform.replace(' scale(1.5)', '')
        ringRef.current.style.background = 'rgba(255,255,255,0.2)'
        ringRef.current.style.borderColor = 'rgba(255,255,255,0.6)'
      }
      // Restore native cursor
      if (e.target instanceof HTMLElement) {
        e.target.style.cursor = ''
      }
    }
    // Click effect
    const handleMouseDown = () => {
      if (ringRef.current) {
        ringRef.current.style.transform += ' scale(0.85)'
        ringRef.current.style.borderColor = '#f59e42'
        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.transform = ringRef.current.style.transform.replace(' scale(0.85)', '')
            ringRef.current.style.borderColor = '#3b82f6'
          }
        }, 120)
      }
    }
    const buttons = document.querySelectorAll('button, a, .magnetic, [role="button"], .cursor-pointer')
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', handleMouseEnter)
      btn.addEventListener('mouseleave', handleMouseLeave)
      btn.addEventListener('mousedown', handleMouseDown)
    })
    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('mouseenter', handleMouseEnter)
        btn.removeEventListener('mouseleave', handleMouseLeave)
        btn.removeEventListener('mousedown', handleMouseDown)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-ring pointer-events-none fixed z-[9999] left-0 top-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 border-2 border-white/60 rounded-full bg-white/20 transition-all duration-200"
        style={{ transition: 'background 0.2s, border-color 0.2s' }}
      />
    </>
  )
}

export default CustomCursor 