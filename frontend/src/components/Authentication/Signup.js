import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { VStack, StackDivider, Button } from '@chakra-ui/react'

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [comfirmPassword, setConfirmPassword] = useState();
    const [profilePic, setProfilePic] = useState();
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);
    const postDetails = (pics) => {

    }
    const submitHandler = () => {

    }
    return(
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing="5px"
            align='stretch'
            color='black'
        >
         <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
                placeholder='Enter your name'
                onChange={ (e)=> setName(e.target.value)}
            />    
        </FormControl>   
        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Enter your email'
                onChange={ (e)=> setEmail(e.target.value)}
            />    
        </FormControl>  
        <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input 
                placeholder='Enter your username'
                onChange={ (e)=> setUsername(e.target.value)}
            />    
        </FormControl>
        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
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
        <FormControl id="password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size="md">
                <Input 
                    type={show ? "text " : "password"}
                    placeholder='Confirm password'
                    onChange={ (e)=> setConfirmPassword(e.target.value)}
                /> 
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        { show ? "Hide" : "Show" }
                    </Button>
                
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id="profilePic" isRequired>
            <FormLabel>Upload your picture</FormLabel>
            <Input 
                type="file"
                p={1.5}
                accept="image/*"
                onChange={ (e)=> postDetails(e.target.files[0])}
            />    
        </FormControl> 
        
        <Button colorScheme="blue"
                width="100%"
                style={{ marginTop : 15}}
                onClick={submitHandler}>
            Sign up
        </Button>
        
        </VStack>
    );

}
export default Signup;