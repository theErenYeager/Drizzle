import "./current-weather.css"


const CurrentWeather = ({data}) => {
    return (
        //<img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
        <div>
        <div className="container">
            <div className="top">

                <div className="city-cont" >
                    <p className="city">{data.city}</p>
                    <p className="weather-des">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            
            <div className="weather">
                
                
           
                <div className="bottom">
                    <p className="temperature">{Math.round(data.main.temp)}°C</p>
                    <div className="details">
                        <div className="parameter-row">
                            <div className="parameter-label">
                                Details
                            </div>
                        </div>
                        <div className="parameter-row">
                            <div className="parameter-label">
                                Feels like
                            </div>
                            <div className="parameter-value">{Math.round(data.main.feels_like)}°C</div>
                        </div>
                        <div className="parameter-row">
                            <div className="parameter-label">
                                Wind
                            </div>
                            <div className="parameter-value">{data.wind.speed} m/s</div>
                        </div>
                        <div className="parameter-row">
                            <div className="parameter-label">
                                Humidity
                            </div>
                            <div className="parameter-value">{data.main.humidity}%</div>
                        </div>
                        <div className="parameter-row">
                            <div className="parameter-label">
                            Pressure
                            </div>
                            <div className="parameter-value">{data.main.pressure}hPa</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="footer">
            Designed and Developed by .
            <a href="https://github.com/theErenYeager"> Sid.</a>
        </div>
        </div>
    );
}


export default CurrentWeather;