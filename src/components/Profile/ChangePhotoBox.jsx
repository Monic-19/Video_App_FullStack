import { Avatar, Box, Button, Container, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, useDisclosure, } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePhotoBox = ({changeImageSubmitHandler}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    const [profile , setProfile] = useState("");
    const [profilePreview, setProfilePreview] = useState("");

    const changeProfileHandler = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        console.log(reader)

        reader.onload = () => {
            setProfilePreview(reader.result);
            setProfile(file);
        }
    }

    const onCloseButton = () => {
        onClose();
        setProfilePreview("");
        setProfile("");
    }

    return (
        <>
           
            <Button mt={4} onClick={onOpen} colorScheme='yellow' variant={"ghost"}>
                Change Profile Photo
            </Button>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onCloseButton}>
                <ModalOverlay backdropFilter={"blur(3px)"} />
                <ModalContent>
                    <ModalHeader>Change Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Container>
                            <form onSubmit={ (e) => {changeImageSubmitHandler(e,profile)}}>
                                <VStack spacing={8}>
                                    {
                                        profilePreview &&
                                        <Avatar boxSize={48} src={profilePreview} border={"2px solid black"}></Avatar>
                                    }

                                    <Input type='file'
                                        css={{
                                            "&::file-selector-button": {
                                                cursor: "pointer",
                                                marginLeft: "-5%",
                                                width: "110%",
                                                border: "none",
                                                height: "100%",
                                                backgroundColor: "rgb(235,201,74)",
                                                color: "black",
                                            },
                                            "&::file-selector-button:hover": {
                                                backgroundColor: "rgb(249,239,136)",
                                            }
                                        }}
                                        onChange={changeProfileHandler}
                                    >

                                    </Input>

                                    <HStack>
                                    <Button colorScheme='yellow' mr={3}  type='submit'>
                                        Change
                                    </Button>

                                    <Button variant='ghost' colorScheme='yellow' onClick={onCloseButton}>Close</Button>


                                    </HStack>

                                </VStack>

                            </form>
                        </Container>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}

export default ChangePhotoBox
