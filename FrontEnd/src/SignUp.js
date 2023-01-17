import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function SignUp(){
    const[uname,setuname] = useState('');
    const[pwd,setpassword] = useState('');

    const register = () =>{
        //alert (uname + " " + pwd);
        let data ={
            email: uname,
            password:pwd
        }

        fetch('http://localhost:8094/lms/login/add',{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=> response.json())
          .then(json => console.log(json));
          alert('Sign Up Successful')
    }
    return(
        <div id="signup-div">
            <h2> SignUp Page </h2>
            Username: <input type="text" onChange={ (e) => setuname(e.target.value)}/> <br/><br/>
            Password: <input type="password" onChange={ (e) => setpassword(e.target.value)}/> <br/><br/>
            <button onClick={register}>Register</button> <br/><br/>
            <Link id="link" to="/login">Already Registered! <br></br>Login</Link>
        </div>
        
    )
}

export default SignUp