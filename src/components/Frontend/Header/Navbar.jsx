import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <Link to='/' className="navbar-brand" >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link" >Contact</Link>
        </li>
      </ul>
      <div className="d-flex">

        <Link to='/dashboard' className="btn btn-success" type="submit">Dashboard</Link>
        <Link to='auth/login' className="btn btn-success" type="submit">Login</Link>
        <Link to='auth/register' className="btn btn-success" type="submit">Register</Link>
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Navbar