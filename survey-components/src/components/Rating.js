import React, { useState, useEffect } from "react";
import Rating from "react-rating"
import axios from "axios"


const Star = () => {
  
  const [status, setStatus] = useState([]);

  const [newMember, setNewMember] = useState({
    name: "",
    
  });

  const handleChange = event => {
    setStatus({...newMember, [event.target.name] :event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios 
    .post("https://reqres.in/api/users")
      .then(res => {
        setStatus(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
    }


  return (
     <div className ="Star" >
       <form  onSubmit={handleSubmit}>
         <h1>Rate Us</h1>
          <Rating emptySymbol="far fa-star fa-2x" fullSymbol="fa fa-star fa-2x" />
          <input component="textarea" name="name" onChange={handleChange}></input>
          <button>Next</button>

       </form>
        </div>
  
  )
  
}
export default Star;

