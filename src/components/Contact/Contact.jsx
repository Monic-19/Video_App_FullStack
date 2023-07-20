import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {MdEmail} from "react-icons/md";

const Contact = () => {

  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");
  const [name , setName] = useState("");


  return (
    <Container height={"88vh"}>

      <VStack h={"full"} pt={20} spacing={12}>

        <Heading>Contact Us</Heading>

        <form style={{width : "100%"}}>

                <Box my={4}>
                  <FormLabel htmlFor='name'>Your Name</FormLabel>
                  <Input required id='name' value={name} onChange={ (e) => setName(e.target.value) } placeholder='Enter Your Name...' type={'text'} focusBorderColor='rgb(235,201,74)'></Input>
                </Box>

                <Box my={4}>
                  <FormLabel htmlFor='email'>Email Address</FormLabel>
                  <Input required id='email' value={email} onChange={ (e) => setEmail(e.target.value) } placeholder='Enter Email...' type={'email'} focusBorderColor='rgb(235,201,74)' ></Input>
                </Box>

                <Box my={4}>
                  <FormLabel htmlFor='message'>Message</FormLabel>
                  <Textarea required id='message' value={message} onChange={ (e) => setMessage(e.target.value) } placeholder='Your Message...' focusBorderColor='rgb(235,201,74)' ></Textarea>
                </Box>

                <Button my={4} mr={4} colorScheme='yellow' type='submit' rightIcon={<MdEmail></MdEmail>}>
                   Send Mail
                </Button>

                <Box my={4} variant={"link"}>
                    Request For A Course ? {' '}
                    <Link to="/request"> 
                    <Button colorScheme='yellow' variant={"link"} >Click</Button>
                    {" "} here
                    </Link>
                </Box>

            </form>

      </VStack>

    </Container>
  )
}

export default Contact
