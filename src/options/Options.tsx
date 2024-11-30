import { useState, useEffect } from 'react'

import './Options.css'
import { Button, HStack } from '@chakra-ui/react'

export const Options = () => {
  const [countSync, setCountSync] = useState(0)
  const link = 'https://github.com/guocaoyi/create-chrome-ext'

  useEffect(() => {
    chrome.storage.sync.get(['count'], (result) => {
      setCountSync(result.count || 0)
    })

    chrome.runtime.onMessage.addListener((request) => {
      if (request.type === 'COUNT') {
        setCountSync(request.count || 0)
      }
    })
  }, [])

  return (
    <main>
      <h3>Options Page</h3>
      <h4>Count from Popup: {countSync}</h4>
      <a href={link} target="_blank">
        generated by create-chrome-ext
      </a>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </main>
  )
}

export default Options
