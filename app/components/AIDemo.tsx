'use client'

import { useState } from 'react'

export default function AIDemo() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState("Based on current buoy data, Ocean Beach has 3-5ft waves with offshore winds. Perfect conditions for dawn patrol! 🏄‍♂️")

  const responses = [
    "Based on current buoy data, Ocean Beach has 3-5ft waves with offshore winds. Perfect conditions for dawn patrol! 🏄‍♂️",
    "Conditions are looking choppy with 2-3ft waves and onshore winds. Maybe a good day for Tealium debugging instead! 💻",
    "Solid 4-6ft waves with light offshore winds. Reminds me of those Okinawa reef breaks! 🌊",
    "Small 1-2ft waves today, but the evening glass-off could make it worth a sunset session. Time to check my Ceanothus watering schedule too! 🌅",
    "Clean 2-3ft waves with light texture. Perfect for testing that new surfboard repair job! 🏄‍♂️",
    "Firing 6ft+ surf! Grab your board and forget about Google Analytics for the day! 🌊"
  ]

  const getRandomResponse = () => {
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setResponse(getRandomResponse())
      setInput('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <section id="ai-demo" className="ai-demo">
      <div className="container">
        <h2>AI in Action</h2>
        <div className="ai-demo-content">
          <div className="ai-demo-text">
            <p>
              Experience how I combine AI with domain expertise. This demo showcases 
              an AI assistant trained on surf forecasting data and Ocean Beach conditions.
            </p>
            <div className="ai-features">
              <div className="ai-feature">
                <span className="feature-icon">🧠</span>
                <div>
                  <h4>Smart Analysis</h4>
                  <p>Processes real-time surf data</p>
                </div>
              </div>
              <div className="ai-feature">
                <span className="feature-icon">🌊</span>
                <div>
                  <h4>Local Knowledge</h4>
                  <p>Trained on Ocean Beach patterns</p>
                </div>
              </div>
              <div className="ai-feature">
                <span className="feature-icon">⚡</span>
                <div>
                  <h4>Instant Insights</h4>
                  <p>Get surf recommendations instantly</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-demo-widget">
            <div className="demo-placeholder">
              <h3>🤖 Surf AI Assistant</h3>
              <p>Ask me about current surf conditions at Ocean Beach!</p>
              <form onSubmit={handleSubmit} className="demo-input">
                <input 
                  type="text" 
                  placeholder="Try: 'How are the waves today?'"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button type="submit" className="btn btn-primary">Ask AI</button>
              </form>
              <div className="demo-response">
                <p><strong>AI:</strong> {response}</p>
              </div>
              <small>*Demo interface - connect your own AI service</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}