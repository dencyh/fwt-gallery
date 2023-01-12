import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./dropdown.module.scss";
import { ReactComponent as ArrowUp } from "assets/icons/arrow-up-solid.svg";
import { ReactComponent as XCross } from "assets/icons/xcross.svg";
import clsx from "clsx";

const Dropdown = ({
  value,
  placeholder = "Author",
  children,
  onClear,
  persistOnSelect = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef(null);
  const headerRef = useRef(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeHandler = (e) => {
      if (!persistOnSelect && !headerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      if (persistOnSelect && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeHandler);

    return () => {
      document.removeEventListener("click", closeHandler);
    };
  }, []);

  return (
    <div className={styles.select} ref={selectRef}>
      <div
        className={clsx(styles.header, isOpen && styles.header_active)}
        onClick={toggleSelect}
        ref={headerRef}
      >
        <div className={styles.header__item}>
          {value ? (
            value
          ) : (
            <span className={styles.header__placeholder}>{placeholder}</span>
          )}
        </div>
        <div className={styles.select__controls}>
          {value && onClear && (
            <button
              aria-label="Clear select"
              className={clsx(styles.btn, styles.clear__btn)}
              onClick={onClear}
            >
              <XCross />
            </button>
          )}
          <button aria-label="Toggle select" className={styles.btn}>
            <ArrowUp className={clsx(!isOpen && styles.rotate_icon)} />
          </button>
        </div>
      </div>
      <div
        className={clsx(
          styles.options__container,
          isOpen && styles.options_active
        )}
      >
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  placeholder: PropTypes.string,
  onClear: PropTypes.func,
  persistOnSelect: PropTypes.bool
};

export default Dropdown;
