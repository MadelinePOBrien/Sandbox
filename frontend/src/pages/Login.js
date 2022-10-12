import React from 'react'
//import { Link } from "react-router-dom";
import { Container, Box, Text, Tabs, TabList, Tab, TabPanels,TabPanel} from "@chakra-ui/react";
import LoginAuth from "../components/Authentication/LoginAuth";
import Signup from "../components/Authentication/Signup";

function Login() {
    return (
        //<div>Hello</div>
            //With chakra UI you can write inline css styles
            //Import fonts and stuff into App.css though
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
                <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                    <Tabs variant="soft-rounded" >
                        <TabList mb="lem">
                            <Tab width="50%">Login</Tab>
                            <Tab width="50%">Create Account</Tab>
                        </TabList>

                         <TabPanels>
                             <TabPanel>
                                <LoginAuth />
                            </TabPanel>
                            <TabPanel>
                              <Signup />
                            </TabPanel>
                         </TabPanels>
                    </Tabs>
                </Box>

            </Container>
            
    );

}
export default Login;