import React from 'react';
import { connect } from 'react-redux';

import {
    kelvinToCelciusAndFarenheit,
    metersPerSecToKmsPerHourAndMilesPerHour,
    degreeIntoWindDirection,
    timeStampToTheDayOfTheWeek,
    iconUrl
} from '../../utils/utils'


import { fetchWeatherData } from '../../actions/fetchWeatherData';

const WeatherDisplayComponent = (props) => {

    const { data, location, fetchWeatherData } = props;

    const parameters = {
        cityName: location.cityName,
        country: location.country,
        dateTime: data.dt_txt,
        accuracy: "hours"
    };

    return (
        <div className="col-2">
            <div className="card"  >
                <div  className="card-body" >
                    <h5 className="card-title">{timeStampToTheDayOfTheWeek(data.dt)}</h5>
                    <div>
                        min {kelvinToCelciusAndFarenheit(data.main.temp_min)}
                    </div>
                    <div>
                        max {kelvinToCelciusAndFarenheit(data.main.temp_max)}
                    </div>
                    <div>
                        <div>
                            <img
                                src={iconUrl(data.weather[0].icon)}
                                alt={data.weather[0].description}
                            />
                        </div>
                        <div>
                            {data.weather[0].description}
                        </div>
                    </div>
                    <div>
                        wind :
                    </div>
                    <div>
                        {metersPerSecToKmsPerHourAndMilesPerHour(data.wind.speed)} {degreeIntoWindDirection(data.wind.deg)}
                    </div>
                    <button className="btn btn-light" onClick={() => fetchWeatherData(parameters)}>
                        Detailed forecast
                    </button>
                </div>
            </div>
        </div>
    );
};

// Set default props
WeatherDisplayComponent.defaultProps = {
    data: {dt_txt: ""},
    location: {
        cityName: '',
        country: ''
    }
};

export default connect(null, {fetchWeatherData})(WeatherDisplayComponent);
