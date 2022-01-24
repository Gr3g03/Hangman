import { useState } from 'react'
import './App.css'

function App() {

  let words = ['bench', 'advance', 'potato', 'medieval', 'aluminium', 'circulation', 'mercy']

  // const [word1, setword1] = useState(
  //   {
  //     word: getRandomWord(words)
  //   })

  function getRandomWord(words) {
    const randomWord = Math.floor(Math.random() * words.length)
    return words[randomWord]
  }



  return (
    <div className="App">
      <span>{getRandomWord(words)}</span>

    </div>
  )
}

export default App
