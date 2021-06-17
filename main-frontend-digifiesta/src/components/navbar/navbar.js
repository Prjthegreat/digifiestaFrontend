import React,{useState} from 'react';
import {Link} from "react-router-dom";
import Button from "./registerbtn/navbtn";
import './navbar.css'
import '../../components/responsive.css'
function Navbar(props) {
  let navItem = props
    .name
    .map((item) => {
      return (
        <li key={item.id} className="nav-item">
          {/* <Link to={item.link}>{item.name}</Link> */}
          <a href={item.link} >{item.name}</a>
        </li>
      )
    })
    const [resNav,setResNav]=useState(false)
    const navBarHandler=()=>{
      setResNav(!resNav)
      const container = document.querySelector('.collapse');
        container.classList.toggle('show');
       
    }
    
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img style={{height:'100px',width:'100px'}}  src={props.logo} alt={props.logo}/>
        </Link>
        <button className="navbar-toggler" onClick={navBarHandler} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars" aria-hidden="true"></i>

      </button>

        <div className={`collapse navbar-collapse`}  id="navbarSupportedContent">
          <ul className={`navbar-nav ml-auto ${resNav?'fade-in':'fade-out'}`}>

            {navItem}
            <li className="nav-item dropdown">
            <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              RegisterFast!!
            </a>
            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/error" class="dropdown-item" href="#">Error</Link>
              <Link to="/coming_soon" class="dropdown-item" href="#">Comming Soon</Link>
            </div> */}
          </li>
          { !props.rgsbtndisable &&  <Link to="/pricing_plane">
            <Button></Button>
            </Link>}
            
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;