import React from 'react'
//import { Link } from "react-router-dom";
import { Container, Box, Text} from "@chakra-ui/react";

function Login() {
    return (
        //<div>Hello</div>
            //With chakra UI you can write inline css styles
            <Container maxW='xl' centerContent>
                <Box d= 'flex'
                    justifyContent='center'
                    p={3}
                    bg={"grey"}
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg"
                    borderWidth="1px"
                    >
                    <Text fontSize="4xl" fontFamily="sans" color="black">Login Page</Text>
                </Box>

            </Container>
            
    );

}
export default Login;