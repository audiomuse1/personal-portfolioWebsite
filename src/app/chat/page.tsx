'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageHeading from '../../components/PageHeading'

export default function ChatPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ user: string; ai: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

  return isMobile ? (
    <div className="flex flex-col h-[calc(100vh-4rem)] pt-16">
      {/* Mobile chat layout */}
      <div className="flex-shrink-0 px-4 py-3">
        <PageHeading>AI Chat Assistant</PageHeading>
      </div>
      
      <div className="flex-1 overflow-hidden px-4">
        <div className="h-full overflow-y-auto pb-4">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-4"
              >
                <div className="flex gap-2 mb-2">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg text-sm">
                    You
                  </span>
                  <p className="leading-relaxed">{msg.user}</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">
                    AI
                  </span>
                  <p className="leading-relaxed">{msg.ai}</p>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="bg-white rounded-lg shadow-sm p-4">
                <span className="bg-gray-100 px-3 py-1 rounded-lg animate-pulse inline-block">
                  Thinking...
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      
      <div className="flex-shrink-0 p-4 bg-white border-t">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <input
            className="flex-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-base"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask me anything..."
            disabled={isLoading}
          />
          <button
            className={`bg-emerald-800 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex-shrink-0 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={sendMessage}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mx-auto px-4 py-8 mt-16">
      <PageHeading>AI Chat Assistant</PageHeading>
      
      <div className="max-w-4xl mx-auto">
        <div className="border rounded-lg bg-white shadow-lg mb-4">
          <div className="h-[500px] overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 rounded-lg shadow-sm p-4"
                >
                  <div className="flex gap-2 mb-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg text-sm">
                      You
                    </span>
                    <p className="leading-relaxed">{msg.user}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">
                      AI
                    </span>
                    <p className="leading-relaxed">{msg.ai}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="bg-gray-50 rounded-lg shadow-sm p-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-lg animate-pulse inline-block">
                    Thinking...
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <input
            className="flex-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-base"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask me anything..."
            disabled={isLoading}
          />
          <button
            className={`bg-emerald-800 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex-shrink-0 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={sendMessage}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}