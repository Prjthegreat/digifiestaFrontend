import React from 'react'
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
              <li><a href="#">Home</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Registration</a></li>
            </ul>
            <div id='contact' className="list-unstyled nav-links mb-5" style={{color:'white',textAlign:'revert',fontWeight:'lighter'}} >
             <p>YMCA UST,Sector-6 Faridabad, Haryana, India</p>
             <p> digi123@gmail.com</p>
             <p> +919999999939</p>
           </div>
            <div class="social mb-4">
              <h3>Stay in touch</h3>
              <ul class="list-unstyled">
                <li class="in"><a href="#"><span className="fa fa-instagram"></span></a></li>
                <li class="fb"><a href="#"><span className="fa fa-facebook"></span></a></li>
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
