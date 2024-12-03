import React, { useState } from 'react'
import { Box, Input, Text, VStack, Heading, Container, Button, HStack } from '@chakra-ui/react'
import { FaCopy } from 'react-icons/fa6'

const StringCaseConverter: React.FC = () => {
  const [input, setInput] = useState('')

  const toKebabCase = (str: string) =>
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map((x) => x.toLowerCase())
      .join('-')

  const toSnakeCase = (str: string) =>
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map((x) => x.toLowerCase())
      .join('_')

  const toPascalCase = (str: string) =>
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
      .join('')

  const toCamelCase = (str: string) =>
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map((x, i) =>
        i === 0 ? x.toLowerCase() : x.charAt(0).toUpperCase() + x.slice(1).toLowerCase(),
      )
      .join('')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText()
    setInput(text)
  }

  const getOutputComponent = (label: string, mutatedText: string) => (
    <HStack w="full" justify="space-between">
      <Text color="gray.800" fontWeight="semibold">
        {label}
      </Text>
      <Text fontSize="sm" color="gray.800">
        {mutatedText}
      </Text>
      <Button
        bg="gray.200"
        p="2"
        h="6"
        onClick={() => copyToClipboard(mutatedText)}
        size="sm"
        fontSize="xs"
        ml={2}
      >
        <FaCopy className="text-gray-700" />
      </Button>
    </HStack>
  )

  return (
    <Container centerContent py={8}>
      <Box p={6} maxW="lg" minW="600px" borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
        <VStack spaceY={6}>
          <Heading size="lg" color="gray.800">
            <strong>String Case Converter</strong>
          </Heading>
          <HStack w="full">
            <Input
              placeholder="Enter text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              variant="outline"
              borderColor="teal.400"
            />
          </HStack>
          <VStack align="start" spaceY={2} w="full">
            {getOutputComponent('Lower Case', input.toLowerCase())}
            {getOutputComponent('Upper Case', input.toUpperCase())}
            {getOutputComponent('Kebab Case', toKebabCase(input) ?? '')}
            {getOutputComponent('Snake Case', toSnakeCase(input) ?? '')}
            {getOutputComponent('Pascal Case', toPascalCase(input) ?? '')}
            {getOutputComponent('Camel Case', toCamelCase(input) ?? '')}
          </VStack>
        </VStack>
      </Box>
    </Container>
  )
}

export default StringCaseConverter
