import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { usePaintings } from "./usePaintings";

const initialFilters = {
  status: "idle",
  _page: 1,
  _limit: 4,
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
      // Format gte
      let gte = filters.created.from;
      if (gte.length > 0) {
        gte = Array(gte.length).fill(0).join("") + gte;
      }
      // Formate lte
      let lte = filters.created.to;
      if (lte.length > 4) {
        lte = lte[0] !== "-" ? "9999" : "-9999";
      } else if (0 < lte.length && lte.length < 4) {
        lte = Array(lte.length).fill(0).join("") + lte;
      }

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
