import React from 'react'
import './Event__Card.css'
import ImageZoom from 'react-medium-image-zoom'
const Event__Card = (props) => {
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
                <a className="effect effect-5 btnColor" href="#" title="Register">Register</a>
               </div>
           
    )
}

export default Event__Card
