import axios from 'axios';
import { types } from './types';

//define actions
export const fetchWeatherData = (parameters) => dispatch => {
    dispatch({
        type: types.DATA_REQUEST_SENT
    });

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${parameters.cityName},${parameters.country}&appid=987c66d88c0d9ba6e87f56cf189da6ba`)
        .then((response) => {

            dispatch({
                type: types.FETCH_WEATHER_DATA_SUCCEEDED,
                payload: response.data
            });

            const findDataInArray = (data, sliceStart, sliceEnd, key, value) => {

                let resultArray = [];
                for (let i = 0, l = data.length; i < l; i++){
                    if(data[i][key].slice(sliceStart, sliceEnd) === value){
                        resultArray.push(data[i]);
                    }
                }
                return resultArray;
            };

            const accuracy = `${parameters.accuracy}`;
            const dateTime = `${parameters.dateTime}`;

            if (accuracy === 'days'){
                //we need only the time from the string
                const time = response.data.list[0].dt_txt.slice(11);
                const fiveDaysWeatherData = findDataInArray(response.data.list, 11, 19, 'dt_txt', time);
                const location = response.data.city;

                dispatch({
                    type: types.DATA_RESPONSE_RECEIVED
                });

                dispatch({
                    type: types.SET_FIVE_DAYS_WEATHER_DATA,
                    payload: fiveDaysWeatherData
                });

                dispatch({
                    type: types.SET_LOCATION,
                    payload: location
                });

                dispatch({
                    type: types.RESET_ONE_DAY_HOURS_WEATHER_DATA
                });
            }

            if (accuracy === 'hours'){
                //we need only the date from the string
                const date = dateTime.slice(0, 10);
                const oneDayHoursWeatherData = findDataInArray(response.data.list, 0, 10, 'dt_txt', date);

                dispatch({
                    type: types.DATA_RESPONSE_RECEIVED
                });

                dispatch({
                    type: types.SET_ONE_DAY_HOURS_WEATHER_DATA,
                    payload: oneDayHoursWeatherData
                })
            }
        })

        .catch(err => {

             dispatch({
                 type: types.DATA_RESPONSE_RECEIVED
             });

            if (err.response) {
                // http status 4x, 5xx
                const errorMessage = err.response.data.message;

                dispatch({
                    type: types.FETCH_WEATHER_DATA_ERROR,
                    payload: errorMessage
                });

            } else {
                // network error like timeout, connection refused etc...
                const errorMessage = 'Check your internet connection';

                dispatch({
                    type: types.FETCH_WEATHER_DATA_ERROR,
                    payload: errorMessage
                });
            }
         });
};