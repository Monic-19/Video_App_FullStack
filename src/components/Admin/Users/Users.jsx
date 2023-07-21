import { Box, Grid, Heading, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import Sidebar from "../Users/Sidebar"
import cursor from "../../../assets/images/iconCursor.png";
import Row from './Row';

const Users = () => {

  const users =
    [
      {
        _id: "rampal",
        name: "sham mohan",
        email: "ram@gmail.com",
        role: "user",
        subscription: {
          status : "active"
        },
      },

      {
        _id: "kajal",
        name: "kajal nath",
        email: "kaj@gmail.com",
        role: "admin",
        subscription: {
          status : "inactive"
        },
      },
    ]

    const updateHandler = (userId) => {
      console.log(userId)
    }
    
    const deleteButtonHandler = (userId) => {
      console.log(userId)
    }


  return (
    <div>
      <Grid css={{ cursor: `url(${cursor}) , default` }} minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} >

        <Box p={[0, 16]} overflowX={"auto"} css={{"&::-webkit-scrollbar" : {display : "none"} }}>

          <Heading textTransform={"uppercase"} my={16} textAlign={["center", "left"]}>All Users</Heading>

          <TableContainer w={["100vw", "full"]}>
            <Table variant={"simple"} size={"lg"}>
              <TableCaption>All availabe users in the database</TableCaption>

              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>

              <Tbody>
                {
                  users.map((item) => (
                    <Row key={item._id} item={item} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler}></Row>
                  ))
                }
              </Tbody>


            </Table>
          </TableContainer>

        </Box>

        <Sidebar></Sidebar>

      </Grid>
    </div>
  )
}


export default Users