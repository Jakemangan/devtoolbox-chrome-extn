import React, { useState } from 'react'
import { Box, Input, Text, Container } from '@chakra-ui/react'

const UnixTimestampConverter = () => {
  const [timestamp, setTimestamp] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [convertedTimestamp, setConvertedTimestamp] = useState('')

  const handleTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimestamp(e.target.value)
    convertToDateTime()
  }

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(e.target.value)
    convertToTimestamp(e.target.value)
  }

  const convertToDateTime = () => {
    const ts = parseInt(timestamp, 10)
    const date = new Date(ts < 10000000000 ? ts * 1000 : ts)
    setDateTime(date.toISOString())
  }

  const convertToTimestamp = (dateTimeString: string) => {
    try {
      const date = new Date(dateTimeString)
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date format')
      }
      setConvertedTimestamp(Math.floor(date.getTime() / 1000).toString())
    } catch (error) {
      console.error('Error converting dateTime to timestamp:', error)
      setConvertedTimestamp('Invalid date format')
    }
  }

  return (
    <Container centerContent py={8}>
      <Box bg="white" boxShadow="md" p={4} borderRadius="md">
        <Text mb={2}>Unix Timestamp to DateTime</Text>
        <Input
          placeholder="Enter Unix Timestamp"
          value={timestamp}
          onChange={handleTimestampChange}
          mb={4}
        />
        <Text mb={2}>Converted DateTime: {dateTime}</Text>

        <Text mb={2}>DateTime to Unix Timestamp</Text>
        <Input
          placeholder="Enter DateTime (ISO format)"
          value={dateTime}
          onChange={handleDateTimeChange}
          mb={4}
        />
        <Text>Converted Unix Timestamp: {convertedTimestamp}</Text>
      </Box>
    </Container>
  )
}

export default UnixTimestampConverter
