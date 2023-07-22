import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from "../Users/Sidebar"
import cursor from "../../../assets/images/iconCursor.png";

const CreateCourse = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [profile, setProfile] = useState("");
  const [profilePrev, setProfilePreview] = useState("");

  const categories = [
    'Web Development' , 'App Development' , 'Block Chain' , 
    'Python' ,'Data Structure & Algorithms' , 'Data Science' ,
    'Game Development' , 'Aritificial Intellegence' , 'Machine Learning'
  ];

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
    <div>
      <Grid css={{ cursor: `url(${cursor}) , default` }} minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} >

        <Container py={16} >

          <form>

            <Heading textTransform={"uppercase"} my={16} textAlign={["center", "left"]}>Create Course</Heading>

            <VStack m={"auto"} spacing={8}>

              <Input required id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' type={'text'} focusBorderColor='purple.300'></Input>
              <Input required id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' type={'text'} focusBorderColor='purple.300'></Input>
              <Input required id='createdBy' value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} placeholder='Creator' type={'text'} focusBorderColor='purple.300'></Input>

              <Select  focusBorderColor='purple.300' value={category}  onChange={(e) => setCategory(e.target.value)} >
                <option>Category</option>
                {
                  categories.map( (item,index) => (

                    <option key={index  } value={item}>{item}</option>
                  ) )
                }
              </Select>

              <Input  accept='image/*' required  placeholder='Choose Avtar..' type={'file'}
                   css={{
                         "&::file-selector-button" : {
                          cursor : "pointer",
                          marginLeft : "-5%",
                          width : "110%",
                          border : "none",
                          height : "100%",
                          backgroundColor : "rgb(126,90,212)",
                          color : "white",
                         },
                         "&::file-selector-button:hover" : {
                          backgroundColor : "rgb(215,189,250)",
                         }
                        }}
                    onChange={ changeProfileHandler}
                  />

                
              {
              profilePrev && 
              <Image src={profilePrev} boxSize={"64"} objectFit={"cover"}></Image>
              }

              <Button w={"full"} colorScheme='purple' type='submit' color={"white"}>Create</Button>

            </VStack>

          </form>

        </Container>

        <Sidebar></Sidebar>

      </Grid>
    </div>
  )
}

export default CreateCourse