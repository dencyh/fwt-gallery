import React, { useEffect, useState } from "react";
import Layout from "./layout";
import FilterList from "../components/ui/filter/filterList";
import GalleryList from "../components/ui/gallery/galleryList";
import Pagination from "components/common/pagination/pagination";
import { usePaintings } from "hooks/usePaintings";
import { API } from "fakeApi/api";

const Home = () => {
  const { paintings, paintingsTotal } = usePaintings();
  const [isLoading, setIsLoading] = useState(false);
  const fetchPaintings = async (page) => {
    setIsLoading(true);
    try {
      const data = await API.getPaintings();
      setIsLoading(false);
    } catch (e) {}
  };
  return (
    <Layout>
      <FilterList />
      <GalleryList />
      <Pagination
        itemsCount={paintingsTotal}
        pageSize={12}
        visiblePages={3}
        initialPage={1}
        onPageChange={fetchPaintings}
        isLoading={isLoading}
      />
    </Layout>
  );
};
export default Home;
