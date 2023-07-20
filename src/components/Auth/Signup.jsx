import { Box, Container, FormLabel, Heading, Input, VStack, Button, HStack, Avatar } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

  const [email , setEmail] = useState("");
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  const [cpassword , setCPassword] = useState("");
  const [profilePreview , setProfilePreview] = useState("");
  const [profile , setProfile] = useState("");


  const changeProfileHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader)

    reader.onload = () => {
      setProfilePreview(reader.result);
      setProfile(file);
    }
  }

  console.log(profile)


  return (
    <Container minH={"95vh"}>
        <VStack h={"full"} justifyContent={"center"} spacing={16}>
            <Heading mt={7} fontFamily={"body"}> WELCOME TO COURSEBUNDLER </Heading>

            <form style={{width : "100%"}}>

              <Box md={4} display={"flex"} justifyContent={"center"} alignItems={"center  "}>
                <Avatar size={"2xl"} src={profilePreview}></Avatar>
              </Box>
              
                <Box my={4}>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input required id='name' value={name} onChange={ (e) => setName(e.target.value) } placeholder='Enter Your Name...' type={'text'}></Input>
                </Box>

                <Box my={4}>
                  <FormLabel htmlFor='email'>Email Address</FormLabel>
                  <Input required id='email' value={email} onChange={ (e) => setEmail(e.target.value) } placeholder='Enter Email...' type={'email'}></Input>
                </Box>

                <Box my={4}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input required id='password' value={password} onChange={ (e) => setPassword(e.target.value) } placeholder='Enter Password...' type={'password'}></Input>
                </Box>

                <Box my={4}>
                  <FormLabel htmlFor='cpassword'>Confirm Password</FormLabel>
                  <Input required id='cpassword' value={cpassword} onChange={ (e) => setCPassword(e.target.value) } placeholder='Confirm Password...' type={'password'}></Input>
                </Box>

                <Box my={4} >
                  <FormLabel htmlFor='chooseAvtar'>Choose Avtar</FormLabel>
                  <Input  accept='image/*' required id='chooseAvtar' placeholder='Choose Avtar..' type={'file'}
                   css={{
                         "&::file-selector-button" : {
                          cursor : "pointer",
                          marginLeft : "-5%",
                          width : "110%",
                          border : "none",
                          height : "100%",
                          backgroundColor : "rgb(235,201,74)",
                          color : "black",
                         },
                         "&::file-selector-button:hover" : {
                          backgroundColor : "rgb(249,239,136)",
                         }
                        }}
                    onChange={ changeProfileHandler}
                  >

                  </Input>
                </Box>

                <HStack my={3} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>

                <Button my={4} mr={4} colorScheme='yellow' type='submit'>
                    Sign Up
                </Button>
 
                <Box my={4} variant={"link"}>
                    Alreay A User ? {' '}
                    <Link to="/login"> 
                    <Button colorScheme='yellow' variant={"link"}>Log In</Button>
                    {" "} here
                    </Link>
                </Box>

                </HStack>

            </form>
        </VStack>
    </Container>
  )
}

export default Signup
