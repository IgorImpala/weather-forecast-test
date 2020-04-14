import React from 'react';

import {
    kelvinToCelciusAndFarenheit,
    metersPerSecToKmsPerHourAndMilesPerHour,
    degreeIntoWindDirection,
    timeStampToTheDayOfTheWeek,
    iconUrl
} from '../../utils/utils'

const HoursWeatherDisplayComponent = (props) => {
    const { data } = props;

        return (
            <div className="card my-2">
                <div className="cardBody">
                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <h6>{timeStampToTheDayOfTheWeek(data.dt,true)}</h6>
                            </div>
                            <div className="col-1">
                                <img
                                    src={iconUrl(data.weather[0].icon)}
                                    alt={data.weather[0].description}
                                />
                            </div>
                            <div className="col-3">
                                {data.weather[0].description}
                            </div>
                            <div className="col-2">
                                <div className="d-lg-none">
                                    Min
                                </div>
                                {kelvinToCelciusAndFarenheit(data.main.temp_min)}
                            </div>
                            <div className="col-2">
                                <div className="d-lg-none">
                                    Max
                                </div>
                                {kelvinToCelciusAndFarenheit(data.main.temp_max)}
                            </div>
                            <div className="col-3">
                                <div className="d-lg-none">
                                    Wind
                                </div>
                                {metersPerSecToKmsPerHourAndMilesPerHour(data.wind.speed)} {degreeIntoWindDirection(data.wind.deg)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    //}
};

// Set default props
HoursWeatherDisplayComponent.defaultProps = {
    data: {dt_txt: "2020-04-05 21:00:00"}
};

export default HoursWeatherDisplayComponent;
