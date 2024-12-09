import { Box } from '@chakra-ui/react'

interface GradientButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  label: string // New required prop
}

const GradientButton: React.FC<GradientButtonProps> = ({ onClick, label, children = label }) => {
  return (
    <Box
      as="button"
      position="relative"
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      background="linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1))"
      borderRadius="md"
      padding="1px"
      onClick={onClick}
      _hover={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.2))',
      }}
    >
      <Box
        className="content-bg"
        color="gray.400"
        _hover={{
          color: 'gray.200',
        }}
        fontSize="sm"
        borderRadius="md"
        padding="4px 16px"
        textAlign="center"
      >
        {children}
      </Box>
    </Box>
  )
}

export default GradientButton
