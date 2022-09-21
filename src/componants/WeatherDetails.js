import React, { useEffect, useState} from "react";
import sunny from "../images/sunny.jpg"
import WeatherData from "./WeatherData";
const WeatherDetails = (props) => {
    const data = props.data   
    return(
        <>
        <div className="weather-detail" >
            <div>
            <img src={require("../images/"+data?.type+".jpg")}/>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <span style={{fontSize:"80px"}}>
                    {data.max}
                </span>
                <h4>
                °C|
                </h4>
                <h4 className="lightFont">
                °F
                </h4>   
            </div>
            <div style={{  textAlign:"left", marginLeft:"20px"}}>
                
                    <h4>
                        Precipitation: {data?.Precipitation}
                    </h4>
                    <h4>
                        Humidity: {data?.Humidity}
                    </h4>
                    <h4>
                        Wind: {data?.Wind}
                    </h4>
               
            </div>
        </div>
        <div className="tab-navigator-pr">
                <div className="Precipitation">
                     Precipitation
                   <div className="bottom-selector"></div>
                </div>
                <div className="Humidity" >
                      Humidity
                     
                </div>
                <div className="Wind">
                      Wind
                      
                </div>
        </div>
        </>
        
    )
}

export default WeatherDetails;