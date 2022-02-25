import React,{useState,useEffect} from "react";
import "./components.css";
import {Table} from 'react-bootstrap';
import { Link } from "react-router-dom";





function Deposit() {

  const [data,setData]=useState([]);
  useEffect( ()=>{
    getData();
  },[])
  
  async function deleteOperation(id)
  {
    
    let result =await fetch("http://localhost:8000/api/delete/"+id,{
      method:'DELETE'
       
    });
    result= await result.json();
    getData();
  }

  async function getData()
  {
    let result =await fetch("http://localhost:8000/api/list");
    result =await result.json();
   setData(result)
  }





    return (
      <div className="App">
          <Table className="table table-striped">
          <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Depart</th>
      <th scope="col">Arrive</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item)=>
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.depart}</td>
      <td>{item.arrive}</td>
      <td>{item.price}</td>
      <td>{item.description}</td>
      <td>
        <a onClick={()=>deleteOperation(item.id)} className="btn btn-danger dele">Delete</a>
        <Link to={"update/"+item.id}>
      <a className="btn btn-warning ">Update</a>
      </Link>
      </td>
      
    </tr>
      )
    }
  </tbody>





          </Table>
      </div>
    );
  }
  
  export default Deposit;