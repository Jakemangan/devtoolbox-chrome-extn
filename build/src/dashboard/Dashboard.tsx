import { cn } from '@/lib/utils'
import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react'
import {
  FaClock,
  FaHouse,
  FaPalette,
  FaMarkdown,
  FaLink,
  FaFileCode,
  FaCompress,
  FaFileCsv,
  FaLock,
  FaImage,
  FaCrop,
  FaEyeSlash,
} from 'react-icons/fa6'
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa'
import { LuBinary, LuFileJson2 } from 'react-icons/lu'
import { SiAnthropic, SiGoogle, SiJsonwebtokens, SiMeta } from 'react-icons/si'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { SiOpenai } from 'react-icons/si'
import { BsRegex } from 'react-icons/bs'
import { GiResize } from 'react-icons/gi'
import ActiveRouteDisplay from './ActiveRouteDisplay'

const routes = [
  {
    title: 'Dashboard',
    icon: <FaHouse className="h-4 w-4" />,
  },
  {
    title: 'String case converter',
    icon: <RiDoubleQuotesL className="h-4 w-4" />,
  },
  {
    title: 'Hidden character reveal',
    icon: <FaEyeSlash className="h-4 w-4" />,
  },
  {
    title: 'UUID generator',
    icon: <LuBinary className="h-4 w-4" />,
  },
  {
    title: 'Unix timestamp converter',
    icon: <FaClock className="h-4 w-4" />,
  },
  {
    title: 'JWT tools',
    icon: <SiJsonwebtokens className="h-4 w-4" />,
  },
  {
    title: 'Base64 encode/decode',
    icon: <LuBinary className="h-4 w-4" />,
  },
  {
    title: 'Hex color tools',
    icon: <FaPalette className="h-4 w-4" />,
  },
  {
    title: 'JSON formatter',
    icon: <LuFileJson2 className="h-4 w-4" />,
  },
  {
    title: 'Markdown Previewer',
    icon: <FaMarkdown className="h-4 w-4" />,
  },
  {
    title: 'Regex Tester',
    icon: <BsRegex className="h-4 w-4" />,
  },
  {
    title: 'URL Encoder/Decoder',
    icon: <FaLink className="h-4 w-4" />,
  },
  {
    title: 'Text Diff Checker',
    icon: <FaFileCode className="h-4 w-4" />,
  },
  {
    title: 'HTML/CSS Minifier',
    icon: <FaCompress className="h-4 w-4" />,
  },
  {
    title: 'CSV to JSON Converter',
    icon: <FaFileCsv className="h-4 w-4" />,
  },
  {
    title: 'Password Generator',
    icon: <FaLock className="h-4 w-4" />,
  },
  {
    title: 'Image Optimizer',
    icon: <FaImage className="h-4 w-4" />,
  },
  {
    title: 'Color Picker',
    icon: <FaPalette className="h-4 w-4" />,
  },
  {
    title: 'Emoji reference',
    icon: <Text>😁</Text>,
  },
]

const llmRoutes = [
  {
    title: 'ChatGPT (OpenAI)',
    icon: <SiOpenai className="h-4 w-4" />,
  },
  {
    title: 'Claude (Anthropic)',
    icon: <SiAnthropic className="h-4 w-4" />,
  },
  {
    title: 'Gemini (Google)',
    icon: <SiGoogle className="h-4 w-4" />,
  },
  {
    title: 'LLama (Meta)',
    icon: <SiMeta className="h-4 w-4" />,
  },
]

// Ideas - https://www.fffuel.co/
const imageRoutes = [
  {
    title: 'Image to base64',
    icon: <FaImage className="h-4 w-4" />,
  },
  {
    title: 'Image to text',
    icon: <FaImage className="h-4 w-4" />,
  },
  {
    title: 'Image compressor',
    icon: <FaCompress className="h-4 w-4" />,
  },
  {
    title: 'SVG generator',
    icon: <FaImage className="h-4 w-4" />,
  },
  {
    title: 'Gradient generator',
    icon: <FaPalette className="h-4 w-4" />,
  },
  {
    title: 'Image to base64',
    icon: <FaImage className="h-4 w-4" />,
  },
  {
    title: 'Image to text (OCR)',
    icon: <FaImage className="h-4 w-4" />,
  },
  {
    title: 'Image resize',
    icon: <GiResize className="h-4 w-4" />,
  },
  {
    title: 'Crop image',
    icon: <FaCrop className="h-4 w-4" />,
  },
  {
    title: 'Color palette generator',
    icon: <FaPalette className="h-4 w-4" />,
  },
]

const RouteButton = ({
  route,
  activeRoute,
  setActiveRoute,
}: {
  route: (typeof routes)[0]
  activeRoute: string
  setActiveRoute: (route: string) => void
}) => (
  <Button
    key={route.title}
    display="flex"
    justifyContent="flex-start"
    borderRadius="xl"
    gap={2}
    h="8"
    fontSize={'md'}
    pl={2}
    w="full"
    bg={activeRoute === route.title ? 'gray.200' : 'transparent'}
    _hover={{
      bg: activeRoute === route.title ? 'zinc.500' : 'zinc.100',
    }}
    onClick={() => {
      setActiveRoute(route.title)
      console.log(route.title)
    }}
  >
    {route.icon}
    <Text pl={1}>{route.title}</Text>
  </Button>
)

export const Dashboard = () => {
  const [activeRoute, setActiveRoute] = useState('Dashboard')

  return (
    <div className="flex min-h-screen">
      <div className="w-96 border-r bg-white p-6 overflow-y-auto max-h-screen">
        <div className="flex flex-col">
          {routes.slice(0, 1).map((route) => (
            <RouteButton route={route} activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
          ))}
          <Text gap={2} fontSize="lg" mt={2}>
            Utilities
          </Text>
          {routes.slice(1).map((route) => (
            <RouteButton route={route} activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
          ))}
          <Text gap={2} fontSize="lg" mt={2}>
            Image tools
          </Text>
          {imageRoutes.map((route) => (
            <RouteButton route={route} activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
          ))}
          <Text gap={2} fontSize="lg" mt={2}>
            LLM tools
          </Text>
          {llmRoutes.map((route) => (
            <RouteButton route={route} activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
          ))}
        </div>
      </div>
      <ActiveRouteDisplay activeRoute={activeRoute} />
    </div>
  )
}

export default Dashboard
