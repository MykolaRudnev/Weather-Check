import React from 'react';


const Weather = props =>(  <div>
    { props.city &&
    <div className="infoWeath">
   <p> Locatioon: {props.city}, {props.country}</p>
   <p> Temperature: {props.temp}</p>
   <p> Pressure: {props.pressure}</p>
   <p> Sunset: {props.sunset}</p>
   </div>
  }
  <p className="error">{props.error}</p>
  </div>)
 
export default Weather;