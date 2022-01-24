import { useState } from 'react'
import './App.css'

function App() {

  let words = ['bench', 'advance', 'potato', 'medieval', 'aluminium', 'circulation', 'mercy']


  const [letter, setletter] = useState(getRandomWord(words))
  const [keyPress, SetkeyPress] = useState('')
  const [guesses, setGuess] = useState([])

  // function KeyPressElement() {
  //   function handleKeyPress() {
  //     console.log("You pressed a key.")
  //   }
  //   return (
  //     <div>
  //       <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
  //     </div>
  //   )
  // }

  // const handler = (e) => {
  //   SetkeyPress(e.key)

  // }

  // <input type="text" onKeyPress={(e) => handler(e)} />

  // console.log(handler())




  function getRandomWord(words) {
    const randomWord = Math.floor(Math.random() * words.length)
    return words[randomWord]
  }


  function getRightGuesses() {
    return guesses.filter(function (word) {
      return letter.includes(word)
    })
  }

  function getRightGuesses() {
    return guesses.filter(function (word) {
      return !letter.includes(word)
    })
  }


  return (
    <div className="App">

      <span>{letter}</span>

    </div>
  )
}

export default App
