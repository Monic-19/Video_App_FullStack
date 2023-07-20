import { Button, Container, HStack, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import CourseCard from './CourseCard';

const Courses = () => {

  const [keyword , setKeyword] = useState("");
  const [category , setCategory] = useState("");

  const categories = [
    'Web Development' , 'App Development' , 'Block Chain' , 
    'Python' ,'Data Structure & Algorithms' , 'Data Science' ,
    'Game Development' , 'Aritificial Intellegence' , 'Machine Learning'
  ];

  const addToPlayListHandler = (id) => {
    console.log(id , " added to playlist")
  }


  return (
  <Container minH={"95vh"} maxW={"container.lg"} py={8}>

    <Heading children="All Courses" mb={8}></Heading>

    <Input value={keyword} onChange={ e => setKeyword(e.target.value) } placeholder='Search a course...' type='text '></Input>

    <HStack overflowX={"auto"} padding={8} wrap={"wrap"} justifyContent={"center"}>

      {
        categories.map( (item ,index) => (
          <Button m={2} colorScheme='yellow' variant={"outline"} key={index} onClick={() => {setCategory(item)}} minW={"60"}>
            <Text children={item}></Text>
          </Button>
        ))
      }

    </HStack>

    <Stack direction={["column" , "row"]} flexWrap={"wrap"} justifyContent={["flex-start", 'space-evenly']} alignItems={["center" , "flex-start"]}>
       <CourseCard 
       title = {"course1"} views = {"1000"} id = {"1"} imageSrc = {"https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80"} cerater ={"monic"} lecture = {"1"} description={"course on webd"} addToPlayListHandler={addToPlayListHandler}
       />
    </Stack>

  </Container>
  )
}

export default Courses
