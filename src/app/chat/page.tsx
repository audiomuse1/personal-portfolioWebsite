'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ChatPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ user: string; ai: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    const userMessage = input
    setInput('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await res.json()
      if (data.error) throw new Error(data.error)
      
      setMessages([...messages, { user: userMessage, ai: data.reply }])
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">AI Chat Assistant</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 h-[500px] overflow-y-auto">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <div className="flex gap-2 mb-2">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-2 rounded-lg">
                  You:
                </span>
                <p className="py-2">{msg.user}</p>
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg">
                  AI:
                </span>
                <p className="py-2">{msg.ai}</p>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex gap-2">
              <span className="bg-gray-100 px-3 py-2 rounded-lg animate-pulse">
                Thinking...
              </span>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 border px-4 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask me anything about Andrew..."
            disabled={isLoading}
          />
          <button
            className={`bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={sendMessage}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  )
}