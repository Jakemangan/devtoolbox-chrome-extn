import React, { useState, useEffect } from 'react'
import { Box, Flex, Input, Textarea, Button, Container } from '@chakra-ui/react'
import jsonpath from 'jsonpath'

const JsonFormatter: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>('')
  const [jqFilter, setJqFilter] = useState<string>('')
  const [jsonOutput, setJsonOutput] = useState<string>('')

  const applyJsonPathFilter = () => {
    try {
      const parsedJson = JSON.parse(jsonInput)
      if (jqFilter.trim() === '') {
        setJsonOutput(JSON.stringify(parsedJson, null, 2))
      } else {
        const filteredJson = jsonpath.query(parsedJson, jqFilter)
        setJsonOutput(
          filteredJson.length ? JSON.stringify(filteredJson, null, 2) : 'no valid output',
        )
      }
    } catch (error) {
      setJsonOutput('no valid output')
    }
  }

  useEffect(() => {
    applyJsonPathFilter()
  }, [jsonInput, jqFilter])

  return (
    <Container centerContent py={8}>
      <Box bg="white" p={6} shadow="md" borderRadius="md" width="80%" maxWidth="800px">
        <Flex>
          <Box flex="1" mr={4}>
            <Textarea
              placeholder="Enter JSON here"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              height="300px"
            />
          </Box>
          <Box flex="1" ml={4}>
            <Textarea
              placeholder="Formatted JSON output"
              value={jsonOutput}
              readOnly
              height="300px"
            />
          </Box>
        </Flex>
        <Flex mt={4} align="center">
          <Input
            placeholder="Enter JSONPath filter"
            value={jqFilter}
            onChange={(e) => setJqFilter(e.target.value)}
            mr={4}
          />
          <Button colorScheme="teal" onClick={applyJsonPathFilter}>
            Format JSON
          </Button>
        </Flex>
      </Box>
    </Container>
  )
}

export default JsonFormatter
