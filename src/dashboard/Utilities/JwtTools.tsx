import React, { useState } from 'react'
import { Box, Container, Input, Button, Textarea } from '@chakra-ui/react'
import crypto from 'crypto'

const base64UrlEncode = (str: string) => {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

const base64UrlDecode = (str: string) => {
  str = str.replace(/-/g, '+').replace(/_/g, '/')
  const pad = str.length % 4 === 0 ? '' : new Array(4 - (str.length % 4)).fill('=').join('')
  return Buffer.from(str + pad, 'base64').toString()
}

const JwtTools = () => {
  const [jwtToken, setJwtToken] = useState('')
  const [decodedToken, setDecodedToken] = useState('')

  const handleDecode = () => {
    try {
      const parts = jwtToken.split('.')
      if (parts.length !== 3) throw new Error('Invalid JWT')
      const payload = base64UrlDecode(parts[1])
      setDecodedToken(JSON.stringify(JSON.parse(payload), null, 2))
    } catch (error) {
      setDecodedToken('Invalid JWT')
    }
  }

  const handleCreate = () => {
    const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
    const payload = base64UrlEncode(JSON.stringify({ data: 'example' }))
    const secret = 'your-256-bit-secret'
    const signature = crypto
      .createHmac('sha256', secret)
      .update(`${header}.${payload}`)
      .digest('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
    const token = `${header}.${payload}.${signature}`
    setJwtToken(token)
  }

  return (
    <Container centerContent>
      <Box
        bg="white"
        p={4}
        shadow="md"
        borderRadius="md"
        width="100%"
        maxWidth="400px"
        textAlign="center"
      >
        <Input
          placeholder="Enter JWT"
          value={jwtToken}
          onChange={(e) => setJwtToken(e.target.value)}
          mb={4}
        />
        <Button onClick={handleDecode} colorScheme="teal" mb={4}>
          Decode JWT
        </Button>
        <Textarea value={decodedToken} readOnly placeholder="Decoded JWT will appear here" mb={4} />
        <Button onClick={handleCreate} colorScheme="blue">
          Create JWT
        </Button>
      </Box>
    </Container>
  )
}

export default JwtTools
