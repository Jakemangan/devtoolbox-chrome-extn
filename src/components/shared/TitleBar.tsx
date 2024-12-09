import React from 'react'
import { Box, VStack, Text } from '@chakra-ui/react'

interface TitleBarProps {
  title: string
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
  return (
    <Box className="g" w="full" border="0" pb={"1px"}>
      <VStack
        w="full"
        h={16}
        pl={4}
        alignItems="start"
        justifyContent="center"
        className="bg-neutral-800 border-b border-neutral-700"
      >
        <Text fontSize="lg" fontWeight="semibold" color="white">
          {title}
        </Text>
      </VStack>
    </Box>
  )
}

export default TitleBar