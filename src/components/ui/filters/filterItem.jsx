import Select from "components/common/inputs/select/select";
import React from "react";
import Input from "../../common/inputs/input/input";
import styles from "./filters.module.scss";

const data = [
  { label: "123", value: "123" },
  { label: "abc", value: "abc" }
];

const FilterItem = () => {
  return (
    <div className={styles.item}>
      <Select options={data} />
    </div>
  );
};
export default FilterItem;
