import React,{useState,useEffect} from "react";
import {useHistory} from 'react-router-dom';
import "./components.css";
import city from "../images/city.jpg";





function AddDelivery() {

  const[name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const[depart,setDepart]=useState("");
  const [arrive,setArrive]=useState("");
  const[price,setPrice]=useState("");
  const [description,setDescription]=useState("");

  async function AddDeposit(){
    console.warn(name,phone,depart,arrive,price,description)

    const formData= new FormData();
    formData.append('name',name);
    formData.append('phone',phone);
    formData.append('depart',depart);
    formData.append('arrive',arrive);
    formData.append('price',price);
    formData.append('description',description);

    let result = await fetch("http://localhost:8000/api/adddeposit",{
      method:'POST',
      body:formData
    });
    alert ("Data has been saved")
  }


    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${city})`, height: "700px" }}
      >
        <div className="reg">
          <h3>Add Delivery</h3>

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="text"
              onChange={(e) => setDepart(e.target.value)}
              className="form-control"
              placeholder="Depart"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="text"
              onChange={(e) => setArrive(e.target.value)}
              className="form-control"
              placeholder="Arrive"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              placeholder="Price"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <br />

          <button onClick={AddDeposit} className="btn btn-success">ADD</button>
        </div>
      </div>
    );
  }
  
  export default AddDelivery;