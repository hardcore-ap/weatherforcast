document.getElementById('getWeather').addEventListener('click', async () => {
    const location = document.getElementById('location').value.trim();
    const apiKey = '8544499da25198e69989330d4daad744'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
    const weatherDisplay = document.getElementById('weatherData');
    weatherDisplay.style.display = 'none'; // Hide before loading
  
    if (location === '') {
      weatherDisplay.innerHTML = '<p>Please enter a valid city name.</p>';
      weatherDisplay.style.display = 'block';
      return;
    }
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Location not found');
      const data = await response.json();
  
      const weather = `
        <h2><i class="fas fa-location-dot"></i> ${data.name}</h2>
        <p><i class="fas fa-temperature-high"></i> Temperature: ${data.main.temp}°C</p>
        <p><i class="fas fa-water"></i> Humidity: ${data.main.humidity}%</p>
        <p><i class="fas fa-cloud"></i> Description: ${data.weather[0].description}</p>
        <p><i class="fas fa-wind"></i> Wind Speed: ${data.wind.speed} m/s</p>
      `;
      weatherDisplay.innerHTML = weather;
      weatherDisplay.style.display = 'block';
    } catch (error) {
      weatherDisplay.innerHTML = `<p>Error: ${error.message}</p>`;
      weatherDisplay.style.display = 'block';
    }
  });
  