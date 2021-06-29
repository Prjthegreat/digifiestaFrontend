import React from 'react';
import '../responsive.css'
import './banner.css'
function vediobtn(props) {

  return (

    <div className="icon">
      <span className="vdo"></span>
      <a
        className="venobox"
        data-autoplay="true"
        data-vbtype="video"
        target="_blank"
        href="https://www.youtube.com/watch?v=I0-vBdh4sZ8">
        <i className={props.videobtn.iconClassName} aria-hidden="true"></i>
      </a>

    </div>
  )
}

export default vediobtn;