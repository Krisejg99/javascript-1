/**
 * 🌧️.
 *
 */

const renderCurrentWeather = data => {
    document.querySelector('#forecast').innerHTML = `
		<div class="card">
			<img src="assets/images/forecast-banner.png" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title" id="location">
					<span id="city">${data.name}</span>,
					<span id="country">${data.sys.country}</span>
				</h5>
				<p class="temp">
					<span id="temperature">${data.main.temp}</span>
					&deg;C
				</p>
				<p class="humidity">
					<span id="humidity">${data.main.humidity}</span>
					&percnt; humidity
				</p>
				<p class="wind">
					<span id="windspeed">${data.wind.speed}</span>
					m/s
				</p>
			</div>
		</div>
	`;
}

document.querySelector('#search-form').addEventListener('submit', async e => {
    e.preventDefault();

    const city = e.target.query.value.trim();

    if (city.length < 3) {
        alert("Please enter at least 3 chars");
        return;
    }

    displayResult(city);
});

const displayResult = async (city) => {
    const errorEl = document.querySelector('#error');
    const forecastEl = document.querySelector('#forecast');
    errorEl.classList.add('hide');
    forecastEl.classList.add('hide');
    document.querySelector('#spinner').classList.remove('hide');

    try {
        console.log(`Searching for city "${city}"`);
        const data = await getCurrentWeather(city);
        forecastEl.classList.remove('hide');

        renderCurrentWeather(data);
    }
    catch (error) {
        console.log('error, error, error...', error)
        errorEl.classList.remove('hide');
        errorEl.textContent = `${error}, Cannot render '${city}', try again please`;
    }

    document.querySelector('#spinner').classList.add('hide');

};