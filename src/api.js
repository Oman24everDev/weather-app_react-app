export const geoApiOptions = {  // rename the options into geoApiOptions then export
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '584c938872msh5a0e1cf02a5269fp197d03jsna83433d26996',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// created this new const variable & export the URL
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"


// this API is from the openweathermap.org, the key is from the account My API keys
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "5e24674f787adfbfbfbfbf77066331be";