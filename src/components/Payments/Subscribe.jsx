import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container height={"88vh"} p={16}>
      <Heading my={8} textAlign={"center"}>Welcome</Heading>

      <VStack boxShadow={"lg"} alignItems={"stretch"} textAlign={"center"} borderRadius={"lg"} spacing={0}>

        <Box bg={"rgb(250,239,136)"} p={4} css= {{borderRadius : "8px 8px 0 0"}}>
          <Text color={"black"}>Pro Pack - ₹ 299.00</Text>
        </Box>

        <Box p={4}>
          <VStack px={8} mt={4} textAlign={"center"} spacing={8}>
          <Text >Join Pro Pack and Get Access to all content.</Text>
          <Heading size={"md"}> ₹ 299.00 Only</Heading>
          </VStack>

          <Button my={8} w={"full"} colorScheme='yellow'>Buy Now</Button>
        </Box>

        <Box bg={"blackAlpha.600"} p={4} css= {{borderRadius : "0 0 8px 8px"}}>
          <Heading color={"white"} textTransform={"uppercase"} size={"sm"}>100%  Refund  at  cancellation</Heading>
          <Text  color={"white"} mt={3} fontSize={"xs"}>*Terms & Conditions Applies</Text>
        </Box>

      </VStack>
    </Container>
  )
}

export default Subscribe
