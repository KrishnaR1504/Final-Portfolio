"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (username === "krizhnx" && password === "Krishna15042005$") {
      localStorage.setItem("isLoggedIn", "true")
      router.push("/dashboard")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/20 focus:outline-none focus:border-primary-500 text-white"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/20 focus:outline-none focus:border-primary-500 text-white"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}
        <button type="submit" className="button-primary w-full">Login</button>
      </form>
    </div>
  )
} 