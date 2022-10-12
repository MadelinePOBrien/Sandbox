import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { VStack, StackDivider, Button } from '@chakra-ui/react'

function LoginAuth() {
    const [email, setEmail] = useState();
    //const [username, setUsername] = useState(); we could use email or username i guess
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);
    
    const submitHandler = () => {

    }
    return(
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing="5px"
            align='stretch'
            color='black'
        >
           
        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Enter your email'
                onChange={ (e)=> setEmail(e.target.value)}
            />    
        </FormControl>  
        
        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input 
                    type={show ? "text " : "password"}
                    placeholder='Enter your password'
                    onChange={ (e)=> setPassword(e.target.value)}
                /> 
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        { show ? "Hide" : "Show" }
                    </Button>
                
                </InputRightElement>
            </InputGroup>
        </FormControl>
       
        
        <Button colorScheme="blue"
                width="100%"
                style={{ marginTop : 15}}
                onClick={submitHandler}>
            Login
        </Button>
        <Button 
                variant="solid"
                colorScheme="red"
                width="100%"
                style={{ marginTop : 15}}
                onClick={ () => {
                    setEmail("fakeGuestEmail@email.com");
                    setPassword("123456");
                }}>
            Login as guest
        </Button>
        </VStack>
    );

}

export default LoginAuth;