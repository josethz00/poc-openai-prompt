import { useState } from 'react'
import reactLogo from './assets/react.svg'
import openAiLogo from './assets/openai.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://chat.openai.com/" target="_blank">
          <img src={openAiLogo} className="logo" alt="Open AI logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>AI Questions & Answers</h1>
      <div className="card">
        <div className="input-card">
          <input type="text" placeholder='Paste you API Key here... ' />
          <button onClick={() => setCount((count) => count + 1)}>
            Save key
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <textarea placeholder='Ask here... ' />
        </div>
        <button id="ask-btn" onClick={() => setCount((count) => count + 1)}>
          Ask
        </button>
      </div>
    </div>
  )
}

export default App
