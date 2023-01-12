import React from "react";
import styles from "./gallery.module.scss";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

const GalleryImage = ({ src, alt }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className={styles.img_wrapper} ref={ref}>
      {src && <img src={inView ? src : ""} alt={alt} className={styles.img} />}
    </div>
  );
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default GalleryImage;
