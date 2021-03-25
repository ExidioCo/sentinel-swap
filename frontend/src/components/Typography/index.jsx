import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Typography = ({
    className,
    value,
}) => {
    return (
        <div className={className}>
            {value}
        </div>
    );
};

Typography.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Typography;
