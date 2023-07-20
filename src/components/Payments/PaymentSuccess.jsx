import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <div>
      <Container h={"88vh"} p={16}>

        <Heading my={8} textAlign={"center"} w={"full"}>Congratulations! <br /> You got your Pro Pack.</Heading>

        <VStack boxShadow={"lg"} pb={16} alignItems={"center"} borderRadius={'lg'}>
            <Box w={"full"} bg={"yellow.400"} color={"black"} css= {{borderRadius : "8px 8px 0 0"}}>
            <Text p={4} textAlign={"center"} fontWeight={"extrabold"} fontSize={"xl"}>Payment Success</Text> 
            </Box>

            <Box p={4}>
                <VStack px={8} textAlign={"center"} mt={4} spacing={8}>
                    <Text>
                        Congratulations ypu're a pro member. <br /> 
                        You have access to premium content.
                    </Text>

                    <Heading color={"green.500"} size={"4xl"}><RiCheckboxCircleFill></RiCheckboxCircleFill></Heading>
                </VStack>
            </Box>

            <Link to="/profile">
                <Button colorScheme='yellow'>Go to profile</Button>
            </Link>

            <Heading size={"xs"} mt={4}>
                Reference : "rekjretrttrrtrtrttr"
            </Heading>
        </VStack>

      </Container>
    </div>
  )
}

export default PaymentSuccess
