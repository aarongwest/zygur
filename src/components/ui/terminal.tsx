'use client'

import { useEffect, useRef, useState } from 'react'
import { LoadingSpinner } from './loading-spinner'

interface Message {
  type: 'input' | 'response'
  content: string
}

export function Terminal() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user input to messages
    setMessages(prev => [...prev, { type: 'input', content: input }])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'response',
        content: `I'm a simulated AI response. You said: "${input}". In the future, I'll be connected to a real AI service.`
      }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e]">
      {/* Header */}
      <div className="px-4 py-2 border-b border-[#2d2d2d] flex items-center bg-[#2d2d2d] hover:bg-[#323232] transition-colors cursor-default">
        <h2 className="text-sm font-medium text-zinc-200">AI Assist</h2>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 hover:bg-[#1f1f1f] transition-colors">
        <div className="font-mono text-xs space-y-4">
          {/* Welcome message */}
          {messages.length === 0 && (
            <div className="text-zinc-500">
              Welcome to the AI assistant. Type your message and press Enter.
            </div>
          )}

          {/* Message history */}
          {messages.map((message, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-start space-x-2">
                <span className="text-zinc-500 mt-1">$</span>
                <span className="text-zinc-300 whitespace-pre-wrap leading-relaxed">{message.content}</span>
              </div>
              {message.type === 'response' && i !== messages.length - 1 && (
                <div className="border-b border-[#2d2d2d] mt-4" />
              )}
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-center space-x-2">
              <span className="text-zinc-500">$</span>
              <LoadingSpinner />
            </div>
          )}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-[#2d2d2d] bg-[#2d2d2d]">
        <form onSubmit={handleSubmit}>
          <div className="px-4 py-3">
            <div className="flex items-center space-x-2 bg-[#3c3c3c] hover:bg-[#444444] rounded px-3 py-2.5 focus-within:ring-1 focus-within:ring-accent-orange transition-all duration-150">
              <span className="text-zinc-500 text-xs select-none">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-zinc-200 text-xs outline-none placeholder:text-zinc-600"
                placeholder="Type your message..."
                disabled={isLoading}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
