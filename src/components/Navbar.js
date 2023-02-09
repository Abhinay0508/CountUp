import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (

    <nav className={`navbar bg-body-primary navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="Images/countup-logo.png" alt='' width="63" height="40" className="mx-2 d-inline-block align-text-middle"/>
      <b>{props.title}</b>
    </a>

    {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href ="#"><b>{props.title}</b></a> */}

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active mb-1" aria-current="page" href="/">Home </a>
            {/* <Link className="nav-link active mx-3" aria-current="page" to="/">Home </Link> */}
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active mx-2" to="/about">{props.aboutText}</Link>
          </li>   */}
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'Set title here...',
    aboutText: 'About ' 
}