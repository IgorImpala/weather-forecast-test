import { types } from '../actions/types';

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
        case types.FETCH_WEATHER_DATA_SUCCEEDED:
            return {
                ...state,
                errorMessage: initialState.errorMessage,
                fetchedWeatherData: payload
            };
        case types.FETCH_WEATHER_DATA_ERROR:
            return {
                ...state,
                fiveDaysWeatherData: initialState.fiveDaysWeatherData,
                errorMessage: payload
            };
        case types.SET_FIVE_DAYS_WEATHER_DATA:
            return {
                ...state,
                fiveDaysWeatherData: payload
            };
        case types.SET_ONE_DAY_HOURS_WEATHER_DATA:
            return {
                ...state,
                oneDayHoursWeatherData: payload
            };
        case types.RESET_ONE_DAY_HOURS_WEATHER_DATA:
            return {
                ...state,
                oneDayHoursWeatherData: initialState.oneDayHoursWeatherData
            };
        case types.SET_LOCATION:
            return {
                ...state,
                location: payload
            };
        case types.DATA_REQUEST_SENT:
            return {
                ...state,
                fetchingData: true
            };
        case types.DATA_RESPONSE_RECEIVED:
            return {
                ...state,
                fetchingData: initialState.fetchingData
            };

        default:
            return state
    }
}
