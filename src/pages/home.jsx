import React from "react";
import Layout from "./layout";
import FilterList from "../components/ui/filter/filterList";
import GalleryList from "../components/ui/gallery/galleryList";
import Pagination from "components/common/pagination/pagination";

const Home = () => {
  return (
    <Layout>
      <FilterList />
      <GalleryList />
      <Pagination
        itemsCount={12}
        pageSize={2}
        currentPage={1}
        onPageChange={() => console.log("change")}
        onPageNavigation={() => console.log("navigation")}
      />
    </Layout>
  );
};
export default Home;
