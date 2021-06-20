import React from 'react';
import {Link} from "react-router-dom";
import './banner.css'
import '../responsive.css'
function bannerText(props) {
  return (
    <div>
      <div className="error">
        <p className="errortitle">
          error page
        </p>
        <img src={props.err} alt={props.err}/>
        <p className="gohome"  >It's probably something we've done worng but now we know
          about it and we'll try to fix it. Go 
          <span>
            <Link to="/" target="_blank">
               home 

            </Link>
          </span>
           or try to search</p>
      </div>
      <div className="homebanner" style={{paddingLeft:'50px',paddingRight:'50px'}} >
        <p>{props.sub}</p>
        <h1 >{props.heading}</h1>
      </div>
      <div className="ericon">
     
      <Link to="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
      <Link to="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
      <Link to="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
      <Link to="#" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
      </div>
      <div className="form">
        <form>
        <input type="text" placeholder="Your E-mail Here"/>
        <button type="submit">Subscribe</button>
        
        </form>
        
    </div> 
    <p className="sub">Subscribe to our newsletter & get every update notifications</p>
    </div>
  )
}

export default bannerText;