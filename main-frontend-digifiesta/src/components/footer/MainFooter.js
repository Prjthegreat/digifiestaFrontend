import React from 'react'
import {Link} from 'react-router-dom'
import './MainFooter.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
const MainFooter = () => {
    return (
        <div>
          {/* // footer start   */}
    
    <footer class="footer-16371">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 text-center">
            <div class="footer-site-logo mb-4">
              <a href="#">DigiFiesta</a>
            </div>
            <ul class="list-unstyled nav-links mb-5">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/eventpage" >Events</Link></li>
              <li><Link to="#1">Contact</Link></li>
              <li><Link to="/registerhere">Registration</Link></li>
            </ul>
            <div id='contact' className="list-unstyled nav-links mb-5" style={{color:'white',textAlign:'revert',fontWeight:'lighter'}} >
             <p>YMCA UST,Sector-6 Faridabad, Haryana, India</p>
             <p> digi123@gmail.com</p>
             <p> +919999999939</p>
           </div>
            <div class="social mb-4">
              <h3>Stay in touch</h3>
              <ul class="list-unstyled">
                <li class="in"><a href="https://instagram.com/ucc_digitalaffairscell?utm_medium=copy_link" target="_blank" ><span className="fa fa-instagram"></span></a></li>
                <li class="fb"><a href="https://www.facebook.com/University-Computer-Center-and-Digital-Affairs-Cell-103859811313385/" target="_blank" ><span className="fa fa-facebook"></span></a></li>
                <li class="tw"><a href="#"><span class="fa fa-linkedin"></span></a></li>
              </ul>
            </div>
           
          
            <div class="copyright">
              <p class="mb-0"><small>&copy; DigiFiesta. All Rights Reserved.</small></p>
            </div>


          </div>
        </div>
      </div>
    </footer>

          {/* //footer ends   */}
        </div>
    )
}

export default MainFooter
