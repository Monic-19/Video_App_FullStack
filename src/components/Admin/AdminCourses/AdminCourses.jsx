import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Sidebar from "../Users/Sidebar"
import cursor from "../../../assets/images/iconCursor.png";

const AdminCourses = () => {
  return (
    <div>
      <Grid css={{ cursor: `url(${cursor}) , default` }}  minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} >

        <Box></Box>

        <Sidebar></Sidebar>

      </Grid>
    </div>
  )
}


export default AdminCourses
