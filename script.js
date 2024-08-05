var button = document.getElementById('weather');
var weatherDiv = document.getElementById('weatherData');

// Add event listener to the button
button.addEventListener('click', function() {
    // Use fetch to get the weather data
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
        // Update the div with the weather data
        weatherDiv.innerHTML = 'Current weather in London: ' + data.weather[0].main;
    })
    .catch(error => console.error('Error:', error));
});