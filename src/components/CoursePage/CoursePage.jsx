import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import video1 from "../../assets/videos/intro.mp4";

const CoursePage = () => {

  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: "erer",
      title: "sample ",
      description: "ervbeqrhjv kjnvelhbre  mnf jkfqklvjb kjs;n;iwrhn  apne kaam se kaam rakh",
      video: {
        url: video1,
      }
    },
    {
      _id: "erer2",
      title: "sample2 ",
      description: "ervbeqrhjv kjnvelhbre  mnf jkfqklvjb kjs;n;iwrhn  apne kaam se kaam rakh 2 baar",
      video: {
        url: video1,
      }
    },
    {
      _id: "erer3",
      title: "sample3 ",
      description: "ervbeqrhjv kjnvelhbre  mnf jkfqklvjb kjs;n;iwrhn  apne kaam se kaam rakh 3 baar",
      video: {
        url: video1,
      }
    },
  ]


  return (
    

    <Grid minH={"88vh"} templateColumns={["1fr", "3fr 1fr"]}>

      <Box p={4} borderRight={"2px solid rgb(28,161,240)"}>
        <video width={"100%"} muted src={lectures[lectureNumber].video.url} autoPlay controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback></video>

        <Heading m={4}>{`#${lectureNumber + 1} -  ${lectures[lectureNumber].title}`}</Heading>
        <Heading m={4}>Description</Heading>
        <Text m={4}> {lectures[lectureNumber].description} </Text>
      </Box>

      <VStack m={4} >
        {
          lectures.map((lecture, index) => (
            <button key={lecture._id} style={{ width: "100%", padding: "1rem", textAlign: "center", border: "1px solid rgb(28,161,240)" ,   }} onClick={ () => {setLectureNumber(index)} }>
              <Text noOfLines={1} >
                # {index + 1}  -  {lecture.title}
              </Text>
            </button>
          ))
        }
      </VStack>

    </Grid>
  )
}

export default CoursePage
