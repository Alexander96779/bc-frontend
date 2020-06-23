import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  className,
  value,
  onClick
}) => (
    <div className="row justify-content-center my-3 px-3">
        <button
        className={className}
        type="submit"
        onClick={onClick}
        >
        {value}
        </button>
    </div>
);

Button.prototypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: null,
  onClick: null,
  isLoading: null
};

export default Button;
