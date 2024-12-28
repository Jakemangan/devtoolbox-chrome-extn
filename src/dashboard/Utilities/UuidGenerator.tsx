import { useState } from 'react'
import { Box, Button, Card, VStack, Input, HStack, Text, Container } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import InputBox from '@/components/shared/InputBox'
import { FaCopy } from 'react-icons/fa6'
import { MdOutlineRefresh } from 'react-icons/md'

export const UuidGenerator = () => {
  const [uuids, setUuids] = useState<string[]>([])
  const [count, setCount] = useState<string>('1')
  const [defaultUuid, setDefaultUuid] = useState<string>(uuidv4())

  const generateUuids = () => {
    let countAsInt = parseInt(count)
    if (Number.isNaN(countAsInt)) {
      countAsInt = 1
    }
    const newUuids = Array.from({ length: countAsInt }, () => uuidv4())
    setUuids(newUuids)
  }

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid)
  }

  return (
    <VStack>
      <Box
        w="full"
        h="40"
        className="content-card-bg"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={6}>
          <VStack gap={0}>
            <Text fontSize="lg" fontWeight="semibold" className="text-neutral-500">
              UUID v4
            </Text>
            <Text fontSize="xx-large" fontWeight="semibold">
              {defaultUuid}
            </Text>
          </VStack>
        </Box>
        <HStack mt={2}>
          <Button bg="gray.700" w="24" h="10" onClick={() => copyToClipboard(defaultUuid)}>
            <Text fontWeight="semibold">Copy</Text>
            <FaCopy></FaCopy>
          </Button>
          <Button bg="gray.700" w="24" onClick={() => setDefaultUuid(uuidv4())}>
            <Text fontWeight="semibold">Regen</Text>
            <MdOutlineRefresh></MdOutlineRefresh>
          </Button>
        </HStack>
      </Box>

      <VStack mt={8}>
        <Text fontSize="lg" fontWeight="semibold" className="text-neutral-500">
          Generate multiple V4 UUIDs
        </Text>
        <HStack>
          <Input
            className="content-card-bg"
            p={2}
            value={count}
            onChange={(valueString: any) => setCount(valueString.target.value)}
          ></Input>
          <Button bg="gray.700" w="28" onClick={generateUuids}>
            <Text fontWeight="semibold">Generate</Text>
            <MdOutlineRefresh></MdOutlineRefresh>
          </Button>
        </HStack>
        {uuids.length > 0 && (
          <Text mt={8} fontSize="lg" fontWeight="semibold" className="text-neutral-500" w="full">
            Output
          </Text>
        )}
        <VStack align="stretch" gap={0} mt={0}>
          {uuids.map((uuid) => (
            <HStack key={uuid} justify="space-between">
              <Text fontFamily="mono">{uuid}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  )
}
