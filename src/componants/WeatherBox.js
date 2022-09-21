import React, { useDebugValue, useEffect, useState} from "react";

import './componant.css';
const WeatherBox = (props) => {
   
    const data = props.data   
    
   
    return(
        <>
            <div className="pd-10 " style={{ width:"15%"}} onClick={() => {
              props.click(data,props.mykey)
              // var element = document.querySelector(".selected");
              //  element?.classList?.remove("selected");
              // setSelectedCard('selected')
             
            }}>
               
                <div className={"weather-item "+ (props.selectedCard != '' ? 'selected':'')} >
                <h3>
                   {data.day}
                 </h3>
               <img src={require("../images/"+data.type+".jpg")}/>
                <h3 >
                  <span >
                   
                    {data.max}°
              
                    
                  </span>
                  <span className="ml-10 lightFont">
                    {data.min}°
                  </span>
                </h3>
                </div>
                   
            </div>
        </>
        
    )
}

export default WeatherBox;