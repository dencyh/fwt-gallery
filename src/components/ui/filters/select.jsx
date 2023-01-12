import React from "react";
import styles from "./filters.module.scss";
import PropTypes from "prop-types";

const Select = ({ name, options, onChange }) => {
  return (
    <ul className={styles.options}>
      {options.map((option) => (
        <li
          key={option.value}
          className={styles.options__item}
          tabIndex={0}
          data-value={option.value}
          onClick={() =>
            onChange({
              name,
              value: { value: option.value, label: option.label }
            })
          }
        >
          <div className={styles.options__text}>{option.label}</div>
        </li>
      ))}
    </ul>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired
};

export default Select;
