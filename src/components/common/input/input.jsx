import React from "react";
import styles from "./input.module.scss";
import PropTypes from "prop-types";

const Input = ({ name, value, onChange, className, ...rest }) => {
  return (
    <label>
      <input
        className={className ? className : styles.input}
        onChange={(e) => onChange({ name, value: e.target.value })}
        value={value}
        {...rest}
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Input;
