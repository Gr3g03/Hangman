import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let words = ['bench', 'advance', 'potato', 'medieval', 'aluminium', 'circulation', 'mercy']


  const [letter, setletter] = useState(getRandomWord(words))
  // const [keyPress, SetkeyPress] = useState('')
  const [guesses, setGuess] = useState([])



  useEffect(() => {
    document.addEventListener('keypress', function (e) {

      if (!guesses.includes(e.key)) {

        setGuess(e.key)
      }

    })
  }, [])


  function getRandomWord(words) {
    const randomWord = Math.floor(Math.random() * words.length)
    return words[randomWord]
  }


  function rightGuesses() {
    return guesses.filter(function (word) {
      return letter.includes(word)
    })
  }

  function wrongGuesses() {
    return guesses.filter(function (word) {
      return !letter.includes(word)
    })
  }

  // const allWrongGuesses = wrongGuesses()


  return (
    <div className="App">

      <span>{letter}</span>
      <span> {wrongGuesses.length} </span>

    </div>
  )
}

export default App
