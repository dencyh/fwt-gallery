import React from "react";
import { paintings } from "../../../fakeApi/paintings";
import GalleryCard from "./galleryCard";
import styles from "./gallery.module.scss";

const GalleryList = () => {
  return (
    <div className={styles.container}>
      {paintings.map((painting) => (
        <GalleryCard key={painting.id} painting={painting} />
      ))}
    </div>
  );
};
export default GalleryList;
