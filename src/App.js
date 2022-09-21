import React, { useEffect, useState} from "react";
import './App.css';
import WeatherDetails from './componants/WeatherDetails';
import WeatherBox from './componants/WeatherBox';
import WeatherData from './componants/WeatherData';
import LineChart from './componants/LineChart'

function App() {
  
  const [weatherDetails, setWeatherDetails] = useState(WeatherData[0]);
  const [selectedCardKey, setSelectedCardKey] = useState(0);
  

  const clickHandler = (data,key) => {
    setSelectedCardKey(key)
    setWeatherDetails(data)
  }
  return (
    <div className="App">
      <div className='weatherBox'>
      <WeatherDetails data={weatherDetails}/>
      
      <LineChart data={weatherDetails} />
      
     
      <div style={{display:"flex"}}>
      {
        WeatherData.map((item, index) => {
          return(
           
               <WeatherBox selectedCard={selectedCardKey == index ? 'selected':''} key={index} mykey={index} data={item} click={(data,key) => {clickHandler(data,key)}} />
           
           
          )
        })
      }
     
      
 
      </div>
      
      
      </div>
       
    </div>
  );
}

export default App;
