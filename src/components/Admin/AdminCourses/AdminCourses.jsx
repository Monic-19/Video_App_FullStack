import { Box, Grid, Heading, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Sidebar from "../Users/Sidebar"
import cursor from "../../../assets/images/iconCursor.png";
import Row from './AdminRow';
import CourseModal from './CourseModal';

const AdminCourses = () => {

  const courses =
    [
      {
        _id: "1",
        title : "React-Course",
        category : "Web Development",
        poster : {
          url : 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80'
        },
        createdBy : 'Raja Ram Mohan Roy',
        views : 123,
        numOfVideos : 10,

      },

    ]

    const { isOpen, onOpen, onClose } = useDisclosure()

    const courseDetailsHandler = (userId) => {
      console.log(userId)
      onOpen();
    }
    
    const deleteDetailsHandler = (userId) => {
      console.log(userId)
    }

    const deleteLectureButtonHandler = (courseId , lectureId) => {
      console.log(courseId,lectureId);
    }
  
    const addLectureButtonHandler = (e, courseId, title, description, video) => {
      console.log(courseId);
      e.preventDefault();
    }



  return (
    <div>
      <Grid css={{ cursor: `url(${cursor}) , default` }} minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} >

        <Box p={[0, 8]} overflowX={"auto"} >

          <Heading textTransform={"uppercase"} my={16} textAlign={["center", "left"]}>All Courses</Heading>

          <TableContainer w={["100vw", "full"]}>
            <Table variant={"simple"} size={"lg"}>
              <TableCaption>All availabe courses in the database</TableCaption>

              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>

              <Tbody>
                {
                  courses.map((item) => (
                    <Row key={item._id} item={item} courseDetailsHandler={courseDetailsHandler} deleteDetailsHandler={deleteDetailsHandler} deleteLectureButtonHandler={deleteLectureButtonHandler} addLectureButtonHandler={addLectureButtonHandler }></Row>
                  ))
                }
              </Tbody>


            </Table>
          </TableContainer>

          <CourseModal  isOpen={isOpen} courseTitle={"React Course"} onClose={onClose} id={2323}></CourseModal>

        </Box>

        <Sidebar></Sidebar>

      </Grid>
    </div>
  )
}



export default AdminCourses
