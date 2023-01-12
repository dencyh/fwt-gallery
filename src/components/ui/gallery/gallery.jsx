import React, { useEffect } from "react";
import GalleryCard from "./galleryCard";
import styles from "./gallery.module.scss";
import { usePaintings } from "hooks/usePaintings";

const arr = Array(12).fill(0);

const Gallery = () => {
  const { paintings, isLoading } = usePaintings();

  // TODO remove
  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);
  return (
    <div className={styles.container}>
      {isLoading
        ? arr.map((_, index) => <GalleryCard key={index} />)
        : paintings.map((painting) => (
            <GalleryCard key={painting.id} painting={painting} />
          ))}
    </div>
  );
};
export default Gallery;
