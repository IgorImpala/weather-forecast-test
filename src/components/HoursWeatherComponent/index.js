import React from 'react';
import PropTypes from 'prop-types';
import HoursWeatherDisplayComponent from './HoursWeatherDisplayComponent';
import ThreeHoursForecastHeader from './threeHoursForecastHeader';
import { timeStampToTheDayOfTheWeek, getDate } from '../../utils/utils';

const HoursWeatherComponent = (props) => {

    const { data } = props;

    const haveData = data.length;

    const oneDayThreeHoursForecast = data.map( threeHoursForecast=> (
         <HoursWeatherDisplayComponent key={threeHoursForecast.dt} data={threeHoursForecast} />
    ));

    return (
        <div className="row justify-content-center">
            <div className="col-10">
                {haveData > 0 && <h3>Detailed forecast for {timeStampToTheDayOfTheWeek(data[0].dt)} ({getDate(data[0].dt_txt)})</h3>}
                <ThreeHoursForecastHeader haveData={haveData}/>
                {oneDayThreeHoursForecast}
            </div>
        </div>
    )
};

HoursWeatherComponent.propTypes = {
    data: PropTypes.array
};

// Set default props
HoursWeatherComponent.defaultProps = {
    data: []
};

export default HoursWeatherComponent;