import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import cursor from "../../../assets/images/iconCursor.png";
import Sidebar from "../Users/Sidebar"
import Bar from './Bar';
import DataBox from './DataBox';
import { DoughnutChart, LineChart } from './Chart';

const Dashboard = () => {
  return (
    <div>
      
      <Grid css={{ cursor: `url(${cursor}) , default` }} minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} >

        <Box boxSizing="border-box" py={16} px={[4, 0]}>
          <Text mt={20} mb={4} textAlign={"center"} opacity={0.5}> Last change was on {new Date().toDateString()} </Text>

          <Heading ml={[0, 16]} mb={16} textAlign={["center", "left"]} textTransform={"uppercase"}>Dashboard</Heading>

          <Stack direction={["column", "row"]} minH={24} justifyContent={"space-evenly"}>
            <DataBox title={"views"} qty={123} qtyPercentage={29} profit={true}></DataBox>
            <DataBox title={"users"} qty={23} qtyPercentage={25} profit={true}></DataBox>
            <DataBox title={"subscription"} qty={12} qtyPercentage={20} profit={false}></DataBox>
          </Stack>

          <Box m={[0, 16]} borderRadius={"lg"} p={[0, 16]} mt={[4, 16]} boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}>
            <Heading textAlign={["center", "left"]} size={"md"} pt={[8, 0]} ml={[0, 16]}>Views Graph</Heading>
           
            <LineChart></LineChart>
          </Box>

          <Grid templateColumns={["1fr", "2fr 1fr"]}>

            <Box p={4}>
              <Heading textAlign={["center", "left"]} size={"md"} my={8} ml={[0, 16]}>Progress Bar</Heading>
              <Box>
                <Bar profit={true} title="views" value={29}></Bar>
                <Bar profit={true} title="users" value={25}></Bar>
                <Bar profit={false} title="subscription" value={20}></Bar>
              </Box>
            </Box>

            <Box p={[0,16]} boxSizing='border-box' py={4}>

              <Heading textAlign={"center"} size={"md"} mb={4} >Users</Heading>
              
              <DoughnutChart></DoughnutChart>
            </Box>

          </Grid>

        </Box>

        <Sidebar></Sidebar>

      </Grid>
    </div>
  )
}

export default Dashboard
