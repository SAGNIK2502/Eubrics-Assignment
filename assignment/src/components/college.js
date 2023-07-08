import React from 'react'

function College() {
  return (
    <>
    <div className="box" id="heading">
      <h1>College</h1>
    </div>
    <div className="box">
      <div className="item">
        <input type="checkbox" />
        <p>Assigment of physics</p>
      </div>
      <form action="/" method="post" className="item">
        <input type="text" autoComplete='off'/>
        <button className="HealthButton" type="submit">+</button>
      </form>
    </div>
    </>
  )
}
export default College;