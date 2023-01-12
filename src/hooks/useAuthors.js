import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { authorsService } from "../services/authors.service";

const AuthorsContext = React.createContext();

export const useAuthors = () => {
  return useContext(AuthorsContext);
};

export const AuthorsProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAuthors();
  }, []);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  const getAuthors = async () => {
    setIsLoading(true);
    try {
      const { data } = await authorsService.getAuthors();
      setAuthors(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthorsContext.Provider value={{ authors, isLoading, getAuthors }}>
      {children}
    </AuthorsContext.Provider>
  );
};

AuthorsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
