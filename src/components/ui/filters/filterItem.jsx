import React from "react";
import styles from "./filters.module.scss";
import PropTypes from "prop-types";

const FilterItem = ({ children }) => {
  return <div className={styles.item}>{children}</div>;
};

FilterItem.propTypes = {
  children: PropTypes.node.isRequired
};
export default FilterItem;
