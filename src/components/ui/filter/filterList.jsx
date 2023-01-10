import React from "react";
import FilterItem from "./filterItem";
import styles from "./filters.module.scss";

const arr = Array(4).fill(0);

const FilterList = () => {
  return (
    <div className={styles.container}>
      {arr.map((_, index) => (
        <FilterItem key={index} />
      ))}
    </div>
  );
};
export default FilterList;
