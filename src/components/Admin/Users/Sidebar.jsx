import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboard2Fill, RiEye2Fill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'


const Sidebar = () => {

  const location = useLocation();

  console.log(location)

  return (
    <div>
      <VStack cursor={"pointer"} spacing={8} p={16} h={"full"} boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}>
        <Link to="/admin/dashboard" >
          <Button mt={5} w={"44"} variant={"outline"} colorScheme={location.pathname === "/admin/dashboard" ? "orange" : "purple"} ><RiDashboard2Fill style={ { margin :"6px" } }  />Dashboard</Button>
        </Link>

        <Link to="/admin/createcourse">
          <Button w={"44"} variant={"outline"} colorScheme={location.pathname === "/admin/createcourse" ? "orange" : "purple"}><RiAddCircleFill style={ { margin :"6px" } } />Create Course</Button>
        </Link>
        
        <Link to="/admin/courses">
          <Button w={"44"} variant={"outline"} colorScheme={location.pathname === "/admin/courses" ? "orange" : "purple"}><RiEye2Fill style={ { margin :"6px" } } /> Courses </Button>
        </Link>

        <Link to="/admin/users">
          <Button w={"44"} variant={"outline"} colorScheme={location.pathname === "/admin/users" ? "orange" : "purple"}><RiUser3Fill style={ { margin :"6px" } } /> Users </Button>
        </Link>

      </VStack>
    </div>
  )
}

export default Sidebar
