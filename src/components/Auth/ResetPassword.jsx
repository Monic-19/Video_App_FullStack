import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const RestPassword = () => {

    const [password, setPassword] = useState("");

    const params = useParams();
    console.log(params.token)

    return (

        <Container p={16} h={"90vh"}>

            <Heading my={16} textTransform={"uppercase"} textAlign={["center", "left"]}>Reset Password</Heading>

            <VStack spacing={8}>

                <FormLabel htmlFor='password'>New Password</FormLabel>
                <Input required id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter New Password...' type={'password'}></Input>

                <Button type='submit' w={"full"} colorScheme='yellow'> Change Password</Button>
            </VStack>

        </Container>

    )
}

export default RestPassword
