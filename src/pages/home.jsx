import React from "react";
import Layout from "./layout";
import FilterList from "../components/ui/filters/filterList";
import Gallery from "../components/ui/gallery/gallery";
import Pagination from "components/common/pagination/pagination";
import { usePaintings } from "hooks/usePaintings";

const Home = () => {
  const { paintingsTotal, isLoading } = usePaintings();

  return (
    <Layout>
      <FilterList />
      <Gallery />
      <Pagination
        itemsCount={paintingsTotal}
        pageSize={12}
        visiblePages={3}
        initialPage={1}
        // onPageChange={fetchPaintings}
        onPageChange={() => console.log("page change")}
        isLoading={isLoading}
      />
    </Layout>
  );
};
export default Home;
