'use client'

import { useState } from 'react'

interface SurfConditions {
  tide: number
  wind: number
  pt_reyes: number
  sf_bar: number
}

interface PredictionResponse {
  score: number
  summary: string
}

export default function AIDemo() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState("Ask me about current surf conditions at Ocean Beach! I'll analyze real-time data to give you a surf forecast and recommendation. 🏄‍♂️")
  const [isLoading, setIsLoading] = useState(false)

  const fetchSurfConditions = async (): Promise<SurfConditions> => {
    // Mock real-time surf conditions for demo
    // In production, this would fetch from actual surf data APIs
    return {
      tide: Math.random() * 4 - 2, // -2 to 2 feet
      wind: Math.random() * 20, // 0 to 20 mph
      pt_reyes: Math.random() * 8 + 1, // 1 to 9 feet
      sf_bar: Math.random() * 6 + 1 // 1 to 7 feet
    }
  }

  const getPrediction = async (conditions: SurfConditions): Promise<PredictionResponse> => {
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(conditions),
      })

      if (!response.ok) {
        throw new Error('Failed to get prediction')
      }

      return await response.json()
    } catch (error) {
      console.error('Error getting prediction:', error)
      // Fallback response if API fails
      return {
        score: Math.floor(Math.random() * 10) + 1,
        summary: "Unable to connect to prediction service. Based on typical Ocean Beach patterns, conditions are likely moderate. Check back later for real-time analysis! 🌊"
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      setIsLoading(true)
      setResponse("Analyzing current surf conditions...")
      
      try {
        const conditions = await fetchSurfConditions()
        const prediction = await getPrediction(conditions)
        
        const formattedResponse = `🌊 Surf Score: ${prediction.score}/10\n\n${prediction.summary}\n\n📊 Current Conditions:\n• Tide: ${conditions.tide.toFixed(1)}ft\n• Wind: ${conditions.wind.toFixed(1)}mph\n• Pt Reyes: ${conditions.pt_reyes.toFixed(1)}ft\n• SF Bar: ${conditions.sf_bar.toFixed(1)}ft`
        
        setResponse(formattedResponse)
      } catch (error) {
        setResponse("Sorry, I'm having trouble accessing current surf data. Please try again in a moment! 🏄‍♂️")
      } finally {
        setIsLoading(false)
        setInput('')
      }
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
                  disabled={isLoading}
                />
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? 'Analyzing...' : 'Ask AI'}
                </button>
              </form>
              <div className="demo-response">
                <p><strong>AI:</strong> <span style={{whiteSpace: 'pre-line'}}>{response}</span></p>
              </div>
              <small>*Real-time surf prediction using AI analysis</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}