import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    
    return (
        <div>
            <h1>Home</h1>
            <h1><Link to="Postings">Postings</Link></h1>
            <h1><Link to="Pantry">Pantry</Link></h1>
            <h1><Link to="Cookbook">Cookbook</Link></h1>                
        </div>
        
    );

}
export default Home;