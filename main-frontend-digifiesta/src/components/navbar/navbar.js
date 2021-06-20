import React,{useState,useContext} from 'react';
import {Link,NavLink} from "react-router-dom";
import Button from "./registerbtn/navbtn";
import './navbar.css'
import '../../components/responsive.css'
import {AuthContext} from '../../context/auth-context'
function Navbar(props) {
  const auth =useContext(AuthContext)
  let navItem = props
    .name
    .map((item) => {
      return (
        <li key={item.id} className="nav-item">
          {/* <Link to={item.link}>{item.name}</Link> */}
          <NavLink to={item.link} >{item.name}</NavLink>
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
      <div className="container" style={{width:'100%',margin:'0px'}} >
        <Link className="navbar-brand" to="/">
          <img style={{height:'80px',width:'80px',marginRight:'5px'}}  src={props.logo} alt={props.logo}/>
        </Link>
        <button className="navbar-toggler" onClick={navBarHandler} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars" aria-hidden="true"></i>

      </button>

        <div className={`collapse navbar-collapse`}  id="navbarSupportedContent">
          <ul className={`navbar-nav ml-auto ${resNav?'fade-in':'fade-out'}`}>

            {navItem}
            <li className="nav-item ">
             { auth.islogin && <Link to="/" onClick={auth.logout}>Logout</Link>}
            </li>
          {/* {auth.islogin &&   <button className="logoutbtn" onClick={auth.logout} >LogOut</button>  } */}
         
            
          </ul>
          {/* { !props.rgsbtndisable &&  <Link to="/pricing_plane">
            <Button></Button>
            </Link>} */}

        </div>
        <div className={`navbar-nav registerbtnmargin ${!resNav ?'regiterbtnfix':''}`}>
        { !props.rgsbtndisable && !auth.islogin &&  <Link to="/registerhere">
            <Button></Button>
            </Link>}
        </div>   
        
      </div>
    </nav>
  );
}

export default Navbar;