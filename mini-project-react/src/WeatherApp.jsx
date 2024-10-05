    import SearchBox from "./Searchbox"
    import InfoBox from "./InfoBox"
    import { useState } from "react";
   

    export default function WeatherApp(){
        const [WeatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 31.94,
        humidity: 65,
        temp: 29.05,
        tempMax: 29.05,
        tempMin: 29.05,
        weather: "haze"
        });
        let updateInfo=(newinfo)=>{
            setWeatherInfo(newinfo);
        }
        return(
            <div style={{textAlign:"center"}}>
                <h2 style={{color:"black"}}>Weather App by Maandi</h2>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={WeatherInfo}/>
            </div>
        )
    };
