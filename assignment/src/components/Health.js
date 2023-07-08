import React from 'react'
import "../App.css";
function Health() {
  return (
    <>
    <div className="box" id="heading">
      <h1>Health</h1>
    </div>
    <div className="box">
      <div className="item">
        <input type="checkbox" />
        <p>Improve sleep schedule</p>
      </div>
      <form action="/" method="post" className="item">
        <input type="text" autoComplete='off'/>
        <button className="HealthButton" type="submit">+</button>
      </form>
    </div>
    </>
  )
}
export default Health;