import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <Container py={16} minH={"88vh"}>

                <Heading my={16} textAlign={["center", "left"]} textTransform={"uppercase"}>Update Profile</Heading>

                <VStack spacing={8}>

                    <Box w={"full"}>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input required id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name...' type={'text'} focusBorderColor='rgb(128,231,217)'></Input>
                    </Box>

                    <Box w={"full"}>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' type={'email'} focusBorderColor='rgb(128,231,217)'></Input>
                    </Box>

                    <Button my={4} mr={4} w={"full"} colorScheme='teal' type='submit'>
                        Update
                    </Button>

                </VStack>

            </Container>
        </div>
    )
}

export default UpdateProfile
