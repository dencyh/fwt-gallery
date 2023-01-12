import React, { useEffect } from "react";
import Layout from "./layout";
import FilterList from "../components/ui/filters/filterList";
import Gallery from "../components/ui/gallery/gallery";
import Pagination from "components/common/pagination/pagination";
import { usePaintings } from "hooks/usePaintings";
import { useFilters } from "hooks/useFilters";

const Home = () => {
  const { paintingsTotal, isLoading } = usePaintings();
  const { filters, updateFilters } = useFilters();

  return (
    <Layout>
      <FilterList />
      <Gallery />
      <Pagination
        itemsCount={paintingsTotal}
        pageSize={filters._limit}
        visiblePages={3}
        initialPage={1}
        onPageChange={(page) =>
          updateFilters((prev) => ({ ...prev, _page: page }))
        }
        isLoading={isLoading}
      />
    </Layout>
  );
};
export default Home;
