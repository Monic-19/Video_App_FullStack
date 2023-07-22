import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {  RiDeleteBin3Line } from 'react-icons/ri'

const VideoCard = ({title ,description, num ,lectureId , courseId , deleteLectureButtonHandler }) => {
  return (
    <Stack direction={["column","row"]} my={8} p={[4,8]} borderRadius={"lg"} boxShadow={" 0 0 10px rgba(107,70,190,0.5)"} justifyContent={["flex-start", "space-between"]} alignItems={"center"}>
    <Box>

      <Heading size={"sm"}>#{`${num}  ${title}`}</Heading>

      <Text>{description}</Text>
    </Box>

    <Button variant={"unstyled"} color={"rgb(256,0,0)"} onClick={ () => {deleteLectureButtonHandler(courseId ,lectureId)}}>
        <RiDeleteBin3Line></RiDeleteBin3Line>
    </Button>
  </Stack>
  )
}

export default VideoCard
