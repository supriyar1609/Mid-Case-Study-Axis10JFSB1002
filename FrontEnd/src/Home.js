import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import'./App.css';

function Home(){
    
    return(
        <>
        <ul id="horizontal-list">
            <li> <Link to="/book"> Books </Link> </li>
            <li> <Link to="/add"> AddBook </Link> </li>
            <li> <Link to="/update"> UpdateBook </Link> </li>
            <li> <Link to="/login"> Logout </Link></li>
        </ul>
        </>
    )
}
export default Home