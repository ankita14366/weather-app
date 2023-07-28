function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '0f52f2e296730b5e7f387646aa0b638b'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key.

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const cityName = document.getElementById('cityName');
            const temperature = document.getElementById('temperature');
            const weatherDescription = document.getElementById('weatherDescription');
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('weatherInfo').style.display = 'block';
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again later.');
            console.error('Error:', error);
        });
}
