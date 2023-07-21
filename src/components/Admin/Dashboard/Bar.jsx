import { Box, HStack, Heading, Progress, Text } from '@chakra-ui/react';


const Bar = ({ title, value, profit }) => {
    return (
       
            <Box py={4} px={[0, 20]}>
                <Heading size={"sm"} mb={2}>{title} : {profit ? value : ""}</Heading> 

                <HStack w={"full"} alignItems={"center"}>
                    <Progress value={80} />
                    <Text>{profit ? `0%` : `-${value}%`}</Text>
                    <Progress w={"full"} colorScheme="purple" value={profit ? value : 0}></Progress>
                    <Text>{`${value > 100 ? value : 100}`}%</Text>
                </HStack>
            </Box>

    )
}

export default Bar
