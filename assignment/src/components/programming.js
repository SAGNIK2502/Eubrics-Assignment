import React from 'react'

function Programming() {
  return (
    <>
    <div className="box" id="heading">
      <h1>Programming</h1>
    </div>
    <div className="box">
      <div className="item">
        <input type="checkbox" />
        <p>c++</p>
      </div>
      <form action="/" method="post" className="item">
        <input type="text" autoComplete='off'/>
        <button className="HealthButton" type="submit">+</button>
      </form>
    </div>
    </>
  )
}
export default Programming;