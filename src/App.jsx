import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const letters = 'abcdefghijklmnopqrstuvwxyz'

  let words =
    ['bench',
      'advance',
      'potato',
      'medieval',
      'aluminium',
      'circulation',
      'mercy',
      'execution',
      'deteriorate',
      'arrangement',
      'banquet',
      'employ',
      'start',
      'dollar',
      'timetable',
      'secretary',
      'prisoner',
      'glasses',
      'letter',
      'sanctuary',
      'current',
      'arena',
      'budge',
      'escape',
      'participate',
      'snail',
      'excavate',
      'powder',
      'leash',
      'circulation',
      'master',
      'plaintiff',
      'suppress',
      'chain',
      'center',
      'sight',
      'necklace',
      'block',
      'guide',
      'bless',
      'suffering',
      'evolution',
      'forecast',
      'hospitality',
      'employee',
      'referee',
      'portrait',
      'chocolate',
      'dismissal',
      'thank',
      'motif',
      'learn',
      'custody',
      'benefit',
      'vacuum',
      'index',
      'financial'
    ]


  const [word, setWord] = useState(getRandomWord(words))
  const [guesses, setGuesses] = useState([])



  const rightGuesses = guesses.filter(guess => word.includes(guess))

  const wrongGuesses = guesses.filter(guess => !word.includes(guess))

  const lives = 5 - wrongGuesses.length

  const won = word.split('').every(char => rightGuesses.includes(char))


  const lost = lives === 0


  function reset() {
    setGuesses([])
    setWord(getRandomWord())
  }



  useEffect(() => {
    if (lost || won) return

    const listener = e => {
      const guess = e.key.toLowerCase()
      if (!letters.includes(guess)) return

      if (guesses.includes(guess)) return

      setGuesses([...guesses, guess])
    }

    window.addEventListener('keydown', listener)

    return () => window.removeEventListener('keydown', listener)
  }, [guesses, lost, won])


  function getRandomWord(words) {
    const randomWord = Math.floor(Math.random() * words.length)
    return words[randomWord]
  }



  return (
    <div className="App">

      <div className='RightGuess'>
        {word.split('').map((char, index) => (
          <span key={index}>{rightGuesses.includes(char) ? char : '_'}</span>
        ))}
      </div>
      <p>Wrong guesses: {wrongGuesses}</p>
      <p>Lives: {lives}</p>
      {lost ? (
        <div>
          <p>You lost </p>
          <p>The word was: {word}</p>
          <button onClick={reset}>RESET</button>
        </div>
      ) : null}

      {won ? (
        <div>
          <p>You won! </p>
          <button onClick={reset}>RESET</button>
        </div>
      ) : null}
    </div>
  )
}

export default App
