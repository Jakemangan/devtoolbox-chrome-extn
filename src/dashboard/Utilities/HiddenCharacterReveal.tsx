import { Box, Card, CardBody, Flex, Textarea, Text, Container } from '@chakra-ui/react'
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
    <>
      <Container centerContent py={8}>
        <Box
          p={6}
          maxW="lg"
          minW="600px"
          borderWidth={1}
          borderRadius="lg"
          boxShadow="md"
          bg="white"
        >
          <Flex gap={4}>
            <Box flex={1}>
              <Text mb={2} fontWeight="medium">
                Input
              </Text>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                height="300px"
                placeholder="Paste your text here..."
              />
            </Box>
            <Box flex={1}>
              <Text mb={2} fontWeight="medium">
                Output with Hidden Characters
              </Text>
              <Textarea
                value={revealHiddenChars(input)}
                readOnly
                height="300px"
                fontFamily="monospace"
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </>
  )
}

export default HiddenCharacterReveal
