import React, { useEffect, useState } from 'react'
import { FaTumblr } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import axios from 'axios'

const App = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const fetchData = async () => {
    const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'YyJxKKLBaWKRnG+27oRdrw==H80Gl1SeeeGMz5PF',
      },
    })
    const { quote, author } = response.data[0]
    setQuote(quote)
    setAuthor(author)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = () => {
    fetchData()
  }

  return (
    <div className='container flex h-screen w-screen items-center justify-center bg-blue-400 text-blue-400'>
      <div
        id='quote-box'
        className='h-auto w-2/5 bg-black rounded-lg p-3 text-center justify-between'
      >
        <p id='text' className='font-semibold font-serif text-xl'>
          {quote}
        </p>
        <p id='author' className='text-right'>
          -{author}
        </p>
        <div className='w-full grid-row text-sm'>
          <button
            id='tweet-quote'
            className='bg-blue-400 border text-white rounded mx-2 p-2 '
          >
            <a href='twitter.com/intent/tweet'>{<BsTwitter />}</a>
          </button>
          <button className='bg-blue-400 border text-white rounded mx-2 p-2'>
            <FaTumblr />
          </button>
          <button
            onClick={handleClick}
            id='new-quote'
            className='bg-blue-400 border text-white rounded mx-2 p-2 '
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
