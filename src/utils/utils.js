export const kelvinToCelciusAndFarenheit = (kelvin) => {
    const celcius = parseInt(kelvin, 10) - 273.15;
    const farenheit = celcius*9/5 + 32;

    let celciusSign = '';
    if (celcius > 0) {celciusSign = "+"}

    const roundedCelcius = celcius.toFixed();
    const roundedFarenheit = farenheit.toFixed();

    const result = `${celciusSign}${roundedCelcius}°C / ${roundedFarenheit}°F`;

    return result;
};


export const metersPerSecToKmsPerHourAndMilesPerHour = (metersPerSecond) =>{
    const kmsPerHour = parseInt(metersPerSecond, 10) * 3.6;
    const milesPerHour = parseInt(metersPerSecond, 10) *2.237;


    const roundedKmsPerHour = kmsPerHour.toFixed();
    const roundedMilesPerHour = milesPerHour.toFixed();

    const result = `${roundedKmsPerHour}kmh / ${roundedMilesPerHour}mph`;

    return result;
};

export const degreeIntoWindDirection = (degree) => {

    const windDegree = parseInt(degree, 10);
    switch (true) {
        case ((windDegree > 348.75 && windDegree <= 360) || (windDegree >= 0 && windDegree <= 11.25) ):
            return("N");
        case ((windDegree > 11.25 && windDegree <= 33.75) ):
            return("NNE");
        case ((windDegree > 33.75 && windDegree <= 56.25) ):
            return("NE");
        case ((windDegree > 56.25 && windDegree <= 78.75) ):
            return("ENE");
        case ((windDegree > 78.75 && windDegree <= 101.25) ):
            return("E");
        case ((windDegree > 101.25 && windDegree <= 123.75) ):
            return("ESE");
        case ((windDegree > 123.75 && windDegree <= 146.25) ):
            return("SE");
        case ((windDegree > 146.25 && windDegree <= 168.75) ):
            return("SSE");
        case ((windDegree > 168.75 && windDegree <= 191.25) ):
            return("S");
        case ((windDegree > 191.25 && windDegree <= 213.75) ):
            return("SSW");
        case ((windDegree > 213.75 && windDegree <= 236.25) ):
            return("SW");
        case ((windDegree > 236.25 && windDegree <= 258.75) ):
            return("WSW");
        case ((windDegree > 258.75 && windDegree <= 281.25) ):
            return("W");
        case ((windDegree > 281.25 && windDegree <= 303.75) ):
            return("WNW");
        case ((windDegree > 303.75 && windDegree <= 326.25) ):
            return("NW");
        case ((windDegree > 326.25 && windDegree <= 348.75) ):
            return("NNW");
        default:
            return("");
    }
};

export const timeStampToTheDayOfTheWeek = (timeStamp, showHours) => {
    const d = new Date(timeStamp * 1000 - 28800000);
    //There is a bug in API business logic. Looks like their server is running in the US.
    //And their UNIX time stamp doesn't match the time.
    //offset is 8 hours = 60*60*8*1000 = 28800000 miliseconds

    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const dayOfTheWeek = weekday[d.getDay()];

    if(showHours){
        const hours = d.getHours();

        // Minutes part from the timestamp
        const minutes = "0" + d.getMinutes();

        // Will display time in 15:00 format
        const time = hours + ':' + minutes.substr(-2);

        return `${time}`
    }

    return dayOfTheWeek;
};

export const getDate = (data) => {
    const date = data.slice(0, 10);
    return date;
};

export const iconUrl = (iconId) => {
    return `http://openweathermap.org/img/w/${iconId}.png`
};