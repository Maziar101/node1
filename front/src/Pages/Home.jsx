import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [tours, setTours] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/api/tours");
      const data = await res.json();
      setTours(data?.data);
    })();
  }, []);

  const item = tours?.map((tour, index) => (
    <div key={index} style={{boxShadow:"0 0 5px blue",display:"flex",justifyContent:"center",flexDirection:"column",border:"1px solid black",padding:"20px",borderRadius:"10px"}}>
        {console.log(tour)}
      <p>{tour?.name}</p>
      <p>price :{tour?.price}</p>
      <button style={{width:"100%",backgroundColor:"lightBlue",border:"none",padding:"10px",borderRadius:"8px"}}><Link style={{color:"black",textDecoration:"none"}} to={`/tours/${tour?.id}/${tour?.name.split(" ").join("-").toLowerCase()}`}>More Details</Link></button>
    </div>
  ));
  return (
    <>
      <section style={{height:"100vh",display:"flex",justifyContent:"center",alignItem:"center",width:"100%",overflow:"none"}}>
        <div
          style={{ width:"80%" , margin:"auto" , display: "grid", gridTemplateColumns:"auto auto auto",gap:"20px"}}
        >
          {item}
        </div>
      </section>
    </>
  );
}
