import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./select.module.scss";
import { ReactComponent as ArrowUp } from "assets/icons/arrow-up-solid.svg";
import clsx from "clsx";

const Select = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Authajsd klfj;asjdf; ljdsakasjld;fjkas; ldjkk;lasjdk;lor",
  options
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.select} onClick={toggleSelect}>
      <div className={clsx(styles.header, isOpen && styles.header_active)}>
        <div className={styles.header__item}>
          <span>{placeholder}</span>
        </div>
        <button aria-label="Toggle select" className={styles.btn}>
          <ArrowUp className={clsx(!isOpen && styles.rotate_icon)} />
        </button>
      </div>
      <div
        className={clsx(
          styles.options__container,
          isOpen && styles.options_active
        )}
      >
        <ul className={styles.options}>
          <li className={styles.options__item} tabIndex={0}>
            12l3jk1l3k;j
          </li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
          <li className={styles.options__item}>12l3jk1l3k;j</li>
        </ul>
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Select;
