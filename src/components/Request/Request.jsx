import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineMail} from "react-icons/ai";

const Request = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [course , setCourse] = useState("");

  return (
   
    <Container height={"88vh"}>

    <VStack h={"full"} pt={20} spacing={12}>

      <Heading>Request For A Course</Heading>

      <form style={{width : "100%"}}>

              <Box my={4}>
                <FormLabel htmlFor='name'>Your Name</FormLabel>
                <Input required id='name' value={name} onChange={ (e) => setName(e.target.value) } placeholder='Enter Your Name...' type={'text'} focusBorderColor='rgb(128,231,217)'></Input>
              </Box>

              <Box my={4}>
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <Input required id='email' value={email} onChange={ (e) => setEmail(e.target.value) } placeholder='Enter Email...' type={'email'} focusBorderColor='rgb(128,231,217)' ></Input>
              </Box>

              <Box my={4}>
                <FormLabel htmlFor='course'>Message</FormLabel>
                <Textarea required id='course' value={course} onChange={ (e) => setCourse(e.target.value) } placeholder='Your Message...' focusBorderColor='rgb(128,231,217)' ></Textarea>
              </Box>

              <Button my={4} mr={4} colorScheme='teal' type='submit' rightIcon={<AiOutlineMail></AiOutlineMail>} >
                 Send 
              </Button>

              <Box my={4} variant={"link"}>
                  See Available Courses ! {' '}
                  <Link to="/courses"> 
                  <Button colorScheme='teal' variant={"link"}>Click</Button>
                  {" "} here
                  </Link>
              </Box>

          </form>

    </VStack>

  </Container>
  )
}

export default Request
