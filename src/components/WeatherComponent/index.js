import React from 'react';
import { connect } from 'react-redux'
import SearchForm from './searchForm';
import { ReactComponent as Logo } from "../../assets/graphics/logo.svg"
import WeatherDisplayComponent from './WeatherDisplayComponent';
import HoursWeatherComponent from '../HoursWeatherComponent';
import Spinner from '../spinner';
import Error from '../error';


const WeatherComponent = (props) => {
    const {fiveDaysWeatherData, oneDayHoursWeatherData, location, fetchingData, errorMessage } = props;

    const haveData = fiveDaysWeatherData.length;

    const fiveDays = fiveDaysWeatherData.map(oneDayForecast => (
        <WeatherDisplayComponent key={oneDayForecast.dt} data={oneDayForecast} location={location} />
    ));

    return (
        <div className="container-fluid pt-3">
            <div className="row justify-content-center">
                <div className="col-2 pt-1">
                    <Logo />
                </div>
                <SearchForm />
            </div>
            <div className="row justify-content-center">
                <div className="col-10">
                    {haveData > 0 && <h2>Five days weather forecast</h2>}
                </div>
            </div>
            <div className="row justify-content-center">
                {fiveDays}
            </div>
            {fetchingData && <Spinner/>}
            {errorMessage && <Error errorMessage={errorMessage} />}
            <HoursWeatherComponent data={oneDayHoursWeatherData} />
        </div>
    )
};

// Set default props
WeatherComponent.defaultProps = {
    fiveDaysWeatherData: [],
    oneDayHoursWeatherData: [],
    fetchingData: false,
    errorMessage: '',
    location: {
        cityName: '',
        country: ''
    }
};

function mapStateToProps(state) {
    return {
        fiveDaysWeatherData: state.weather.fiveDaysWeatherData,
        oneDayHoursWeatherData: state.weather.oneDayHoursWeatherData,
        fetchingData: state.weather.fetchingData,
        errorMessage: state.weather.errorMessage,
        location: {
            cityName: state.weather.location.name,
            country: state.weather.location.country
        }
    }
}

export default connect(mapStateToProps, null)(WeatherComponent);
