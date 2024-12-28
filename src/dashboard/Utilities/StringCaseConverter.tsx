import React, { useState } from 'react'
import { Box, Input, Text, VStack, Heading, Container, Button, HStack } from '@chakra-ui/react'
import { FaCopy } from 'react-icons/fa6'
import './StringCaseConverter.scss'
import 'src/styles.scss'
import GradientBackground from 'src/components/shared/GradientBackground'
import TitleBar from '@/components/shared/TitleBar'

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

  const getOutputComponent = (label: string, example: string, mutatedText: string) => (
    <Box className="g copy-container" borderRadius="lg">
      <Box
        w={96}
        maxH="96"
        overflowY="scroll"
        className="content-card-bg border border-neutral-700"
        minH="24"
        borderRadius="md"
      >
        <VStack w="full" justify="space-between" gap={0} alignItems="start">
          <HStack
            justify="space-between"
            w="full"
            h="20%"
            className="bg-neutral-800 "
            borderTopLeftRadius="lg"
            borderTopRightRadius="lg"
            p="2"
          >
            <VStack align="start" gap={0}>
              <Text>{label}</Text>
              <Text fontSize="xs" className="text-neutral-500">
                {example}
              </Text>
            </VStack>
            <Text
              mr="1"
              onClick={() => copyToClipboard(mutatedText)}
              cursor="pointer"
              fontSize="xs"
              className="copy-text"
            >
              Copy
            </Text>
          </HStack>
          <VStack w="full" h="80%" my={4} borderRadius="lg" p="2">
            {mutatedText === '' ? (
              <Text fontSize="md" color="gray.600" fontWeight="medium">
                No input
              </Text>
            ) : (
              <Text fontSize="md" lineBreak="anywhere">
                {mutatedText}
              </Text>
            )}
          </VStack>
        </VStack>
      </Box>
    </Box>
  )

  return (
    <VStack w="full">
      <TitleBar title="String Case Converter" />
      <Container centerContent py={8}>
        <VStack>
          <Box p={4} minW="600px" borderRadius="lg">
            <VStack w="full">
              <GradientBackground showGradient={input !== ''}>
                <Box
                  w="full"
                  p={0}
                  pl={2}
                  boxSizing="border-box"
                  className={`content-card-bg border ${input === '' ? 'border-neutral-700' : 'border-invisible'}`}
                  borderRadius="lg"
                >
                  <Input
                    placeholder="Text to convert"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    variant="outline"
                    outline="none"
                    _placeholder={{ color: 'gray.500', fontWeight: 'medium' }}
                  />
                </Box>
              </GradientBackground>
              <HStack justify="start" w="full" mt={4}>
                <Text fontSize="md" fontWeight="medium" className="text-neutral-500">
                  Outputs
                </Text>
              </HStack>
              <VStack align="start" spaceY={0} w="full" alignItems="center" gap={6}>
                <HStack gap={6}>
                  {getOutputComponent('Lower Case', 'xxxxxxx', input.toLowerCase())}
                  {getOutputComponent('Upper Case', 'XXXXXXX', input.toUpperCase())}
                </HStack>
                <HStack gap={6}>
                  {getOutputComponent('Kebab Case', 'xxx-xxx-xxx', toKebabCase(input) ?? '')}
                  {getOutputComponent('Snake Case', 'xxx_xxx_xxx', toSnakeCase(input) ?? '')}
                </HStack>
                <HStack gap={6}>
                  {getOutputComponent('Pascal Case', 'XxxXxxXxx', toPascalCase(input) ?? '')}
                  {getOutputComponent('Camel Case', 'xxxXxxXxx', toCamelCase(input) ?? '')}
                </HStack>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </VStack>
  )
}

export default StringCaseConverter
