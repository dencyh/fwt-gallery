import React from "react";
import styles from "./gallery.module.scss";
import PropTypes from "prop-types";
import GalleryImage from "./galleryImage";
import { API_URL } from "services/http.service";

const GalleryCard = ({ painting }) => {
  const src = painting ? API_URL + painting.imageUrl : "";
  return (
    <div className={styles.card}>
      <GalleryImage
        src={src}
        alt={painting ? painting.name : "image loading"}
        width={300}
        height={230}
      />
      {painting && (
        <div className={styles.details}>
          <h3 className={styles.details__painting_name}>{painting.name}</h3>
          <ul className={styles.details__info}>
            <li className={styles.details__item}>
              <h4 className={styles.details__title}>Author:</h4>
              <p className={styles.details__value}>{painting.authorId}</p>
            </li>
            <li className={styles.details__item}>
              <h4 className={styles.details__title}>Created:</h4>
              <p className={styles.details__value}>{painting.created}</p>
            </li>
            <li className={styles.details__item}>
              <h4 className={styles.details__title}>Location:</h4>
              <p className={styles.details__value}>{painting.locationId}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

GalleryCard.propTypes = {
  painting: PropTypes.shape({
    authorId: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    locationId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default GalleryCard;
