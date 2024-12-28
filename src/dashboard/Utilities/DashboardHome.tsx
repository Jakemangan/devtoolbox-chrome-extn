import { Box, Center, Container, HStack, Text, VStack } from '@chakra-ui/react'
import { HiHeart } from 'react-icons/hi'
import { IoMdBug } from 'react-icons/io'
import { FaPen } from 'react-icons/fa'

const DashboardHome = () => {
  return (
    <Center>
      <Container centerContent h="100vh">
        <VStack h="full" alignItems="center" justifyContent="center" gap={0}>
          <HStack fontSize="4xl" mb={0} gap={0}>
            <Text fontSize="5xl" color="gray.500">
              [
            </Text>
            <Box position="relative" top="5px">
              <HiHeart size="35" color="red"></HiHeart>
            </Box>
            <Text fontSize="5xl" color="gray.500" textAlign="left">
              ]
            </Text>
          </HStack>
          <Text fontSize="4xl" mb={0}>
            Welcome to Dev Vitals!
          </Text>
          <Text fontSize="xl" color="gray.400" textAlign="center" mt="2">
            Dev Vitals is a collection of tools designed to help developers with their <br />
            daily tasks in a privacy focused manner.
          </Text>
          <HStack mt="8" gap="4">
            <Box className="card" w="80" h="28" cursor="pointer">
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="xl" fontWeight="medium">
                  Suggest a feature
                </Text>
                <FaPen size="16" color="gray.400" />
              </HStack>
              <Text fontSize="sm" color="gray.400">
                Have a feature you'd like to see added to Dev Vitals? Click here to suggest it.
              </Text>
            </Box>
            <Box className="card" w="80" h="28" cursor="pointer">
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="xl" fontWeight="medium">
                  Report a bug
                </Text>
                <IoMdBug size="20" color="gray.400"></IoMdBug>
              </HStack>
              <Text fontSize="sm" color="gray.400">
                Report any problems or issues with any of the utilities.
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Container>
    </Center>
  )
}

export default DashboardHome
