import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Input,
  Textarea,
  Button,
  Container,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react'
import jsonpath from 'jsonpath'
import InputBox from '@/components/shared/InputBox'
import GradientBackground from '@/components/shared/GradientBackground'

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
          filteredJson.length
            ? JSON.stringify(filteredJson, null, 2)
            : 'Invalid input or JSON Path filter',
        )
      }
    } catch (error) {
      setJsonOutput('Invalid input or JSON Path filter')
    }
  }

  const minifyJson = () => {
    setJsonOutput(JSON.stringify(JSON.parse(jsonInput)))
  }

  useEffect(() => {
    applyJsonPathFilter()
  }, [jsonInput, jqFilter])

  return (
    <VStack w="full" h="full">
      <Container centerContent py={8} h="full">
        <HStack w="full" h="full" gap={8}>
          <VStack flex={1} h="75vh">
            <Text fontWeight="medium" w="full" textAlign="left" className="text-neutral-500">
              Input
            </Text>
            <GradientBackground showGradient={jsonInput !== ''} flex={1}>
              <Box
                p={6}
                flex={1}
                h="full"
                w="full"
                borderWidth={1}
                borderRadius="lg"
                // boxShadow="md"
                className={`content-card-bg border ${jsonInput === '' ? 'border-neutral-700' : 'border-invisible'}`}
              >
                <Flex gap={4} h="full">
                  <Box flex={1} h="full">
                    <Textarea
                      outline="none"
                      h="full"
                      maxH="full"
                      overflowY="auto"
                      resize="none"
                      value={jsonInput}
                      onChange={(e) => setJsonInput(e.target.value)}
                      placeholder="Paste your JSON here"
                      _placeholder={{ color: 'var(--text-neutral-500)' }}
                    />
                  </Box>
                </Flex>
              </Box>
            </GradientBackground>
            <Box h="10" w="full" display="flex" justifyContent="start" gap={2}>
              <Button bg="gray.700" px="4" onClick={applyJsonPathFilter}>
                Format
              </Button>
              <Button bg="gray.700" px="4" onClick={minifyJson}>
                Minify
              </Button>
            </Box>
          </VStack>

          <VStack flex={1} h="75vh">
            <Text fontWeight="medium" w="full" textAlign="left" className="text-neutral-500">
              Output
            </Text>

            <Box
              p={6}
              lineBreak="anywhere"
              w="full"
              flex={1}
              overflow="auto"
              className="content-card-bg border-neutral-700"
              borderWidth={1}
              borderRadius="lg"
            >
              <pre style={{ whiteSpace: 'pre-wrap' }}>{jsonOutput}</pre>
            </Box>
            <Box
              w="full"
              borderWidth={1}
              h="10"
              borderRadius="lg"
              className="content-card-bg border-neutral-700"
            >
              <Input
                pl={4}
                placeholder="Enter JSON Path filter"
                outline="none"
                value={jqFilter}
                onChange={(e) => {
                  setJqFilter(e.target.value)
                  applyJsonPathFilter()
                }}
              />
            </Box>
          </VStack>
        </HStack>
      </Container>
    </VStack>
    // <Container centerContent py={8}>
    //   <Box bg="white" p={6} shadow="md" borderRadius="md" width="80%" maxWidth="800px">
    //     <Flex>
    //       <Box flex="1" mr={4}>
    //         <Textarea
    //           placeholder="Enter JSON here"
    //           value={jsonInput}
    //           onChange={(e) => setJsonInput(e.target.value)}
    //           height="300px"
    //         />
    //       </Box>
    //       <Box flex="1" ml={4}>
    //         <Textarea
    //           placeholder="Formatted JSON output"
    //           value={jsonOutput}
    //           readOnly
    //           height="300px"
    //         />
    //       </Box>
    //     </Flex>
    //     <Flex mt={4} align="center">
    //       <Input
    //         placeholder="Enter JSONPath filter"
    //         value={jqFilter}
    //         onChange={(e) => setJqFilter(e.target.value)}
    //         mr={4}
    //       />
    //       <Button colorScheme="teal" onClick={applyJsonPathFilter}>
    //         Format JSON
    //       </Button>
    //     </Flex>
    //   </Box>
    // </Container>
  )
}

export default JsonFormatter
