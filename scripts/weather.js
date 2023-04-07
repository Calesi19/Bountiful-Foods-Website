
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
      let chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16)));
      return chill + "°F.";
    } else {
      return "N/A";
    }
  }


const apiURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Carlsbad%20California?unitGroup=us&key=UYSFHQEU8URG8UDVFGUJKSWN3&contentType=json';

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);



    displayWeather(data.currentConditions)

  };

function displayWeather(conditions) {
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${conditions.icon}.svg`;
    document.querySelector("#temperature").textContent = conditions.temp + '°F';
    document.querySelector("#current-weather-condition").textContent = conditions.conditions;
    document.querySelector('#weather-icon').src = image;
    document.querySelector('#weather-icon').alt= conditions.conditions + ' icon';
    document.querySelector('#wind-speed').textContent = conditions.windspeed;
    document.querySelector('#wind-chill').textContent = calculateWindChill(conditions.temp, conditions.windSpeed);
}

getWeather();


// Fetch data from API
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Carlsbad%20California?unitGroup=us&key=UYSFHQEU8URG8UDVFGUJKSWN3&contentType=json")
.then(response => response.json())
.then(data => {
  // Extract relevant weather data
  const forecast = data.days.slice(0, 3).map(day => ({
    date: day.datetimeStr,
    temp: day.temp,
    conditions: day.conditions,
    icon: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${day.icon}.svg`
  }));

  let day = data.days[0];
  let date = new Date();

  const forecast1 = {
    date: (date.getDate() + 1) % 7 ,
    temp: day.temp,
    conditions: day.conditions,
    icon: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${day.icon}.svg`
  };



  day = data.days[1];
  
  const forecast2 = {
    date: (date.getDate()) % 7,
    temp: day.temp,
    conditions: day.conditions,
    icon: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${day.icon}.svg`
  };



  day = data.days[2];
  
  const forecast3 = {
    date: (date.getDate() + 1) % 7,
    temp: day.temp,
    conditions: day.conditions,
    icon: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${day.icon}.svg`
  };




const today = new Date()
// to return the date number(1-31) for the specified date
console.log("today => ",today)
let tomorrow =  new Date()
tomorrow.setDate(today.getDate() + 1)

let afterTomorrow =  new Date()
tomorrow.setDate(today.getDate() + 2)

let afterAfterTomorrow =  new Date()
tomorrow.setDate(today.getDate() + 3)

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  // Create HTML markup for forecast
  const forecastMarkup = `
    <div>
      <h2>Tomorrow</h2>
      <img src="${forecast1.icon}" alt="Weather icon">
      <p>${forecast1.temp}&deg;F</p>
      <p>${forecast1.conditions}</p>
      
    </div>
    <div>
    <h2>${weekday[forecast2.date]}</h2>
    <img src="${forecast2.icon}" alt="Weather icon">
    <p>${forecast2.temp}&deg;F</p>
    <p>${forecast2.conditions}</p>
    
  </div>
  <div>
  <h2>${weekday[forecast3.date]}</h2>
  <img src="${forecast3.icon}" alt="Weather icon">
  <p>${forecast3.temp}&deg;F</p>
  <p>${forecast3.conditions}</p>
  
</div>
  `;

  // Display forecast on page
  document.getElementById("forecast").innerHTML = forecastMarkup;
})
.catch(error => console.log(error));



