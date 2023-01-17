import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'

function UpdateBook(){
    const [bid,setbid] = useState(0);
    const [btitle,setbtitle] = useState('');
    const [bauthor,setbauthor] = useState('');
    
    const updateBook = () =>{
    let data = {
        bookID:bid,
        title: btitle,
        author: bauthor
    }
    fetch(`http://localhost:8091/book/update_book/${bid}`,{
        method:"PUT",
        body: JSON.stringify(data),
        headers : {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*"
        }
       }).then(response => response.json())
         .then(json => console.log(json));
         alert("Book Updated Successfully !!! ")
        }
    

    return(
        <div id="signup-div">
            <h1> Update Book </h1>
            Book ID: <input type="number" onChange={ (e) => setbid(e.target.value)}/> <br/><br/>
            Book title: <input type="text" onChange={ (e) => setbtitle(e.target.value)}/> <br/><br/>
            Book author: <input type="text" onChange={ (e) => setbauthor(e.target.value)}/> <br/><br/>
            <button onClick={updateBook}> Update Book</button><br/><br/>
            <Link to="/book"> Books </Link>
        </div>
    )
    }

export default UpdateBook;