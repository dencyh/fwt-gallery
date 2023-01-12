import React, { useMemo } from "react";
import GalleryCard from "./galleryCard";
import styles from "./gallery.module.scss";
import { usePaintings } from "hooks/usePaintings";
import { useFilters } from "hooks/useFilters";

const Gallery = () => {
  const { paintings, isLoading } = usePaintings();
  const { filters } = useFilters();

  const arr = useMemo(() => Array(filters._limit).fill(0), [filters._limit]);

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
