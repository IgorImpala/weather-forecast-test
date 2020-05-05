import React from 'react';
import PropTypes from 'prop-types';

const ThreeHoursForecastHeader = (props) => {

    const {haveData} = props;

    if (haveData > 0)
        return(
            <div className="card my-2 d-none d-lg-block">
                <div className="cardBody">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1">
                                Time
                            </div>
                            <div className="col-lg-1">
                            </div>
                            <div className="col-lg-3">
                                Description
                            </div>
                            <div className="col-lg-2">
                                Min temp
                            </div>
                            <div className="col-lg-2">
                                Max temp
                            </div>
                            <div className="col-lg-3">
                                Wind speed, direction
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    else
        return null;
};

ThreeHoursForecastHeader.propTypes = {
    haveData: PropTypes.number
};

// Set default props
ThreeHoursForecastHeader.defaultProps = {
    haveData: 0
};

export default ThreeHoursForecastHeader;