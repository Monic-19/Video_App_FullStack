import { Button, HStack, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const Row = ({item , updateHandler , deleteButtonHandler}) => {
  return (
  <Tr>
    <Td>#{item._id}</Td>
    <Td>{item.name}</Td>
    <Td>{item.email}</Td>
    <Td>{item.role}</Td>
    <Td>{item.subscription.status === "active" ? "Active" : "Inactive"}</Td>
    <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button variant={"outline"} color={"purple.500"} onClick={()=>{updateHandler(item._id)}}>Change Role</Button>  
          <Button color="rgb(256,0,0)" onClick={()=>{deleteButtonHandler(item._id)}}> <RiDeleteBin7Fill></RiDeleteBin7Fill> </Button>
        </HStack>
    </Td>
  </Tr>
  )
}

export default Row
