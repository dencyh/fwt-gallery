import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { paintingsService } from "../services/paintings.service";
import { paintings as apiPaintings } from "fakeApi/paintings";

const PaintingsContext = React.createContext();

export const usePaintings = () => {
  return useContext(PaintingsContext);
};

export const PaintingsProvider = ({ children }) => {
  const [paintings, setPaintings] = useState([]);
  const [paintingsTotal, setPaintingsTotal] = useState(33);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPaintings(apiPaintings);
  }, []);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  const getPaintings = async () => {
    setIsLoading(true);
    try {
      const response = await paintingsService.getPaintings();
      setPaintingsTotal(response.headers.get("x-total-count"));
      setPaintings(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <PaintingsContext.Provider
      value={{ paintings, paintingsTotal, isLoading, getPaintings }}
    >
      {children}
    </PaintingsContext.Provider>
  );
};

PaintingsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
