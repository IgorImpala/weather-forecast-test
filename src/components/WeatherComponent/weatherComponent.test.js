import React from 'react';
import { shallow } from 'enzyme';
import WeatherComponent from './index';
import { findByTestAtrr, testStore } from '../../utils/testUtils';

const setUp  = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<WeatherComponent store={store}/>).childAt(0).dive();
    return wrapper;
};

describe('WeatherComponent', () => {

    describe('Component renders', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {
                weather: {
                    fetchedWeatherData: [],
                    fetchingData: false,
                    errorMessage: '',
                    location: {
                        id: 2643123,
                        name: 'Manchester',
                        coord: {
                            lat: 53.4809,
                            lon: -2.2374
                        },
                        country: 'GB',
                        population: 395515,
                        timezone: 3600,
                        sunrise: 1586841024,
                        sunset: 1586891245
                    },
                    fiveDaysWeatherData: [
                        {
                            dt: 1586876400,
                            main: {
                                temp: 287.01,
                                feels_like: 283.24,
                                temp_min: 287.01,
                                temp_max: 287.03,
                                pressure: 1027,
                                sea_level: 1027,
                                grnd_level: 1020,
                                humidity: 34,
                                temp_kf: -0.02
                            },
                            weather: [
                                {
                                    id: 801,
                                    main: 'Clouds',
                                    description: 'few clouds',
                                    icon: '02d'
                                }
                            ],
                            clouds: {
                                all: 13
                            },
                            wind: {
                                speed: 2.21,
                                deg: 270
                            },
                            sys: {
                                pod: 'd'
                            },
                            dt_txt: '2020-04-14 15:00:00'
                        },
                        {
                            dt: 1586887200,
                            main: {
                                temp: 284.26,
                                feels_like: 280.28,
                                temp_min: 284.26,
                                temp_max: 284.28,
                                pressure: 1027,
                                sea_level: 1027,
                                grnd_level: 1020,
                                humidity: 46,
                                temp_kf: -0.02
                            },
                            weather: [
                                {
                                    id: 801,
                                    main: 'Clouds',
                                    description: 'few clouds',
                                    icon: '02d'
                                }
                            ],
                            clouds: {
                                all: 15
                            },
                            wind: {
                                speed: 2.84,
                                deg: 306
                            },
                            sys: {
                                pod: 'd'
                            },
                            dt_txt: '2020-04-14 18:00:00'
                        }
                    ],
                    oneDayHoursWeatherData: [],
                }
            };
            wrapper = setUp(initialState);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'weatherComponent');
            expect(component.length).toBe(1);

        });
    })

});