'use client'

import { useState } from 'react'
import Link from 'next/link'

interface PasswordLinkProps {
  href: string
  children: React.ReactNode
  password: string
  className?: string
}

export function PasswordLink({ href, children, password, className }: PasswordLinkProps) {
  const [showPrompt, setShowPrompt] = useState(false)
  const [inputPassword, setInputPassword] = useState('')

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPrompt(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputPassword === password) {
      window.location.href = href
    } else {
      alert('Incorrect password')
      setInputPassword('')
    }
  }

  const handleCancel = () => {
    setShowPrompt(false)
    setInputPassword('')
  }

  if (showPrompt) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 max-w-sm w-full mx-4">
          <h3 className="text-white text-lg font-semibold mb-4">Enter Password</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-600 rounded text-white mb-4 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              autoFocus
            />
            <div className="flex space-x-3">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              >
                Enter
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white py-2 px-4 rounded transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <a href="#" onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
