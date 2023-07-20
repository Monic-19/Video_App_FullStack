import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {

    const [email , setEmail] = useState("");


  return (
    <Container p={16} h={"90vh"}>
        
        <Heading my={16} textTransform={"uppercase"} textAlign={["center" , "left"]}>Forget Password</Heading>

        <VStack spacing={8}>

        <FormLabel htmlFor='email'>Email Address</FormLabel>
        <Input required id='email' value={email} onChange={ (e) => setEmail(e.target.value) } placeholder='Enter Email...' type={'email'}></Input>

        <Button type='submit' w={"full"} colorScheme='yellow'>Send Reset Link</Button>
        </VStack>

    </Container>
  )
}

export default ForgetPassword
