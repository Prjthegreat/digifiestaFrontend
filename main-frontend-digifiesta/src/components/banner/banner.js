import React from 'react';
import BannerText from './banner-text';
import CountDown from './bannerCountDown';
import Vedionbtn from './vediobtn';
import './banner.css'

function banner(props) {

  return (
    <section style={props.bg} className="banner-part">
      <div className="overlay">
        <div className="container p-0">
          <BannerText err={props.text.error} sub={props.text.subHeading} heading={props.text.heading} />
        { props.countdown && props.videobtn && 
        <div className="row">
                <div className="col-lg-9">
                     <CountDown count={props.countdown}/>
                </div>

                <div className="col-lg-3 p-0">
                     <Vedionbtn videobtn={props.videobtn}/>
                </div>
          </div>}

        </div>
      </div>
    </section>
  )
}

export default banner;