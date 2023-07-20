import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container h={"88vh"} p={16}>

      <VStack justifyContent={"center"} h={"full"} spacing={4}>
        <RiErrorWarningFill size={"7rem"} color='rgb(255,0,0)'></RiErrorWarningFill>
        <Heading  my={8} textAlign={"center"} w={"full"} >
          Page Not Found
        </Heading>

        <Link to="/">
          <Button colorScheme='red'>
            Go To Home
          </Button>
        </Link>

      </VStack>


    </Container>
  )
}

export default NotFound
