import React from "react";
import styles from "./gallery.module.scss";
import PropTypes from "prop-types";

const GalleryImage = ({ src, alt }) => {
  return (
    <div className={styles.img_wrapper}>
      {src && <img {...{ src, alt }} className={styles.img} />}
    </div>
  );
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default GalleryImage;
