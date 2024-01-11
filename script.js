const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '54f82485bfmsh6a9f8a9934ad744p1ff631jsna1e2f6741678',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        temp.innerHTML=response.temp
        humidity.innerHTML=response.humidity
        wind_speed.innerHTML=response.wind_speed
    })
.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Lucknow")