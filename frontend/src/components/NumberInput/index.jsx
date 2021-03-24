import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const NumberInput = ({
    className,
    onChange,
    placeholder,
    value,
}) => {
    return (
        <input
            className={className}
            placeholder={placeholder}
            type="number"
            value={value}
            onChange={onChange}
        />
    );
};

NumberInput.propTypes = {
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default NumberInput;
