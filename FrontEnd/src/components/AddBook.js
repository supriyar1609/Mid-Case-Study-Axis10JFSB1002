import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'

function AddBook(){
    const [bid,setbid] = useState('');
    const [ptitle,settitle] = useState('');
    const [pauthor,setauthor] = useState('');
    
    const addBook = () =>{
    let data = {
        bookID: bid,
        title: ptitle,
        author: pauthor
   }
    fetch('http://localhost:8091/book/addBook',{
    method:"POST",
    body: JSON.stringify(data),
    headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
   }).then(response => response.json())
     .then(json => console.log(json));
     alert("Book Added Successfully !!! ")
    }


    //const AddProduct =() => {
    return(
        <div id="signup-div">
            <h1> Add Book </h1>
            Book ID: <input type="number" onChange={ (e) => setbid(e.target.value)}/> <br/><br/>
            title: <input type="text" onChange={ (e) => settitle(e.target.value)}/> <br/><br/>
            author: <input type="text" onChange={ (e) => setauthor(e.target.value)}/> <br/><br/>
            <button onClick={addBook}> Add Book</button><br/><br/>
            <Link to="/book"> Books </Link>
        </div>
    )
    }

export default AddBook