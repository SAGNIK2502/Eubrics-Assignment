import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Assignment</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
<div className='my-3 mx-4 btnn'>
<button type="button" class="btn btn-danger mx-2">login</button>
<button type="button" class="btn btn-danger mx-2">Register</button>
</div>
</div>
</nav>
  )
}
