'use client'

import { motion } from 'framer-motion'

const AnimatedLogo = ({ className = "h-16 w-auto", fill = "url(#logoGradient)", animatedGradient = true }: { className?: string, fill?: string, animatedGradient?: boolean }) => {
  const goldGradientId = 'goldGradient';

  return (
    <motion.svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      viewBox="0 0 500.000000 500.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          {animatedGradient ? (
            <>
              <motion.stop
                offset="0%"
                stopColor="#0ea5e9"
                animate={{ stopColor: ["#0ea5e9", "#8b5cf6", "#ec4899", "#f59e0b", "#0ea5e9"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.stop
                offset="50%"
                stopColor="#38bdf8"
                animate={{ stopColor: ["#38bdf8", "#a855f7", "#f472b6", "#fbbf24", "#38bdf8"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.stop
                offset="100%"
                stopColor="#7dd3fc"
                animate={{ stopColor: ["#7dd3fc", "#c084fc", "#f9a8d4", "#fcd34d", "#7dd3fc"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </>
          )}
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFC300" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
        
        {/* Glow filter (removed for compatibility) */}
        {/* <filter id="glow"> ... </filter> */}
      </defs>

      <g 
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill={fill === 'gold-gradient' ? 'url(#goldGradient)' : fill}
        stroke="none"
      >
        <motion.path
          d="M1220 2485 l0 -565 120 0 120 0 2 253 3 252 179 -252 178 -253 164 0
          c90 0 164 2 164 5 0 2 -96 125 -213 272 -117 148 -216 273 -220 280 -5 8 42
          77 123 182 72 94 135 173 139 176 10 6 14 -4 220 -515 l160 -395 108 -3 108
          -3 160 397 160 397 3 -397 2 -396 125 0 125 0 2 197 3 196 130 -196 130 -197
          159 0 158 0 -28 38 c-16 20 -88 113 -161 206 l-132 169 58 27 c266 126 261
          532 -8 659 l-56 26 -321 3 -321 3 -140 -383 c-78 -211 -144 -394 -148 -407 -6
          -21 -16 0 -56 115 -27 76 -93 258 -147 404 l-98 265 -176 3 -176 2 -179 -252
          -178 -253 -3 253 -2 252 -120 0 -120 0 0 -565z m2134 346 c51 -32 80 -98 72
          -164 -6 -55 -25 -88 -70 -121 -22 -17 -46 -22 -117 -24 l-89 -4 0 172 0 173
          84 -5 c63 -4 94 -11 120 -27z"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </g>
    </motion.svg>
  )
}

export default AnimatedLogo 