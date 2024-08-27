import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox"; 

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Kolkata",
        feelslike: 34.84,
        temp: 35.05,
        humidity: 87,
        weather: "haze",
    }); 

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style = {{ textAlign: "center" }}>
            <h2>Weather App </h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo} />
        </div>
    );
}