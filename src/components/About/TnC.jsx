import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react';
import tnc from "../../assets/docs/termsAndCondition";

const TnC = () => {
  return (
    <Box> 
         <Heading size={"lg"} textAlign={["center" , "left"]} my={4}>Terms & Condition</Heading>

         <Box overflowY={"scroll"}  height={"sm"} p={4}>
            <Text textAlign={["center" , "left"]} letterSpacing={"widest"} fontFamily={"heading"}>{tnc}</Text>

            <Heading my={4} size={"xs"} color='rgb(252,176,0)'>*Refund only applicable for cancellation within 3 Days .</Heading>
         </Box>
    </Box>
  )
}

export default TnC
