import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { paintingsService } from "../services/paintings.service";

const PaintingsContext = React.createContext();

export const usePaintings = () => {
  return useContext(PaintingsContext);
};

export const PaintingsProvider = ({ children }) => {
  const [paintings, setPaintings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  const getPaintings = async () => {
    setIsLoading(true);
    try {
      const { data } = await paintingsService.getPaintings();
      setPaintings(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <PaintingsContext.Provider value={{ paintings, isLoading, getPaintings }}>
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
