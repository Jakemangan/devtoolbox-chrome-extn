import React from 'react'
import StringCaseConverter from './Utilities/StringCaseConverter'
import HiddenCharacterReveal from './Utilities/HiddenCharacterReveal'
import { UuidGenerator } from './Utilities/UuidGenerator'
import UnixTimestampConverter from './Utilities/UnixTimestampConverter'
import JsonFormatter from './Utilities/JsonFormatter'
import Base64EncodeDecode from './Utilities/Base64EncodeDecode'
import JwtTools from './Utilities/JwtTools'
import { Box, VStack, Text, HStack } from '@chakra-ui/react'
import TodoList from './Utilities/TodoList'
import TitleBar from '@/components/shared/TitleBar'

interface ActiveRouteDisplayProps {
  activeRoute: string
}

const ActiveRouteDisplay: React.FC<ActiveRouteDisplayProps> = ({ activeRoute }) => {
  const getActiveRouteComponent = () => {
    switch (activeRoute) {
      case 'Dashboard':
        return <div>Dashboard Content</div>
      case 'String case converter':
        return <StringCaseConverter />
      case 'Hidden character reveal':
        return <HiddenCharacterReveal />
      case 'UUID generator':
        return <UuidGenerator />
      case 'Todo list':
        return <TodoList />
      case 'Unix timestamp converter':
        return <UnixTimestampConverter />
      case 'JWT tools':
        return <JwtTools />
      case 'Base64 encode/decode':
        return <Base64EncodeDecode />
      case 'Hex color tools':
        return <div>Hex Color Tools Content</div>
      case 'JSON formatter':
        return <JsonFormatter />
      case 'Markdown Previewer':
        return <div>Markdown Previewer Content</div>
      case 'Regex Tester':
        return <div>Regex Tester Content</div>
      case 'URL Encoder/Decoder':
        return <div>URL Encoder/Decoder Content</div>
      case 'Text Diff Checker':
        return <div>Text Diff Checker Content</div>
      case 'HTML/CSS Minifier':
        return <div>HTML/CSS Minifier Content</div>
      case 'CSV to JSON Converter':
        return <div>CSV to JSON Converter Content</div>
      case 'Password Generator':
        return <div>Password Generator Content</div>
      case 'Image Optimizer':
        return <div>Image Optimizer Content</div>
      case 'Color Picker':
        return <div>Color Picker Content</div>
      case 'Emoji reference':
        return <div>Emoji Reference Content</div>
      default:
        return <div>Default Content</div>
    }
  }

  return (
    <VStack justify="space-between" h="full" gap={0}>
      <TitleBar title={activeRoute} />
      <Box flex="1" w="full" overflowY="auto">
        {getActiveRouteComponent()}

      </Box>
      <HStack h="12" w="full" className="border-t border-neutral-700" justify="center">
        <Text className="text-neutral-500" fontSize="sm">
          Made with ❤️ by JM
        </Text>
      </HStack>
    </VStack>
  )
}

export default ActiveRouteDisplay

{
  /* <div className="flex-1 p-6 bg-zinc-100">
<h1 className="text-2xl font-semibold">{activeRoute}</h1>
</div> */
}
