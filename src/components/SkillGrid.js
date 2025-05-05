import React from "react";

import { Box, Heading, Stack, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { text } from "@fortawesome/fontawesome-svg-core";


const SkillGrid = ({techList}) => {
    return (
        
            <Flex 
                justify="center" 
                align="center" 
                //width="100%"
                
            >
                <SimpleGrid 
                    columns={{ base: 3, md: 5, lg: 6 }} 
                    spacing={10}
                    //justifyItems="center"
                >
                    {techList.map((item) => (
                    <Box 
                        key={item.tech} 
                        textAlign="center"
                        bg = {item.bgColor}
                        borderRadius="full"
                        p={4}
                        transition="all 0.1s ease"
                        _hover={{
                            transform: "scale(1.1)",
                        }}
                    >
                        <Text fontSize="50">{item.icon}</Text>
                    </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        
    
    );
};

export default SkillGrid;
