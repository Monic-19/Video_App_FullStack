import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePasswod = () => {
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    return (
        <div>
            <Container py={16} minH={"88vh"}>

                <Heading my={16} textAlign={["center", "left"]} textTransform={"uppercase"}>Change Password </Heading>

                <VStack spacing={8}>

                    <Box w={"full"}>
                        <FormLabel htmlFor='oldPassword' >Old Password</FormLabel>
                        <Input required id='oldPassword' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder='Enter Old Password...' type={'password'} focusBorderColor='rgb(235,201,74)'></Input>
                    </Box>

                    <Box w={"full"}>
                        <FormLabel htmlFor='password'>New Password</FormLabel>
                        <Input required id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter New Password...' type={'password'} focusBorderColor='rgb(235,201,74)'></Input>
                    </Box>

                    <Button my={4} mr={4} w={"full"} colorScheme='yellow' type='submit'>
                    Change Password
                   </Button>

                </VStack>

            </Container>
        </div>
    )
}

export default ChangePasswod
