import React, { useState } from 'react'
import { Box, Container, Input, Textarea, VStack } from '@chakra-ui/react'

const Base64EncodeDecode = () => {
  const [input, setInput] = useState('')
  const [encoded, setEncoded] = useState('')
  const [decoded, setDecoded] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)
    setEncoded(btoa(value))
    try {
      setDecoded(atob(value))
    } catch (e) {
      setDecoded('Invalid Base64 string')
    }
  }

  return (
    <Container centerContent>
      <Box bg="white" p={4} shadow="md" borderRadius="md" maxW="md" w="100%">
        <VStack>
          <Textarea placeholder="Enter text to encode" value={input} onChange={handleInputChange} />
          <Input placeholder="Encoded output" value={encoded} readOnly />
          <Input placeholder="Decoded output" value={decoded} readOnly />
        </VStack>
      </Box>
    </Container>
  )
}

export default Base64EncodeDecode
