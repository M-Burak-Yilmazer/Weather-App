export const  show = (data)=>{
    console.log(data);
    document.querySelector(
      ".content"
    ).innerHTML = `<div class="city"><i class="fa-solid fa-city"></i> ${
      data.name
    } , ${data.sys.country}</div>
      <div class="temp">${Math.round(data.main.temp)} °C </div>
        <div style="color:orange" class="desc">${data.weather[0].description.toUpperCase()}<img src="https://openweathermap.org/img/wn/${
      data.weather[0]
    .icon}@2x.png"/></div>

        <div class="minmax">Min: ${Math.round(
          data.main.temp_min
        )} °C / Max :${Math.round(data.main.temp_max)}°C</div>
        <div class="wind"><i class="fa-solid fa-wind"></i>${
          data.wind.speed
        } km</div>
      </div>
      
      
      
      
      
      
      
      
      `; 
    // document.getElementById("temp").innerHTML = data.main.temp;
    // document.getElementById("weather").innerHTML = data.weather[0].main;
    // document.getElementById("wind").innerHTML = data.wind.speed;
    // document.getElementById("humidity").innerHTML = data.main.humidity;
    // document.getElementById("pressure").innerHTML = data.main.pressure;
    // document.getElementById("description").innerHTML = data.weather[0].description;
    // document.getElementById("icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">`;
}