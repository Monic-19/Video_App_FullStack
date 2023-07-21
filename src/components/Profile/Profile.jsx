import { Avatar, Button, Container, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ChangePhotoBox from './ChangePhotoBox'

const Profile = () => {

    const user = {
        name: "Monic vyas",
        email: "monic@gmail.com",
        date: String(new Date().toDateString()),
        role: "user",
        subscription : {
            status : "active"
        },

        playlist : [
            {
                course : "web Dev",
                id : 1,
                poster : "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80",
            }
        ]

    }

    const removeFromPlayListHandler = (id) => {
        console.log("delete id  : " , id);
    }

    const changeImageSubmitHandler = (e, img) =>{
         e.preventDefault();
         console.log(img);
    }


    return (
        <Container minH={"95vh"} maxW={"container.lg"} py={8} >

            <Heading m={8} textTransform={'uppercase'}>Profile</Heading>

            <Stack justifyContent={"flex-start"} direction={["column", "row"]} alignItems={"center"} spacing={[8, 16]} p={8}>

                <VStack>
                    <Avatar boxSize={48}></Avatar>
                    <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler}></ChangePhotoBox>
                </VStack>

                <VStack spacing={4} alignItems={["center", "flex-start"]}>
                    <HStack>
                        <Text fontWeight={"bold"}>Name : </Text>
                        <Text> {user.name} </Text>
                    </HStack>

                    <HStack>
                        <Text fontWeight={"bold"}>Email : </Text>
                        <Text> {user.email} </Text>
                    </HStack>

                    <HStack>
                        <Text fontWeight={"bold"}>Since : </Text>
                        <Text> {user.date} </Text>
                    </HStack>

                    {
                        user.role !== "admin" &&
                        <HStack>
                            <Text fontWeight={"bold"}>Subscription  : </Text>
                            {
                                user.subscription.status === "active" ? 
                                (<Button color='yellow.500' variant={"unstyled"}>Cancel Subscription</Button>) :
                                (<Link to="/subscribe"><Button colorScheme='yellow'>Get Subscription</Button></Link>)     
                            }
                        </HStack>
                    }

                    <Stack direction={["column" , "row"]} alignItems={"center"}>
                        <Link to="/profile/update">
                            <Button>Update Profile</Button>
                        </Link>

                        <Link to="/profile/changepassword">
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>

                </VStack>

            </Stack>

            <Heading my={8} size={"lg"}>Playlist</Heading>

            {
              user.playlist.length > 0 &&
                <Stack direction={["column" , "row"]} alignItems={"center"} flexWrap={"wrap"} p={4}>
                    {
                        user.playlist.map( (course) => (
                            <VStack w={48} m={2} key={course.id} >
                                <Image boxSize={"full"} objectFit={"cover"} src={course.poster}></Image>
                                <HStack>
                                    <Link to={`/course/${course.id}`}>
                                        <Button variant={"outline"} colorScheme='yellow'>Watch Now</Button>
                                    </Link>

                                    <Button variant={"outline"} colorScheme='red' onClick={() => {removeFromPlayListHandler(course.id)}}>
                                        <RiDeleteBin7Fill color='rgb(255,0,0)'></RiDeleteBin7Fill>
                                    </Button>
                                </HStack>
                            </VStack>
                        ) )
                    }
                </Stack>
            }

            


        </Container>
    )
}

export default Profile
