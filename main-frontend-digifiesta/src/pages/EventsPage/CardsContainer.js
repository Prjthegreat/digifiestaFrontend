import React from 'react'
import Event__Card from './Event__Card'
import './CardsContainer.css'
const CardsContainer = () => {

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

    return (
        <div className="events__flex__box" >
            {DUMMY_EVENTS.map(event=>(
                <Event__Card 
                 poster={event.poster} 
                 eventName={event.eventName}
                 content={event.content} 
                 eventDate={event.eventDate}
                 eventTime={event.eventTime} 
                 />
            ))}
        </div>
    )
}

export default CardsContainer
