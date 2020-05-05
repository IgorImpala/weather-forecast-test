import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {

    console.log(props.errorMessage);

    const { errorMessage } = props;

    return (
        <div className="alert alert-warning" role="alert">
            Error: {errorMessage}
        </div>
    )
};

Error.propTypes = {
    errorMessage: PropTypes.string.isRequired
};

// Set default props
Error.defaultProps = {
    errorMessage: ''
};

export default Error;