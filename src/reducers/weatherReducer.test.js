import { types } from '../actions/types';
import weatherReducer from './weatherReducer';

describe('weatherReducer', () => {

    it('Should return default state', () => {
        const newState = weatherReducer(undefined, {});

        const initialState = {
            fetchedWeatherData: [],
            fetchingData: false,
            errorMessage:'',
            location:{},
            fiveDaysWeatherData: [],
            oneDayHoursWeatherData: []
        };

        expect(newState).toEqual(initialState);

    });

    it('Should return 3 hours weather forecast for 5 days object if receiving type FETCH_WEATHER_DATA_SUCCEEDED', () => {
        const fetchedWeatherData = {
            city: {
                id: 2643743,
                name: "London",
                coord: {
                    lat: 51.5085,
                    lon: -0.1257},
                country: "GB",
                population: 1000000,
                sunrise: 1588134918,
                sunset: 1588188005,
                timezone: 3600},
            cnt: 40,
            cod: "200",
            list: [{},{}],
            message: 0
        };
        const newState = weatherReducer(undefined, {
            type: types.FETCH_WEATHER_DATA_SUCCEEDED,
            payload: fetchedWeatherData
        });

        expect(newState.fetchedWeatherData).toEqual(fetchedWeatherData);
    });

    it('Should return Error message if receiving type FETCH_WEATHER_DATA_ERROR', () => {
       const errorMessage = "No city found";
       const newState = weatherReducer(undefined, {
           type: types.FETCH_WEATHER_DATA_ERROR,
           payload: errorMessage
       });
       expect(newState.errorMessage).toEqual(errorMessage);

   });

    it('Should return Array of 5 objects if receiving type SET_FIVE_DAYS_WEATHER_DATA', () => {
        const fiveDaysWeatherData = [{}, {}, {}, {}, {}];
        const newState = weatherReducer(undefined, {
            type: types.SET_FIVE_DAYS_WEATHER_DATA,
            payload: fiveDaysWeatherData
        });
        expect(newState.fiveDaysWeatherData.length).toEqual(fiveDaysWeatherData.length);

    });

    it('Should return 3 hours weather forecast for 1 day array if receiving type SET_ONE_DAY_HOURS_WEATHER_DATA', () => {
        const oneDayHoursWeatherData = [
            {
                dt: 1588161600,
                main: {
                    temp: 285.47,
                    feels_like: 280.32,
                    temp_min: 285.47,
                    temp_max: 286.58,
                    pressure: 1002,
                    sea_level: 1001,
                    grnd_level: 998,
                    humidity: 68,
                    temp_kf: -1.11
                },
                weather: [
                    {
                        id: 500,
                        main: 'Rain',
                        description: 'light rain',
                        icon: '10d'
                    }
                ],
                clouds: {
                    all: 79
                },
                wind: {
                    speed: 6.23,
                    deg: 184
                },
                rain: {
                    '3h': 0.25
                },
                sys: {
                    pod: 'd'
                },
                dt_txt: '2020-04-29 12:00:00'
            },
            {
                dt: 1588172400,
                main: {
                    temp: 286.18,
                    feels_like: 282.08,
                    temp_min: 286.18,
                    temp_max: 286.67,
                    pressure: 1001,
                    sea_level: 1000,
                    grnd_level: 997,
                    humidity: 71,
                    temp_kf: -0.49
                },
                weather: [
                    {
                        id: 500,
                        main: 'Rain',
                        description: 'light rain',
                        icon: '10d'
                    }
                ],
                clouds: {
                    all: 95
                },
                wind: {
                    speed: 5.16,
                    deg: 224
                },
                rain: {
                    '3h': 1.02
                },
                sys: {
                    pod: 'd'
                },
                dt_txt: '2020-04-29 15:00:00'
            }
        ];
        const newState = weatherReducer(undefined, {
            type: types.SET_ONE_DAY_HOURS_WEATHER_DATA,
            payload: oneDayHoursWeatherData
        });

        expect(newState.oneDayHoursWeatherData).toEqual(oneDayHoursWeatherData);
    });

    it('Should return empty array if receiving type RESET_ONE_DAY_HOURS_WEATHER_DATA', () => {
        const oneDayHoursWeatherData = [];
        const newState = weatherReducer(undefined, {
            type: types.RESET_ONE_DAY_HOURS_WEATHER_DATA,
            payload: oneDayHoursWeatherData
        });

        expect(newState.oneDayHoursWeatherData).toEqual(oneDayHoursWeatherData);
    });

    it('Should return a location object if receiving type SET_LOCATION', () => {
        const location =
        {
            id: 2643743,
                name: 'London',
            coord: {
            lat: 51.5085,
                lon: -0.1257
        },
            country: 'GB',
                population: 1000000,
            timezone: 3600,
            sunrise: 1588134918,
            sunset: 1588188005
        };

        const newState = weatherReducer(undefined, {
            type: types.SET_LOCATION,
            payload: location
        });

        expect(newState.location).toEqual(location);
    });

    it('Should return fetchingData == true if receiving type DATA_REQUEST_SENT', () => {
        const fetchingData = true;

        const newState = weatherReducer(undefined, {
            type: types.DATA_REQUEST_SENT,
            payload: fetchingData
        });

        expect(newState.fetchingData).toEqual(fetchingData);
    });

    it('Should return fetchingData == false if receiving type DATA_RESPONSE_RECEIVED', () => {
        const fetchingData = false;

        const newState = weatherReducer(undefined, {
            type: types.DATA_RESPONSE_RECEIVED,
            payload: fetchingData
        });

        expect(newState.fetchingData).toEqual(fetchingData);
    });

});


