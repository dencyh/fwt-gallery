import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { usePaintings } from "./usePaintings";
import { formatEquals } from "utils/formatEquals";

const initialFilters = {
  status: "idle",
  _page: 1,
  _limit: 12,
  name: "",
  author: {},
  location: {},
  created: {
    from: "",
    to: ""
  }
};
const FiltersContext = React.createContext();

export const useFilters = () => {
  return useContext(FiltersContext);
};

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialFilters);

  const updateFilters = (payload) => {
    if (filters.status === "idle") {
      setFilters((prev) => ({ ...prev, status: "ready" }));
    }
    return setFilters(payload);
  };

  const clearFilterByName = (name) => {
    return function () {
      setFilters((prev) => ({ ...prev, [name]: initialFilters[name] }));
    };
  };

  const { getPaintings } = usePaintings();

  useEffect(() => {
    if (filters.status !== "idle") {
      // I suppose server uses localeCompare, so e.g. 500 > 1000
      const gte = formatEquals(filters.created.from);
      const lte = formatEquals(filters.created.to);

      getPaintings({
        _page: filters._page,
        _limit: filters._limit,
        ...(filters.name && { q: filters.name }),
        authorId: filters.author.value,
        locationId: filters.location.value,
        ...(gte && { created_gte: gte }),
        ...(lte && { created_lte: lte })
      });
    }
  }, [filters]);

  return (
    <FiltersContext.Provider
      value={{ filters, updateFilters, clearFilterByName }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
