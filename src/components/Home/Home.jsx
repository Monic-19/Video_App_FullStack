import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import img1 from "../../assets/images/bg.png";
import video1 from "../../assets/videos/intro.mp4"
import {CgGoogle, CgYoutube} from "react-icons/cg";
import {SiCoursera , SiUdemy} from "react-icons/si";
import {DiAws} from "react-icons/di";


const Home = () => {
  return (
   <section className='home'>

    <div className="container">

        <Stack direction={["column" , "row"]} height={"100%"} justifyContent={["left", "flex-end"]} alignItems={"center"} spacing={["16" , "56"]} >

            <VStack width={"full"} alignItems={["center" , "flex-end"]} gap={6}> 
                <Heading children="LEARN FROM THE EXPERTS" fontSize={"5xl"} textAlign={["center","right"]}></Heading>
                <Text children="Find Valueable Content At Reasonable Price" fontFamily={"cursive"} fontSize={"2xl"} textAlign={["center","right"]}></Text>
                <Link to="/courses">
                    <Button size={"lg"} colorScheme='yellow'>Explore Now</Button>
                </Link>
            </VStack>

            <Image className='image1' boxSize={"md"} src={img1} objectFit={"contain"}></Image>

        </Stack>

    </div>

    <Box padding={8} bgColor={"blackAlpha.800"}>
        <Heading textAlign={"center"} fontFamily="body" color={"yellow.400"} children="OUR PARTNERS"></Heading>
        <HStack className='brands-name'  mt={10} justifyContent={"space-around"}>
            <CgGoogle></CgGoogle>
            <CgYoutube></CgYoutube>
            <SiCoursera></SiCoursera>
            <SiUdemy></SiUdemy>
            <DiAws></DiAws>
        </HStack>
    </Box>

    <div className="container2">
        <video muted src={video1} autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback></video>
    </div>

   </section>
  )
}

export default Home
