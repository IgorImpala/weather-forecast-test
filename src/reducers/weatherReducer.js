import {
    FETCH_WEATHER_DATA_SUCCEEDED,
    FETCH_WEATHER_DATA_ERROR,
    SET_FIVE_DAYS_WEATHER_DATA,
    SET_ONE_DAY_HOURS_WEATHER_DATA,
    RESET_ONE_DAY_HOURS_WEATHER_DATA,
    SET_LOCATION,
    DATA_REQUEST_SENT,
    DATA_RESPONSE_RECEIVED
} from '../actions/types';

const initialState = {
    fetchedWeatherData: [],
    fetchingData: false,
    errorMessage:'',
    location:{},
    fiveDaysWeatherData: [],
    oneDayHoursWeatherData: []
};

export default function weatherReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_WEATHER_DATA_SUCCEEDED:
            return {
                ...state,
                errorMessage: initialState.errorMessage,
                fetchedWeatherData: payload
            };
        case FETCH_WEATHER_DATA_ERROR:
            return {
                ...state,
                fiveDaysWeatherData: initialState.fiveDaysWeatherData,
                errorMessage: payload
            };
        case SET_FIVE_DAYS_WEATHER_DATA:
            return {
                ...state,
                fiveDaysWeatherData: payload
            };
        case SET_ONE_DAY_HOURS_WEATHER_DATA:
            return {
                ...state,
                oneDayHoursWeatherData: payload
            };
        case RESET_ONE_DAY_HOURS_WEATHER_DATA:
            return {
                ...state,
                oneDayHoursWeatherData: initialState.oneDayHoursWeatherData
            };
        case SET_LOCATION:
            return {
                ...state,
                location: payload
            };
        case DATA_REQUEST_SENT:
            return {
                ...state,
                fetchingData: true
            };
        case DATA_RESPONSE_RECEIVED:
            return {
                ...state,
                fetchingData: initialState.fetchingData
            };

        default:
            return state
    }
}
