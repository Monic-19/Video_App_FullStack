import { VStack,Image, Heading, Text, HStack, Stack, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({views , title , imageSrc ,id, addToPlayListHandler,cerater, description , lecture }) => {
    console.log(cerater)
  return (

    <VStack className='course' alignItems={["center" , "flex-start"]} justifyContent={"center"}>
        <Image src={imageSrc} boxSize={60} objectFit={"cover"} ml={"auto"} mr={"auto"} mb={2}></Image>
        <Heading textAlign={["center" , "left"]} maxW={"200px"} fontFamily={"sans-serif"} noOfLines={3} size={"sm"}>{title}</Heading>
        <Text noOfLines={2}>{description}</Text>

        <HStack>
            <Text fontWeight={"bold"} textTransform={"uppercase"} noOfLines={2}>CREATOR </Text>
            <Text textTransform={"uppercase"} fontFamily={"cursive"}>-  {cerater}</Text>
        </HStack>

        <Heading  textAlign={"center"} size={"xs"}>
            LECTURE -  {lecture}
        </Heading>

        <Text fontSize={"sm"} opacity={0.4}>
            Views -  {views}
        </Text>

        

        <Stack direction={["column" , "row"]} alignItems={"center"}>
            <Link to={`/course/${id}`}> <Button colorScheme='green'>Watch Now</Button> </Link>
            <Button colorScheme='green' variant={"ghost"} onClick={ () => {addToPlayListHandler(id)} }>Add To Playlist</Button>
        </Stack>
    </VStack>
  )
}

export default CourseCard
