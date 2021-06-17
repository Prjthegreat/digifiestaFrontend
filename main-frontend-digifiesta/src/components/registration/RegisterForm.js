import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import jQuery from 'jquery'
import NavBar from '../navbar/navbar'
import './RegisterForm.css'
import image from '../../images/UCCDA_wb (1).png'
import { AuthContext } from '../../context/auth-context'
const RegisterForm = () => {
  const [signUp,setSignUp]=useState(false)
  const [token,settoken]=useState()
  const auth=useContext(AuthContext)
  const history=useHistory()
    const toggleForm = () => {
        const container = document.querySelector('.contain__er');
        container.classList.toggle('active');
        var signup=!signUp
        setSignUp(!signUp);
        if(signup==true){
          document.getElementById('cont').style.height='750px'
        }
        else if(signup==false){
          document.getElementById('cont').style.height='500px'
        }
      };
      var i=0;
      var ID
    const fn1=()=>{
        i++
        console.log(i)
        if(i==5){
          i=0;
          document.getElementById('err').style.opacity=0
          //document.getElementById('err').style.display='none'
          clearInterval(ID)
          return;
        }
    }
    function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = jQuery.trim(cookies[i]);
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }  
    const onSubmitHandler=async(e)=>{
      e.preventDefault()
      if(!signUp){
        const email=document.getElementById('login-email').value
        const psw=document.getElementById('login-psw').value
        console.log(psw,email);


         //login request
      //    try{
      //     const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}accounts/register`,{
      //         method:'POST',
      //         headers:{
      //             'Content-Type':'application/json'
      //         },
      //         body:JSON.stringify({
      //          email:document.getElementById('signup-email').value,
      //          password:psw,

      //         })
      //     })
      //     if(!response.ok){
      //         throw new Error(response.message);
      //     }
      //     const responseData=await response.json();
      //     console.log(responseData.user.id);
      //     auth.login(responseData.user.id,responseData.token);
      //     // setLoading(false);
      //      console.log('loggedIn');
      //     // console.log(auth);
      // }catch(err){
      //     // setLoading(false)
      //     // setError(err.message || 'Something went Wrong, Please try again.');
      //     console.log(err)
      // }

         //login request



      }
      else{
        // var csrftoken=Cookies.get('csrftoken');
        // Cookies.set('name', 'value');
        //  console.log(Cookies.get())
        // var cookies= document.cookie.split(';').map(cookie=>cookie.split('=')).reduce((accumulator,[key, value])=>({...accumulator,[key.trim()]: decodeURIComponent(value) }))
        // console.log(cookies.csrftoken)
        // settoken(cookies.csrftoken)
        // var csrftoken = getCookie('csrftoken');
        //console.log(csrftoken)
        const psw=document.getElementById('signup-psw').value
        console.log(psw)
        if(psw.length<5){
          document.getElementById('err').style.display='block'
          document.getElementById('err').style.opacity=1
          ID= setInterval(fn1,1000)
         }
         //registration request
         try{
           //var csrftoken = getCookie('csrftoken');
          
          const formData = new FormData()
          formData.append('username',document.getElementById('signup-name').value)
          formData.append('email',document.getElementById('signup-email').value)
          formData.append('password',document.getElementById('signup-psw').value)
          formData.append('collegeName',document.getElementById('signup-cllgName').value)
          formData.append('rollNo',document.getElementById('signup-cllgRollNo').value)
          formData.append('year',document.getElementById('signup-year').value)
          formData.append('course',document.getElementById('signup-course').value)
          formData.append('branch',document.getElementById('signup-branch').value)
          formData.append('contactNo',document.getElementById('signup-contactNo').value)
          const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}accounts/register/`,{
              method:'POST',
              headers:{
                "Accept": "application/json",
                'Content-Type':'application/json',
                  'X-CSRFTOKEN': csrftoken
              },
              
              body:JSON.stringify({
                email:document.getElementById('signup-email').value,
                username:document.getElementById('signup-name').value,
                password:document.getElementById('signup-psw').value,
                collegeName:document.getElementById('signup-cllgName').value,
                rollNo:document.getElementById('signup-cllgRollNo').value,
                year:document.getElementById('signup-year').value,
                course:document.getElementById('signup-course').value,
                //branch:document.getElementById('signup-branch').value,
                contactNo:document.getElementById('signup-contactNo').value,
                //csrfmiddlewaretoken:'urghf3489fjuf3jivb3iuvrb'
              })
          })
          if(!response.ok){
              throw new Error(response.message);
          }
          var csrftoken = getCookie('csrftoken');
          console.log(csrftoken)
          const responseData=await response.json();

          console.log(responseData);
          //auth.login(responseData);
          // setLoading(false);
           console.log('signed up');
          // console.log(auth);
      }catch(err){
          // setLoading(false)
          // setError(err.message || 'Something went Wrong, Please try again.');
          console.log(err)
      }

         // registration request

      }
    }  

      const navitem = [
        {
          id: 1,
          name: "Home",
          link: "/"
        }, {
          id: 2,
          name: "Speakers",
          link: "#speakers"
        }, {
          id: 3,
          name: "Event",
          link: "/eventpage"
        }, {
          id: 4,
          name: "Testimonial",
          link: "#testimonial"
        }, {
          id: 5,
          name: "Contact",
          link: "#contact"
        }
      ]

    return (
        <React.Fragment>
             <NavBar name={navitem} logo={image} rgsbtndisable={true} />
        <section className="sec__tion" >
            <div id="cont" className="contain__er" style={{paddingTop:'80px'}} >
      <div className="user signinBx">
        <div className="imgBx"><img src="https://st2.depositphotos.com/1035451/10019/v/950/depositphotos_100194360-stock-illustration-futuristic-digital-theme.jpg" alt="" /></div>
        <div className="formBx">
          <form action="" onSubmit={onSubmitHandler}>
            <h2>Sign In</h2>
            <input type="email" name="" placeholder="Email Address" id="login-email" required/>
            <input type="password" name="" placeholder="Password" id="login-psw" required />
            <input type="submit" name="" value="Login" />
            <p className="signup">
              Haven't Registered yet ?
              <a href="#" onClick={toggleForm}>Register here</a>
            </p>
           
          </form>
        </div>
      </div>
    
      <div className="user signupBx">
        <div className="formBx">
          <form onSubmit={onSubmitHandler} >
            <h2>Registration for DigiFiesta</h2>
            <input type="text" name="" placeholder="Username" id="signup-name" required />
            <input type="email" name="" placeholder="Email Address" id="signup-email"  required />
            <input type="password" name="" placeholder="Create Password" id="signup-psw" required />
            <input type="text" name="" placeholder="College Name" id="signup-cllgName" required/>
            <input type="text" name="" placeholder="College Roll No" id="signup-cllgRollNo" required/>
            <input type="text" name="" placeholder="Current year of your Course" id="signup-year" required/>
            <input type="text" name="" placeholder="Your Course" id="signup-course" required/>
            <input type="text" name="" placeholder="Branch of your Course (optional)" id="signup-branch" />
            <input type="text" name="" placeholder="Contact Number" id="signup-contactNo" required/>
            <input type="submit" name=""  />
            <p className="signup">
              Already have an account ?
              <a href="#" onClick={toggleForm}>Sign in.</a>
            </p>
            <p className="error" id="err" >Password should contain minimum 5 characters</p>
          </form>
        </div>
        <div className="imgBx"><img src="https://www.crushpixel.com/big-static15/preview4/hud-circle-user-interface-on-1970747.jpg" alt="" /></div>
      </div>
    </div> 
        </section>
        </React.Fragment>
    )
}

export default RegisterForm
