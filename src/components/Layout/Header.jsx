import React from 'react';
import {ColorModeSwitcher} from "../../ColorModeSwitcher"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import {RiMenu5Fill ,RiLogoutBoxLine , RiDashboard2Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => { 

    const {isOpen,onOpen,onClose} =useDisclosure();

    const isAuthenticated = false;
    const user = {
        role : "admin"
    }

    const logoutHandler = () => {
        console.log("Log out")
        onClose();
    }

  return (
    <div>
        <ColorModeSwitcher></ColorModeSwitcher>
      
        <Button onClick={onOpen} colorScheme='yellow' width={12} height={12} rounded={10} position={"fixed"} top={6} left={6} zIndex={5}>
            <RiMenu5Fill></RiMenu5Fill>
        </Button>

        <Drawer placement='left' isOpen={isOpen} onClose={onClose} >
            <DrawerOverlay backdropFilter={"blur(3px)"}></DrawerOverlay>
            <DrawerContent>
                <DrawerHeader borderBottomWidth={"2px"}>COURSE BUNDLER</DrawerHeader>

                <DrawerBody>
                    <VStack mt={5 } w={"full"} spacing={4} alignItems={"flex-start"} >
                        <Link onClick={onClose} to="/"> <Button variant={"ghost"}>Home</Button> </Link>
                        <Link onClick={onClose} to="/about"> <Button variant={"ghost"}>About Us </Button> </Link>
                        <Link onClick={onClose} to="/courses"> <Button variant={"ghost"}>Browse All Courses</Button> </Link>
                        <Link onClick={onClose} to="/request"> <Button variant={"ghost"}>Request A Course</Button> </Link>
                        <Link onClick={onClose} to="/contact"> <Button variant={"ghost"}>Contact Us</Button> </Link>

                        <HStack justifyContent={"space-evenly"} position={"absolute"} width={"80%"} bottom={"2rem"}>
                         {
                            isAuthenticated ? 
                            (<>
                            <VStack>
                            <Link onClick={onClose} to="/profile"> <Button variant={"ghost"} colorScheme='yellow'>Profile</Button> </Link>
                            <Button variant={"ghost"} onClick={logoutHandler}><RiLogoutBoxLine style={{margin : "4px"}}></RiLogoutBoxLine >  Log Out</Button>
                            {
                            user && user.role === "admin" &&
                            <Link onClick={onClose} to="/admin/dashboard"><Button colorScheme='purple' variant={"ghost"}><RiDashboard2Fill style={{margin : "4px"}}></RiDashboard2Fill> Dashboard</Button></Link>
                            }
                            </VStack>
                            
                            </>) : 
                            (<>
                            <Link onClick={onClose} to="/login"> <Button colorScheme='yellow'>Log In</Button> </Link>
                            <p>or</p>
                            <Link onClick={onClose} to="/signup"> <Button colorScheme='yellow'>Sign Up</Button> </Link>
                            </>)
                         }  
                        </HStack>

                      
                    </VStack>
                </DrawerBody>

                <DrawerFooter></DrawerFooter>
            </DrawerContent>
        </Drawer>

    </div>
  )
}

export default Header
