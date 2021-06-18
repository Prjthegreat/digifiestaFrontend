import React,{useEffect,useState,useContext} from 'react'
import Event__Card from './Event__Card'
import './CardsContainer.css'
import { AuthContext } from '../../context/auth-context'
const CardsContainer = (props) => {
   const [events,setEvents]=useState([])
   const auth=useContext(AuthContext)
   const DUMMY_EVENTS=[
       { poster:'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
       , eventName:'Event_1', eventDate:'12 June,2021',eventTime:'12:00 PM', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem magni eius nesciunt deleniti incidunt nemo tempora sapiente. Velit, nisi unde nemo harum suscipit quasi?'
     },
     { poster:'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
     , eventName:'Event_2',eventDate:'12 June,2021',eventTime:'12:00 PM',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem magni eius nesciunt deleniti incidunt nemo tempora sapiente. Velit, nisi unde nemo harum suscipit quasi?'
   },
   { poster:'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
     , eventName:'Event_3',eventDate:'12 June,2021',eventTime:'12:00 PM',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem magni eius nesciunt deleniti incidunt nemo tempora sapiente. Velit, nisi unde nemo harum suscipit quasi?'
   }
   ]
  //  useEffect(() => {
  //      const fetchEvents=async()=>{
  //        console.log(auth.token)
  //       try{
  //         const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}event/list-events`,{
  //             method:'GET',
  //             headers:{
  //                 'Content-Type':'application/json',
  //                 'Authorization':'Bearer '+auth.token
    
  //             },
  //         })
  //         if(!response.ok){
  //             throw new Error(response.message);
  //         }
  //         const responseData=await response.json();
  //         console.log(responseData);
  //         setEvents(responseData)
  //         // setLoading(false);
  //          console.log('get all events');
  //         // console.log(auth);
  //     }catch(err){
  //         // setLoading(false)
  //         // setError(err.message || 'Something went Wrong, Please try again.');
  //         console.log(err)
  //     }
  //      }
  //      fetchEvents()
  //  }, [])

    return (
        <div className="events__flex__box" >
            { props.events.map(event=>(
                <Event__Card 
                 poster={event.poster} 
                 eventName={event.eventName}
                 content={event.content} 
                 eventDate={event.eventDate}
                 eventTime={event.eventTime} 
                 isRegistered={event.isRegistered}
                 id={event._id}
                 />
            ))}
        </div>
    )
}

export default CardsContainer
