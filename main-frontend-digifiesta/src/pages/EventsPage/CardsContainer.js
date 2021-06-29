import React,{useEffect,useState,useContext} from 'react'
import Event__Card from './Event__Card'
import './CardsContainer.css'
import { AuthContext } from '../../context/auth-context'
const CardsContainer = (props) => {
   const [events,setEvents]=useState([])
   const auth=useContext(AuthContext)
 

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
                 isLoading={props.isLoading}
                 setIsLoading={props.setIsLoading}
                 setIsRequest={props.setIsRequest}
                 isrequest={props.isrequest}
                 modal={props.modal}
                 toggle={props.toggle}
                 />
                
            ))}
        </div>
    )
}

export default CardsContainer
