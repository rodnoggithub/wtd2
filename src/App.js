import './App.css'
import { useState } from 'react'
import { FaMapMarkedAlt, FaTelegramPlane } from 'react-icons/fa'
import api from './services/api'

function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [dist, setDist] = useState('')

  async function calcDist() {
    if (input1.length !== 5 || input2.length !== 5) {
      alert('Invalid ZIP CODE')
      return
    }
    try {
      const response = await api.get(`${input1}&zip2=${input2}&format=json`)
      setDist(response.data.results.distance)
      setInput1('')
      setInput2('')
    } catch {
      alert('Oops, somewhing went wrong...')
      return
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="cabec">
          <FaMapMarkedAlt size={25} color="#bdbdbd" className="figur" />
          <p className="App-header-p">WTD?</p>
        </div>
        <h1 className="App-header-h1">
          What's
          <br /> the
          <br /> Distance?
        </h1>
        <div className="divinput1">
          <input
            className="input1"
            type="text"
            placeholder="ZIP CODE 1"
            value={input1}
            onChange={e => setInput1(e.target.value)}
          ></input>
        </div>
        <div className="divinput2">
          <input
            className="input2"
            type="text"
            placeholder="ZIP CODE 2"
            value={input2}
            onChange={e => setInput2(e.target.value)}
          ></input>
        </div>
        <div className="botaum">
          <button onClick={calcDist}>
            <FaTelegramPlane size={15} />
            <span>FIND!</span>
          </button>
        </div>
        {Object.keys(dist).length > 0 && (
          <h3>THE DISTANCE IS: {dist} MILES </h3>
        )}
      </header>
    </div>
  )
}

export default App
