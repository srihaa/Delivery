import React,{useState,useEffect} from "react";
import {useHistory} from 'react-router-dom';
import "./components.css";
import delivery from "../images/delivery.jpg";






function Login() {


  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  const history=useHistory();
  useEffect(()=>{
    if (localStorage.getItem('user-info'))
    {
      history.push("/home")
    }
  },[])

  async function login() {
    let item={email,password}
    

    let result=  await fetch ("http://localhost:8000/api/login",{
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
      <div className="App" style={{ backgroundImage: `url(${delivery})`, height: "700px" }}>

      <div className="reg">
      <div className="form-group col-sm-6 offset-sm-3">
        
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
      <button onClick={login} className="btn btn-success">
        Login
      </button>
      </div>

    </div>
    );
  }
  
  export default Login;