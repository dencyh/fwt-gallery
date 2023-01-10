import React from "react";
import styles from "./gallery.module.scss";
import PropTypes from "prop-types";

const GalleryImage = ({ src, alt }) => {
  return (
    <div className={styles.img_wrapper}>
      <img {...{ src, alt }} className={styles.img} />
    </div>
  );
};

GalleryImage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default GalleryImage;
