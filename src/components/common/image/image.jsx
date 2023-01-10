import React from "react";
import styles from "./image.module.scss";
import PropTypes from "prop-types";

const Image = ({ width, height, src, alt }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ paddingTop: `${(height / width) * 100}%` }}
    >
      <img {...{ src, alt }} className={styles.img} />
    </div>
  );
};

Image.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
