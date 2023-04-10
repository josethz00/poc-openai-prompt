import { useState } from 'react'
import reactLogo from './assets/react.svg'
import openAiLogo from './assets/openai.png'
import './App.css'
import { OpenAI } from 'langchain/llms'

function App() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const getAnswerFromOpenAI = async () => {
    const model = new OpenAI({
      openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    })

    const res = await model.call(
      question,
    )
    console.log(res)
    setAnswer(res)
  }

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <textarea placeholder='Ask here... ' onChange={(e) => setQuestion(e.target.value)} />
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <textarea id="answer-box" placeholder='Here goes the answer... ' onChange={(e) => setQuestion(e.target.value)} disabled value={answer} />
        </div>
        <button id="ask-btn" onClick={getAnswerFromOpenAI}>
          Ask
        </button>
      </div>
    </div>
  )
}

export default App
