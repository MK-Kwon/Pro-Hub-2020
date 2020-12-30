import React from "react";
import PropTypes from "prop-types";
import "./ButtonStyles.css";

export const ButtonHover3 = props => {
    const {
        className, onClick, label, isDisabled
    } = props;
    return (
        <button onClick={onClick}>
            <span className={className} disabled={isDisabled}>
                <span>{label}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </span>
        </button>
    )
};

ButtonHover3.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    isDisabled: PropTypes.bool
};

ButtonHover3.defaultProps = {
    className: "cta",
    onClick: null,
    label: "Invite your Friends",
    isDisabled: false
};

export default ButtonHover3;