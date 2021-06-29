/* eslint-disable */
import React from 'react';
import './banner.css'
import '../responsive.css'
function CountDown(props) {

    var countDownDate = new Date(props.count.date).getTime();

    var x = setInterval(function () {
  
      var now = new Date().getTime();
  
      var distance = countDownDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  var day = document.getElementById("day");
  // var day = document.getElementById("hour");
  // var day = document.getElementById("min");
  // var day = document.getElementById("sec");
      if(day){
        document
        .getElementById("day")
        .innerHTML = days;
      document
        .getElementById("hour")
        .innerHTML = hours;
      document
        .getElementById("min")
        .innerHTML = minutes;
      document
        .getElementById("sec")
        .innerHTML = seconds;
      }
      
  
      // if (distance < 0) {
      //   clearInterval(x);
      //   document
      //     .getElementById("demo")
      //     .innerHTML = "EXPIRED";
      // }
    }, 1000);

  

    

  
 
  return (
    <div className="counterdown">
      <div className="day">
        <p id="day"></p>
        <span  >Days</span>
      </div>
      <div className="hour">
        <p id="hour"></p>
        <span>Hrs</span>
      </div>
      <div className="min">
        <p id="min"></p>
        <span>Min</span>
      </div>
      <div className="sec">
        <p  id="sec"></p>
        <span  >Sec</span>
      </div>

    </div>
  )
}

export default CountDown;