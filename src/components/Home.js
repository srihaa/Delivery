import React,{useState,useEffect} from "react";
import "./components.css";
import background from "../images/truck.jpg";
import user from "../images/user.jpg";

function Home() {

  const [data,setData]=useState([]);
  useEffect(async()=>{
    let result =await fetch("http://localhost:8000/api/list");
     result =await result.json();
    setData(result)
  },[])
  

  async function search1(key)
  {
    let result =await fetch ("http://localhost:8000/api/search1/"+key);
    result =await result.json();
    console.warn(result)
    setData(result)
  }

  async function search2(key)
  {
    let result =await fetch ("http://localhost:8000/api/search2/"+key);
    result =await result.json();
    console.warn(result)
    setData(result)
  }


  return (
   
    <div className="background"  style={{ backgroundImage: `url(${background})`,backgroundAttachment:"fixed",backgroundPosition:"center"  }}  >


      <div className="search container">
        <input
          className="form-control mr-sm-2"
          onChange={(e)=>search1(e.target.value)}
          type="search"
          placeholder="From"
          aria-label="Search"
        />
        <br />
        <input
          className="form-control mr-sm-2"
          onChange={(e)=>search2(e.target.value)}
          type="search"
          placeholder="To"
          aria-label="Search"
        />
        <br />
      </div>


      <section>
        <div className="containerr">
          
        {
    data.map((item)=>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={user} />
              </div>
              <div className="contentBx">
                <h3>
                  {item.name} <br /> <span> {item.phone}</span>
                </h3>
              </div>
            </div>
            <ul className="sci">
            <li className="--i:1">
                From: {item.depart}
            </li>
            <li className="--i:2">   
                To: {item.arrive}
            </li>
            <li className="--i:3">
                {item.price} Dt
            </li>
          </ul>
          <p>{item.description}</p>
          </div>

)
}
          
        </div>
      </section>

    </div>
  );
}

export default Home;
