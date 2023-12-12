const apiKey = "9436a42fb50d2e256ed501c7edaf06cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function   checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`); 
    var data = await response.json();
    
    console.log(data);

    document.quarySelector(".city").innerHTML = data.name;
    document.quarySelector(".temp").innerHTML = data.main.temp;
    document.quarySelector(".humidity").innerHTML = data.main.humidity;
    document.quarySelector(".wind").innerHTML = data.wind.speed;




}

checkWeather();