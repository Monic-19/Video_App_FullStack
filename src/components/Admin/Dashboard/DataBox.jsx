import { Box, HStack, Text } from '@chakra-ui/react';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import React from 'react';

const DataBox = ({ title, qty, qtyPercentage, profit }) => {
    return (
    
            <Box width={["full", "20%"]} boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"} p={8} borderRadius={"lg"}>
                <Text textTransform={"uppercase"} fontWeight={"500"}> {title} </Text>

                <HStack spacing={6}>

                    <Text fontSize={"2xl"} fontWeight={"bold"}>{qty}</Text>

                    <HStack>
                        <Text>{qtyPercentage} % </Text>
                        {profit ? <RiArrowUpLine color='rgb(0,225,0)' ></RiArrowUpLine> : <RiArrowDownLine color='rgb(225,0,0)' ></RiArrowDownLine>}
                    </HStack>

                </HStack>

                <Text opacity={0.5}>Since last month </Text>

            </Box>
     
    )
}

export default DataBox
