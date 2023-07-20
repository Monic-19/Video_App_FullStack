import { Box, Button, Container, HStack, Heading,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri';
import {BiSad} from "react-icons/bi";
import { Link } from 'react-router-dom';


const PaymentFailure = () => {
  return (
    <Container h={"88vh"} p={16}>

    <Heading my={8} textAlign={"center"} w={"full"} >OOP'S! <br /> Error</Heading>

    <VStack boxShadow={"lg"} pb={16} alignItems={"center"} borderRadius={'lg'}>
        <Box w={"full"} bg={"yellow.400"} color={"black"} css= {{borderRadius : "8px 8px 0 0"}}>
        <Text p={4} textAlign={"center"} fontWeight={"extrabold"} fontSize={"xl"}>Payment Unsuccessfull</Text> 
        </Box>

        <Box p={4}>
            <Heading color={"red.500"} size={"4xl"}><RiErrorWarningFill></RiErrorWarningFill></Heading>
        </Box>

        <HStack justifyContent={"space-evenly"} alignItems={"center"} >
          <Heading size={"md"}>
             Try Again {"  "} 
          </Heading>

          <BiSad size={"40px"}></BiSad>
        </HStack>

        <Link to="/subscribe">
          <Button colorScheme='red' mt={4}>
            Back
          </Button>
        </Link>

    </VStack>

  </Container>
  )
}

export default PaymentFailure
