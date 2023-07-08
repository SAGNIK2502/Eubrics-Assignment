import React from 'react'
// import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom"
import "../App.css";
//  import {
//    BrowserRouter as Router,   Routes,
//    Route,
//  } from "react-router-dom";
function Button(props) {
// const navigate=useNavigate();
const navigate=useNavigate();
  return (
   <>
    <div className="buttonc my-4 mx-3">
      <button className="btn bt btn-light my-3 mx-3" onClick={()=>navigate("/"+`${props.heading}`)} 
      >{props.todo}</button>
    </div>
    
    </>
    
  )
}
export default Button;