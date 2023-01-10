import React from "react";
import Input from "../../common/inputs/input";
import styles from "./filters.module.scss";

const FilterItem = () => {
  return (
    <div className={styles.item}>
      <Input />
    </div>
  );
};
export default FilterItem;
