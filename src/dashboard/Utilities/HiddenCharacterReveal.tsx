import GradientBackground from '@/components/shared/GradientBackground'
import TitleBar from '@/components/shared/TitleBar'
import {
  Box,
  Card,
  CardBody,
  Flex,
  Textarea,
  Text,
  Container,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { useState } from 'react'

const HiddenCharacterReveal: React.FC = () => {
  const [input, setInput] = useState(
    'Here is some text with hidden\tcharacters\nand new lines    and multiple     spaces.',
  )

  const revealHiddenChars = (text: string) => {
    return text
      .replace(/ /g, '␣') // Space
      .replace(/\t/g, '→') // Tab
      .replace(/\n/g, '↵\n') // Newline
      .replace(/\r/g, '⏎') // Carriage return
      .replace(/\0/g, '␀') // Null character
  }

  return (
    <VStack w="full" h="full">
      <TitleBar title="Hidden Character Reveal" />
      <Container centerContent py={8} h="full">
        <HStack w="full" h="full">
          <VStack flex={1} h="75vh">
            <Text fontWeight="medium" w="full" textAlign="left" className="text-neutral-500">
              Input
            </Text>
            <GradientBackground showGradient={input !== ''} flex={1}>
              <Box
                p={6}
                flex={1}
                h="full"
                w="full"
                borderWidth={1}
                borderRadius="lg"
                // boxShadow="md"
                className={`content-card-bg border ${input === '' ? 'border-neutral-700' : 'border-invisible'}`}
              >
                <Flex gap={4} h="full">
                  <Box flex={1} h="full">
                    <Textarea
                      outline="none"
                      h="full"
                      maxH="full"
                      overflowY="scroll" /* Ensures vertical scrolling */
                      resize="none" /* Prevents manual resizing */
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Paste your text here..."
                    />
                  </Box>
                </Flex>
              </Box>
            </GradientBackground>
          </VStack>

          <Box w="12"></Box>
          <VStack flex={1} h="75vh" w="full">
            <Text fontWeight="medium" w="full" textAlign="left" className="text-neutral-500">
              Output
            </Text>

            <Box
              id="this-one"
              p={6}
              lineBreak="anywhere"
              w="full"
              h="full"
              overflowY="scroll"
              className="content-card-bg border-neutral-700"
              borderWidth={1}
              borderRadius="lg"
            >
              {input === '' ? (
                <p className="text-neutral-500">Add text to reveal hidden characters</p>
              ) : (
                <p>{revealHiddenChars(input)}</p>
              )}
            </Box>
          </VStack>
        </HStack>
      </Container>
    </VStack>
  )
}

export default HiddenCharacterReveal
