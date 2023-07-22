import { Button, HStack, Image, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const AdminRow = ({item , courseDetailsHandler , deleteDetailsHandler}) => {
  return (
  <Tr >
    <Td>#{item._id}</Td>
    <Td>
      <Image src={item.poster.url}></Image>
    </Td>
    <Td>{item.title}</Td>
    <Td textTransform={"uppercase"}>{item.category}</Td>
    <Td>{item.createdBy}</Td>

    <Td isNumeric>{item.views}</Td>
    <Td isNumeric>{item.numOfVideos}</Td>

    <Td isNumeric>
      <HStack justifyContent={"flex-end"}>
        <Button variant={"outline"} color="purple.500" onClick={() => {courseDetailsHandler(item._id)}}>View  Lectures</Button>
        <Button color="rgb(256,0,0)" onClick={()=>{deleteDetailsHandler(item._id)}}> <RiDeleteBin7Fill></RiDeleteBin7Fill> </Button>
      </HStack>
    </Td>
  </Tr>
  )
}

export default AdminRow
