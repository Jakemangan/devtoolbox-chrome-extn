import { useState } from 'react'
import { Box, Button, Card, VStack, Input, HStack, Text, Container } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'

export const UuidGenerator = () => {
  const [uuids, setUuids] = useState<string[]>([])
  const [count, setCount] = useState<string>('1')

  const generateUuids = () => {
    const newUuids = Array.from({ length: parseInt(count) }, () => uuidv4())
    setUuids(newUuids)
  }

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid)
  }

  return (
    <Container centerContent py={8}>
      <Box p={6} maxW="lg" minW="600px" borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
        <VStack align="stretch">
          <HStack>
            <Input
              value={count}
              onChange={(valueString: any) => setCount(valueString.target.value)}
            />
            <Button colorScheme="blue" onClick={generateUuids}>
              Generate UUIDs
            </Button>
          </HStack>

          <VStack align="stretch">
            {uuids.map((uuid) => (
              <HStack key={uuid} justify="space-between">
                <Text fontFamily="mono">{uuid}</Text>
                <Button size="sm" onClick={() => copyToClipboard(uuid)}>
                  Copy
                </Button>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Container>
  )
}
