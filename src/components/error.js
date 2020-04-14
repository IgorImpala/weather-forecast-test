import React from 'react';

const Error = (props) => {

    console.log(props.errorMessage);

    const { errorMessage } = props;

    return (
        <div className="alert alert-warning" role="alert">
            Error: {errorMessage}
        </div>
    )
};

// Set default props
Error.defaultProps = {
    errorMessage: ''
};

export default Error;