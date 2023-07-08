import React from 'react'

function Sports() {
  return (
    < >
    <div className="box" id="heading">
      <h1>sports</h1>
    </div>
    <div className="box">
      <div className="item">
        <input type="checkbox" />
        <p>football at 10</p>
      </div>
      <form action="/" method="post" className="item">
        <input type="text" autoComplete='off'/>
        <button className="HealthButton" type="submit">+</button>
      </form>
    </div>
    </>
  )
}
export default Sports;