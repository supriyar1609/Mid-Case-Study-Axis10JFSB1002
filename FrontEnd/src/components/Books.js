import { useEffect, React, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css'

function Books(){
    const [books,setBooks] = useState([]);
    const url = `http://localhost:8091/book/getAllBooks`;
    
    const deletebook= (bookID) =>{
      const url =`http://localhost:8091/book/delete_book/${bookID}`;
      axios.delete(url).then(() =>{
        alert('Book is deleted')
        axios.get(`http://localhost:8091/book`).then( res => { setBooks(res.data)})
      })
    }
    
    const searchById = (bookID) => {
      const url = `http://localhost:8091/book/get_book/${bookID}`;
      axios.get(url).then(res => {

          setBooks(res.data);
          console.log(res.data);

      }).catch(_error=>{
        alert("Book not Found");
      })
  }
  
  const [searchid,setSearchid] = useState([]);
      
  
    useEffect ( () =>{
      axios.get(url).then( res => {
        //console.log(res.data);
        setBooks(res.data);
      })
    }, []);

    return(
      <div className="book-list">
        <h1> Books List</h1>
        <input type="" className='search-book-box' placeholder='Search Book'
            onChange={(e) => setSearchid(e.target.value)}
             />
             <button onClick={() => searchById(searchid)}>Search</button>
        <ul>
            
              <li> ID </li>
              <li> Author </li>
              <li> Title </li>
              <li> Update </li>
              <li> Delete </li>
            </ul>
            {books.length>0 ? books.map (p => 
                            <ul key={p.bookID}>
                            <li>{p.bookID}</li>
                            <li>{p.title}</li>
                            <li>{p.author}</li>
                            <li><Link to={"/update"}>Update</Link></li>
                            <li><button onClick={()=>deletebook(p.bookID)}> Delete</button></li>
                            </ul>
                            ): <h2 >No Result Found</h2>
                          }
                            <Link id="link" to="/home"> Home </Link><br/>
                            <Link id="link" to="/add">  AddBook </Link>
        
        </div>
    )
}

export default Books