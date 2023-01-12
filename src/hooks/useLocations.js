import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { locationsService } from "../services/locations.service";

const LocationsContext = React.createContext();

export const useLocations = () => {
  return useContext(LocationsContext);
};

export const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocations();
  }, []);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  const getLocations = async () => {
    setIsLoading(true);
    try {
      const { data } = await locationsService.getLocations();
      setLocations(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <LocationsContext.Provider value={{ locations, isLoading, getLocations }}>
      {children}
    </LocationsContext.Provider>
  );
};

LocationsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
