import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../../actions/fetchWeatherData';

class SearchForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            cityName: "",
            country: "",
            dateTime: "",
            accuracy: "days"
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e){
        e.preventDefault();

        const parameters = this.state;

        if(parameters.cityName.trim() === "") return;

        this.props.fetchWeatherData(parameters);
    }

    render(){
        return(
            <div className="col-10">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                name="cityName"
                                id="cityName"
                                onChange={this.onChange}
                                value={this.state.cityName}
                                className="form-control"
                                placeholder="Enter a City/Town"
                                aria-label="Enter a City/Town"
                                aria-describedby="button-search" />
                                <div className="input-group-append">
                                   <button
                                        className="btn btn-outline-primary"
                                        type="submit"
                                        id="button-search">
                                       Search
                                    </button>
                                </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

SearchForm.propTypes = {
    fetchWeatherData: PropTypes.func.isRequired
};

export default connect( null, {fetchWeatherData})(SearchForm);
