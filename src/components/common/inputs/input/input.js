import React from "react";
import styles from "./input.module.scss";

const Input = ({ ...rest }) => {
  return (
    <label>
      <input
        placeholder="Name"
        className={styles.input}
        // type={showPassword ? "text" : isPassword ? "password" : type}
        // name={name}
        // id={name}
        // onChange={}
        // value={value}
        {...rest}
      />
    </label>
  );
};

export default Input;
