import React,{useState,useEffect} from "react";
import "./components.css";
import redcar from "../images/redcar.jpg";
import {useHistory} from 'react-router-dom';

function Register() {

  useEffect(()=>{
    if (localStorage.getItem('user-info'))
    {
      history.push("/home")
    }
  },[])

  const [name,setName]=useState("");
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const history=useHistory();

  async function signUp () {
   let item={name,email,password}
    

    let result=  await fetch ("http://localhost:8000/api/register",{
    method:'POST',
    body:JSON.stringify(item),
    headers:{
      "content-Type":'application/json',
      "Accept":'application/json'
    }
  })
  result= await result.json()
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/home")

  }


  return (
    <div className="App" style={{ backgroundImage: `url(${redcar})`, height: "700px" }}>

      <div className="reg">
      <div className="form-group col-sm-6 offset-sm-3">
      <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />
        <br/>
        
        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group col-sm-6 offset-sm-3">
      
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
        />
      </div>
    <br />
      <button onClick={signUp} className="btn btn-success">
        Sign Up
      </button>
      </div>

    </div>
  );
}

export default Register;
