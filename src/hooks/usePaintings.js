import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { paintingsService } from "../services/paintings.service";

const PaintingsContext = React.createContext();

export const usePaintings = () => {
  return useContext(PaintingsContext);
};

export const PaintingsProvider = ({ children }) => {
  const [paintings, setPaintings] = useState([]);
  const [paintingsTotal, setPaintingsTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   getPaintings();
  // }, []);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  const getPaintings = async (payload) => {
    setIsLoading(true);
    try {
      const response = await paintingsService.getPaintings(payload);

      setPaintingsTotal(Number(response.headers.get("x-total-count")) || 0);
      setPaintings(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
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
