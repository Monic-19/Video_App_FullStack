import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Grid,
  Box,
  Heading,
  VStack,
  Input,
} from '@chakra-ui/react';
import VideoCard from './VideoCard';

const CourseModal = ({ isOpen, onClose, courseTitle, id, deleteLectureButtonHandler, addLectureButtonHandler, lectures = [1,2,3,4,5,6,7,8,9,10] }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPreview, setVideoPreview] = useState("");

  const changeVideoHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader)

    reader.onload = () => {
      setVideoPreview(reader.result);
      setVideo(file);
    }
  }

  const handleClose = () => {
    onClose();
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoPreview("");
  }

  return (
    <Modal isOpen={isOpen} size={"full"} onClose={handleClose} scrollBehavior="outside">
      <ModalOverlay />
      <ModalContent>

        <ModalHeader>{courseTitle}</ModalHeader>

        <ModalCloseButton onClick={onClose} />

        <ModalBody p={16}>

          <Grid templateColumns={["1fr", "3fr 1fr"]}>

            <Box px={[0, 16]}>
              <Box my={5}>
                <Heading>{courseTitle}</Heading>
                <Heading size={"sm"} opacity={0.4}>{`# ${id}`}</Heading>
              </Box>

              <Heading size={"lg"}>Lectures</Heading>

              {
                lectures.map( (item,index) => (
              <VideoCard
                key={index} title={"React Intro"} description={"Basic introduction about react"} num={index+1} lectureId={index+1} courseId={1} deleteLectureButtonHandler={deleteLectureButtonHandler} addLectureButtonHandler={addLectureButtonHandler} >
              </VideoCard>

                ))
              }


            </Box>

            <Box >
              <form onSubmit={e => addLectureButtonHandler(e, id, title, description, video)}>
                <VStack spacing={4}>

                  <Heading size={"md"} textTransform={"uppercase"}>Add Lecture</Heading>

                  <Input focusBorderColor='purple.300' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}></Input>

                  <Input focusBorderColor='purple.300' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)}></Input>

                  <Input accept='video/mp4' required placeholder='Choose Avtar..' type={'file'}
                    css={{
                      "&::file-selector-button": {
                        cursor: "pointer",
                        marginLeft: "-5%",
                        width: "110%",
                        border: "none",
                        height: "100%",
                        backgroundColor: "rgb(126,90,212)",
                        color: "white",
                      },
                      "&::file-selector-button:hover": {
                        backgroundColor: "rgb(215,189,250)",
                      }
                    }}
                    onChange={changeVideoHandler}
                  />

                  {
                    videoPreview &&
                    <video controlsList='nodownload' controls src={videoPreview}></video>
                  }

                  <Button w={"full"} colorScheme='purple' type='submit'> Upload

                  </Button>

                </VStack>
              </form>
            </Box>

          </Grid>

        </ModalBody>


        <ModalFooter>
          <Button colorScheme='purple' mr={3} onClick={handleClose}>
            Close
          </Button>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}



export default CourseModal