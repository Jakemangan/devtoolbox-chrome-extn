import { Box } from '@chakra-ui/react'
import GradientBackground from './GradientBackground'

interface InputBoxProps {
  input: string
  children: React.ReactNode
}

const InputBox: React.FC<InputBoxProps> = ({ input, children }) => {
  return (
    <GradientBackground showGradient={input !== ''} w="full" h="full">
      <Box
        w="full"
        h="full"
        p={0}
        pl={2}
        boxSizing="border-box"
        className={`content-card-bg border ${input === '' ? 'border-neutral-700' : 'border-invisible'}`}
        borderRadius="lg"
      >
        {children}
      </Box>
    </GradientBackground>
  )
}

export default InputBox
