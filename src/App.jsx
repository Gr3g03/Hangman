import { useState } from 'react'
import './App.css'

function App() {

  let words = ['bench', 'advance', 'potato', 'medieval', 'aluminium', 'circulation', 'mercy']


  const [letter, setletter] = useState(getRandomWord(words))

  function KeyPressElement() {
    function handleKeyPress() {
      console.log("You pressed a key.")
    }
    return (
      <div>
        <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
      </div>
    )
  }

  console.log(KeyPressElement())

  function getRandomWord(words) {
    const randomWord = Math.floor(Math.random() * words.length)
    return words[randomWord]
  }



  return (
    <div className="App">

      <span>{letter}</span>

    </div>
  )
}

export default App
