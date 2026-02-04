import { useState, useEffect } from 'react'

function App() {
  const [ city, setCity] = useState('');
  const [ weather, setWeather] = useState(null);
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
 
  useEffect(() => {
    const fetchDefaultWeather = async() => {
    setLoading(true);
    const time = new Date().toLocaleString('en-IN', {
      weekday: 'long', day: 'numeric', month: 'short',
      hour: '2-digit', minute: '2-digit', hour12: true
    });
    try{
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rewa&units=metric&appid=7b6440bf4f011175cb174bce599c84bd`);
       const data = await response.json();
       if(response.ok) {
        setWeather(data);
        setLastUpdated(time); // Set time for Rewa
       }
     } catch(err) {
      console.log("Initial fetch failed", err);
     }
     setLoading(false);
    };
    fetchDefaultWeather();
  }, []);

  const handleOnClick = async() => {
    const time = new Date().toLocaleString('en-IN', {
    weekday: 'long', // "Wednesday"
    day: 'numeric',  // "4"
    month: 'short',  // "Feb"
    hour: '2-digit', // "10"
    minute: '2-digit', // "30"
    hour12: true     // "AM/PM"
  });
  
    setLastUpdated(time);
    setLoading(true);
    setError(null);
     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7b6440bf4f011175cb174bce599c84bd`);
     if(!response.ok) {
      //  console.log(response.json());
       const errorData = await response.json();
        setError(errorData.message);
        // setWeather(null);
        setLoading(false);
        return;
     }
     const data = await response.json();
     if(data) {
           setWeather(data);
           setLoading(false);
            
    }
      console.log(data)
  }
 const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleOnClick();
  }
}
  return (
    <div className='container'>
      <div className={`weather-card ${weather ? weather.weather[0].main.toLowerCase() : ''}`}>
         <div className="app-header">
         <i className="fa-solid fa-cloud-sun app-logo" style={{fontSize:"50px"}}></i> 
          <h2>WEATHER APP</h2>
      </div>
       <div className='search-div'>
          <input type="text" placeholder='Enter city name...' onChange={(e) => setCity(e.target.value)} onKeyDown={handleKeyDown}/>
          <button onClick={handleOnClick} className='button'
          disabled={loading}>
            {loading ? 
            <i className="fa-solid fa-spinner fa-spin"></i> 
            :
            <i className="fa-solid fa-magnifying-glass "></i>
            }
             
          </button>
       </div>
       {weather && ( 
        <div className="weather-details-grid">
          <div className="main-info">
            <img 
           src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
            alt="weather condition" 
          /> 
          <h2 >{weather.name}</h2>
          <p className="description">{weather.weather[0].description.toUpperCase()} </p>
          </div>
           <div className="temp-display">
            <h1>{Math.round(weather.main.temp)}°C</h1>
           </div>
           <div className="stats">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} km/h</p>
            <p>Feels Like: {Math.round(weather.main.feels_like)}°C</p>
           </div>
        </div>
       )}
       {error && (
        <div className="error-popup">
          <p> {error === 'Nothing to geocode' ? 'Please Enter City Name!' : 'Please Enter Valid City Name!'}</p>
          </div>
       )}
       {lastUpdated && <p>Last updated: {lastUpdated}</p>}
      </div>
        
    </div>
  )
}

export default App
