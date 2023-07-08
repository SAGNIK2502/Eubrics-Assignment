import React from 'react'

function Communication() {
  return (
    <>
    <div className="box" id="heading">
      <h1>Communication</h1>
    </div>
    <div className="box">
      <div className="item">
        <input type="checkbox" />
        <p>practice english</p>
      </div>
      <form action="/" method="post" className="item">
        <input type="text" autoComplete='off'/>
        <button className="HealthButton" type="submit">+</button>
      </form>
    </div>
    </>
  )
}
export default Communication;