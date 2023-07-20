import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import video1 from "../../assets/videos/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri';
import TnC from './TnC';


const About = () => {
  return (
    <Container maxW={"container.lg"} padding={16} boxShadow={"lg"}>
        <Heading textAlign={["center", "left"]}>About Us</Heading>

        <Stack direction={["column", "row"]} spacing={[4,16]} p={8}>

            <VStack>
            <Avatar border={"2px solid rgb(252,176,0)"} boxSize={["40" , "48"]} src='https://images.unsplash.com/photo-1506378950192-d9fc7e45bc71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80 '></Avatar>
            <Text opacity={0.7}>Co-Founder</Text>
            </VStack>

            <VStack justifyContent={"center"} alignItems={["center" , "flex-start"]}>
                <Heading size={["md" , "xl"]} fontFamily={"cursive"}>Monic Vyas</Heading>
                <Text textAlign={["center" , "left"]}>
                    Hi, I am a full stack web developer & a 3rd year student . <br />
                    Course Bunder is a mission to provide important skills at a reasonable price.
                </Text>
            </VStack>

        </Stack>

        <Stack m={8} direction={["column", "row"]} alignItems={"center"}>
            <Text fontFamily={"cursive"} fontSize={"lg"} m={8} textAlign={["center" , "left"]}>
                We are a video streaming platform with some premium courses avaliable for premium users only.
            </Text>

            <Link to="/subscribe">
                <Button variant={"ghost"} colorScheme='yellow' > Checkout Our Plan  </Button>
            </Link>
        </Stack>

        <Box>
        <video muted src={video1} autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback></video>
        </Box>

        <HStack my={4} p={4}>
            <RiSecurePaymentFill></RiSecurePaymentFill>
            <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"}> Payment is secured by Razorpay</Heading>
        </HStack>

        <TnC></TnC>
    </Container>
  )
}

export default About
