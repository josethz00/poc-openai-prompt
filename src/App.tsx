import { useState } from 'react'
import reactLogo from './assets/react.svg'
import openAiLogo from './assets/openai.png'
import './App.css'
import { OpenAI } from 'langchain/llms'

function App() {
  const [key, setKey] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const getAnswerFromOpenAI = async () => {
    const model = new OpenAI({
      openAIApiKey: key,
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
        <div className="input-card">
          <input type="text" placeholder='Paste you API Key here... ' onChange={(e) => setKey(e.target.value)} />
          <button onClick={() => {}}>
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
          <textarea id="answer-box" placeholder='... ' onChange={(e) => setQuestion(e.target.value)} disabled value={answer} />
        </div>
        <button id="ask-btn" onClick={getAnswerFromOpenAI}>
          Ask
        </button>
      </div>
    </div>
  )
}

export default App
