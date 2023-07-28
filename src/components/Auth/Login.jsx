import { Box, Container, FormLabel, Heading, Input, VStack, Button, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/action';

const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const submitHandler = (e) => {
      e.preventDefault();
      const dispatch = useDispatch();
      dispatch(login(email,password));
    }

  return (
    <Container h={"95vh"}>
        <VStack h={"full"} justifyContent={"center"} spacing={16}>
            <Heading> Welcome to CourseBundler </Heading>

            <form onSubmit={submitHandler} style={{width : "100%"}}>
                <Box my={4}>
                  <FormLabel htmlFor='email'>Email Address</FormLabel>
                  <Input required id='email' value={email} onChange={ (e) => setEmail(e.target.value) } placeholder='Enter Email...' type={'email'}></Input>
                </Box>

                <Box my={4}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input required id='password' value={password} onChange={ (e) => setPassword(e.target.value) } placeholder='Enter Password...' type={'password'}></Input>
                </Box>

                <Box>
                    <Link to='/forgetpassword'>
                        <Button fontSize={"sm"} variant={"link"}>Forget Password</Button>
                    </Link>
                </Box>

                <HStack my={3}>

                <Button my={4} mr={4} colorScheme='yellow' type='submit'>
                    Log In
                </Button>
 
                <Box my={4} variant={"link"}>
                    New User ? {' '}
                    <Link to="/signup"> 
                    <Button colorScheme='yellow' variant={"link"}>Sign Up</Button>
                    {" "} here
                    </Link>
                </Box>

                </HStack>

            </form>
        </VStack>
    </Container>
  )
}

export default Login
