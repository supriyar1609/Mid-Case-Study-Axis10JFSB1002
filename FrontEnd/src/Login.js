import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

function Login(){
    const[username,setusername] = useState('');
    const[password,setpassword] = useState('');
    const login = () =>{
        //alert (uname + " " + pwd);
        let data ={
            email: username,
            password:password
        }

        fetch('http://localhost:8094/lms/login/validate',{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=>{return response.text();})
          .then((text)=>{
            if(text=='valid'){
                    alert("Logged in Successful..")
                    window.location.href="./home";
            }else{
                alert('please verirfy credentails')
            }
    })
}
    return(
        <div id="signup-div">
            <h2> Login Page </h2>
            Username: <input type="text" onChange={ (e) => setusername(e.target.value)}/> <br/><br/>
            Password: <input type="password" onChange={ (e) => setpassword(e.target.value)}/> <br/><br/>
            <button onClick={login}>Login</button> <br/><br/>
            <Link id="link" to="/signup">Not Registered?<br></br>Signup</Link>
        </div>
    )
}
export default Login