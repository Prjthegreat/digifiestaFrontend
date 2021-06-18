import React,{useState,useEffect,useContext} from 'react'
import { useHistory } from 'react-router'
import './Event__Card.css'
import ImageZoom from 'react-medium-image-zoom'
import { AuthContext } from '../../context/auth-context'

const Event__Card = (props) => {
   const auth=useContext(AuthContext)
   const history=useHistory()
   const [confirmRegister,setConfirmRegister]=useState(true)
   const registerEventHandler=async()=>{
        //login request
        try{
            const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}event/register-event`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+auth.token
                },
                body:JSON.stringify({
                eventID:props.id
  
                })
            })
            if(!response.ok){
                throw new Error(response.message);
            }
            const responseData=await response.json();
            history.push("/eventpage")
             console.log('registered for this events successfully with event id:',props.id)
        }catch(err){
            // setLoading(false)
            // setError(err.message || 'Something went Wrong, Please try again.');
            console.log(err)
        }
  
   }

    return (
           
                <div class="card__box">
                <div class="card__img">
                {/* <img className="imagg" src={props.imageUrl} alt="" /> */}
                <ImageZoom
                    image={{
                    src: props.poster,
                    alt: 'Golden Gate Bridge',
                    className: 'img',
                    style: { width: '100%',height:'100%',objectFit:'cover' }
                    }}
                    zoomImage={{
                    src: props.poster,
                    alt: 'Golden Gate Bridge'
                    }}
                />
                </div>
                <div class="card__content">
                <span>{props.eventName}</span>
                <p><a className="anchhor" href="#">{props.content}</a></p>
                <span>{`Event Date: ${props.eventDate}`}</span><br/>
                <span>{`Event Time: ${props.eventTime}`}</span>
                </div>
              { !props.isRegistered && <button style={{border:'none'}} onClick={()=>setConfirmRegister(true)}   >
                <a className="effect effect-5 btnColor"   title="Register">Register</a>
                </button>}
                {confirmRegister && <div> <h3 style={{fontSize:'15px',color:'green'}}>Are you sure you want to register for this event</h3><br/>
                
                 <button onClick={registerEventHandler} >Yes</button>
                 <button onClick={()=>setConfirmRegister(false)} >No</button>
                
                  </div>  }
                {props.isRegistered && <p style={{fontSize:'12px',color:'green'}} >You are registered for this event</p>}
               </div>
           
    )
}

export default Event__Card
