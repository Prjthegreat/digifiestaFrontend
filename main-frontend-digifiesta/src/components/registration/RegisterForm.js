import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Loader from "react-loader-spinner"
import NavBar from '../navbar/navbar'
import Banner from '../banner/banner'

import './RegisterForm.css'
import image from '../../images/UCCDA_wb (1).png'
import Err from '../../images/error.png'
import { AuthContext } from '../../context/auth-context'
const RegisterForm = () => {
  const [signUp,setSignUp]=useState(false)
  const [isLoading,setIsLoading]=useState(false)
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
    const onSubmitHandler=async(e)=>{
      e.preventDefault()
      if(!signUp){
        const email=document.getElementById('login-email').value
        const psw=document.getElementById('login-psw').value


         //login request
         try{
           setIsLoading(true)
          const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}user/login`,{
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer '+auth.token

              },
              body:JSON.stringify({
               user:email,
               password:psw,

              })
          })
          if(response.status===401){
            setIsLoading(false)
            document.getElementById('err_2').style.display='block'
            document.getElementById('err_2').innerHTML='invalid credentials'
            document.getElementById('err_2').style.opacity=1
            ID= setInterval(fn1,2000)
          }
          if(!response.ok){
              throw new Error(response.message);
          }
          const responseData=await response.json();
          console.log(responseData);
          setIsLoading(false)
          auth.login(responseData.token);
          // setLoading(false);
          history.push("/")
           console.log('loggedIn');
          // console.log(auth);
      }catch(err){
          // setLoading(false)
          // setError(err.message || 'Something went Wrong, Please try again.');
          setIsLoading(false)
          console.log(err)
      }

         //login request



      }
      else{
      
        const psw=document.getElementById('signup-psw').value
        
        if(psw.length<5){
          document.getElementById('err').style.display='block'
          document.getElementById('err').innerHTML='Password should contain minimum 5 characters'
          document.getElementById('err').style.opacity=1
          ID= setInterval(fn1,1000)
          return ;
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
         // setIsLoading(true)
          const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}user/signup`,{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
                //'Authorization':'Bearer '+token
              },
              
              body:JSON.stringify({
                email:document.getElementById('signup-email').value,
                userName:document.getElementById('signup-name').value,
                password:document.getElementById('signup-psw').value,
                collegeName:document.getElementById('signup-cllgName').value,
                rollNo:document.getElementById('signup-cllgRollNo').value,
                year:document.getElementById('signup-year').value,
                course:document.getElementById('signup-course').value,
                branch:document.getElementById('signup-branch').value,
                contactNo:document.getElementById('signup-contactNo').value,
              })
          })
          if(response.status==409){
            //setIsLoading(false)
            document.getElementById('err').style.display='block'
            document.getElementById('err').innerHTML='Either username not available or email already registered'
            document.getElementById('err').style.opacity=1
            ID= setInterval(fn1,1000)
          }
          if(!response.ok){
              throw new Error(response.message);
          }
          if(response.status===401){
            setIsLoading(false)
            document.getElementById('err').style.display='block'
            document.getElementById('err').innerHTML='invalid credentials'
            document.getElementById('err').style.opacity=1
            ID= setInterval(fn1,1000)
          }
          if(response.status==200){
            document.getElementById('err').style.display='block'
            document.getElementById('err').innerHTML='Check your email to verify account. After successfull verification switch to signin window to login with your req credentials'
            document.getElementById('err').style.opacity=1
            ID= setInterval(fn1,3000)
             console.log('check mail');
          }
          const responseData=await response.json();

          console.log(responseData);
          auth.login(responseData.token);
    
      }catch(err){
          
          setIsLoading(false)
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
          id: 3,
          name: "Event",
          link: "/eventpage"
        }, {
          id: 3,
          name: "About",
          link: "/about"
        }
      ]
          // banner image variable start
  let bgimg = {
    backgroundImage: `url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80)`,
    backgroundSize: "cover"
  }
  // banner image variable end 
  // banner text variable start
  let bannerText = {
    subHeading: 'First Register here, before taking registration in any event',
    heading: 'DigiFiesta Registeration',
    error: Err,
  }

    return (
        <React.Fragment>
          {isLoading && <div style={{backgroundColor:'rgba(42, 42, 44, 0.85)',height:'100vh'}} ><Loader
              type="Bars"
              color="#00BFFF"
              height={500}
              width={300}
             visible={isLoading}
            /> </div>}
         { !isLoading &&  <React.Fragment>
             <NavBar name={navitem} logo={image} rgsbtndisable={true} />
             <Banner  
              bg={bgimg}
              text={bannerText}
              />
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
            <p className="error" id="err_2" ></p>
           
          </form><br/>
          
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
            <input type="text" name="" placeholder="Branch of your Course" id="signup-branch" />
            <input type="text" name="" placeholder="Contact Number" id="signup-contactNo" required/>
            <input type="submit" name=""  />
            <p className="signup">
              Already have an account ?
              <a href="#" onClick={toggleForm}>Sign in.</a>
            </p>
            <p className="error" id="err" ></p>
            {/* <p style={{color:'green',fontSize:'10px'}} >Check your email to verify account. After successfull verification
               switch to signin window to login with your req credentials </p> */}
          </form>
        </div>
        <div className="imgBx"><img src="https://www.crushpixel.com/big-static15/preview4/hud-circle-user-interface-on-1970747.jpg" alt="" /></div>
      </div>
    </div> 
        </section>
        </React.Fragment>}
        </React.Fragment>
    )
}

export default RegisterForm
