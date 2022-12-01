/**
 * 🌧️.
 *
 */

const errorEl = document.querySelector('#error');
const forecastEl = document.querySelector('#forecast');

const renderAlert = (msg = 'error.', type = 'warning') => {
    forecastEl.innerHTML =
        `<div class="alert alert-${type} my-4">${msg}</div>`;
};
const renderNotice = msg => renderAlert(msg, 'info')
const renderWarning = msg => renderAlert(msg, 'warning')
const renderError = msg => renderAlert(msg, 'danger')

const renderCurrentWeather = data => {

    const now = Date.now() / 1000;

    const banner = (now > data.sys.sunrise && now < data.sys.sunset)
        ? 'assets/images/day.svg'
        : 'assets/images/night.svg';

    // // Samma som ovan
    // let banner;
    // if (now > data.sys.sunrise && now < data.sys.sunset) {
    //     banner = 'assets/images/day.svg'
    // }
    // else {
    //     'assets/images/day.svg'
    // }

    const conditions = data.weather.map(condition =>
        `<li><img src="http://openweathermap.org/img/wn/${condition.icon}@2x.png" title="${condition.description}"></li>`
    );

    const lastUpdated = new Date(data.dt * 1000);

    document.querySelector('#forecast').innerHTML = `
		<div class="card">
			<img src="${banner}" class="card-img-top">
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
                <ul class="conditions" id="conditions">
                    ${conditions.join('')}
                </ul>
                <p class="text-muted small">Last uppdate: ${lastUpdated.toLocaleString()}</p>
			</div>
		</div>
	`;

    console.log(data);
};

document.querySelector('#search-form').addEventListener('submit', async e => {
    e.preventDefault();

    const city = e.target.query.value.trim();

    if (city.length < 3) {
        renderWarning('Please enter a valid city with at least 3 characters')

        return;
    }

    displayResult(city);
});

const displayResult = async (city) => {
    forecastEl.classList.add('hide');
    document.querySelector('#spinner').classList.remove('hide');

    try {
        console.log(`Searching for city "${city}"`);
        const data = await getCurrentWeather(city);
        renderCurrentWeather(data);
        forecastEl.classList.remove('hide');
    }
    catch (error) {
        console.log('error, error, error...', error)
        renderError(`${error}, Cannot render '${city}', try again please`)
        forecastEl.classList.remove('hide');
    }

    document.querySelector('#spinner').classList.add('hide');
};