import React,{useState,useEffect} from "react";
import "./components.css";
import { withRouter } from "react-router-dom";
import dl from "../images/dl.jpg";




function UpdateDelivery(props) {
    const [data,setData]=useState([])
    useEffect(async ()=>{
        let result =await fetch("http://localhost:8000/api/deposit/"+props.match.params.id);
        result = await result.json();
        setData(result)
    })

    return (
        <div className="App" style={{ backgroundImage: `url(${dl})`, backgroundAttachment:"fixed",backgroundPosition:"center"}}>
         <div className="reg">

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="text"
              defaultValue={data.name}
              className="form-control"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="text"
              defaultValue={data.phone}
              className="form-control"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="text"
              defaultValue={data.depart}
              className="form-control"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="text"
              defaultValue={data.arrive}
              className="form-control"
            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <input
              type="number"
              defaultValue={data.price}
              className="form-control"

            />
          </div>
          <br />

          <div className="form-group col-sm-6 offset-sm-3">
            <textarea
              defaultValue={data.description}
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <br />

          <button className="btn btn-warning">Update</button>
        </div>
</div>
    );
  }
  
  export default withRouter(UpdateDelivery);