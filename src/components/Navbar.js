import React from 'react'
import { useState } from 'react'

export default function Navbar(props) {

    const [page, setPage] = useState('Home')
    
    const ChangeHome = () => {
        setPage('Home')
    }


  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${props.mode==='light'?'':'bg-dark'}`} data-bs-theme={`${props.mode==='light'?'':'dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" onClick={ChangeHome} href="#">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${page==='Home'?'active':undefined}`} aria-current="page" href="#" onClick={ChangeHome}>Home</a>
        </li>
      </ul>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='light'?'black':'white'}} >DarkMode</label>
       </div>
    </div>
  </div>
  
</nav>
  )
}
