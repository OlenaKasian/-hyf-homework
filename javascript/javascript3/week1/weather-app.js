const input = document.querySelector('input')
const button = document.querySelector('.main-button')
const loadingElement = document.querySelector('.loading');

button.addEventListener('click', displayTheData)
function displayTheData() {
    loadingElement.style.visibility = 'visible';

    let city = input.value;
    if (city !== '') {
        localStorage.setItem('latestCity', city);
    }
    if (city === '') {
        city = localStorage.getItem('latestCity')
        if (city === null) {
            const emptyInput = document.querySelector('.cityCl')
            emptyInput.innerHTML = `Please enter the city`
            return
        }
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46adc28466f25032e53442f54997b0a9`)
        .then((res) => res.json())
        .then((data) => {
            const city = document.querySelector('.cityCl')
            city.innerHTML = `City: ${data.name}`
            const temperature = document.querySelector('.temperatureCl')
            temperature.innerHTML = `Temperature: ${data.main.temp}`
            const icon = document.querySelector('.iconForTheWeatherTypeCl')
            icon.innerHTML = `Icon for the weather type: ${data.weather.icon}`
            const windSpeed = document.querySelector('.windSpeedCl')
            windSpeed.innerHTML = `Wind Speed: ${data.wind.speed}`
            const clowdy = document.querySelector('.howClowdyItIsCl')
            clowdy.innerHTML = `Clowdy: ${data.clouds.all}`
            const sunRiceSet = document.querySelector('.whenSunriseAndSunsetIsCl')
            sunRiceSet.innerHTML = `When sunrise is: ${data.sys.sunrise}, When sunset is: ${data.sys.sunset}`

            // Geolocation
            function geoFindMe() {

                const status = document.querySelector('#status');
                const mapLink = document.querySelector('#map-link');

                function success(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    status.textContent = '';
                    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
                    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
                }
                function error() {
                    status.textContent = 'Unable to retrieve your location';
                }
                if (!navigator.geolocation) {
                    status.textContent = 'Geolocation is not supported by your browser';
                } else {
                    status.textContent = 'Locating…';
                    navigator.geolocation.getCurrentPosition(success, error);
                }
            }
            document.querySelector('#find-me').addEventListener('click', geoFindMe);
            
            loadingElement.style.visibility = 'hidden';
        })
}
