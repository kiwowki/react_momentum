async function loadConfigAndGetWeather() {
    try {
        const response = await fetch('../config.json');
        if (!response.ok) {
            throw new Error('config 에러');
        }
        const config = await response.json();
        console.log(config);

        const API_KEY = config.API_KEY;

        navigator.geolocation.getCurrentPosition(
            position => onGeoOK(position, API_KEY),
            onGeoError
        );
    } catch (error) {
        console.error('날씨 정보를 찾을 수 없음. ', error);
    }
}

async function onGeoOK(position, API_KEY) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
    console.log(url)

    try {
        const response = await fetch(url)
        const data = await response.json()
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `/ ${data.weather[0].main} / ${data.main.temp}도`
        console.log(city, weather)
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('날씨 정보를 가져오지 못했습니다.');
    }
}
function onGeoError() {
    alert("위치를 찾을 수 없음. 날씨 안 알랴주겠슴.")
}

loadConfigAndGetWeather();
