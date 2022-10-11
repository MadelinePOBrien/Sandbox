import React from 'react'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1> This is the Login page</h1>
            <Link to="CreateAccount">Create an account</Link>
        </div>
    );

}
export default Login;