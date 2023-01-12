import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Input from "components/common/input/input";
import useDebounce from "hooks/useDebounce";

const Search = ({ name, value, onChange, ...rest }) => {
  const [query, setQuery] = useState({ name, value });

  const debounced = useDebounce(query, 600);

  useEffect(() => {
    if (value !== debounced.value) {
      onChange(debounced);
    }
  }, [debounced]);

  const handleQuery = (value) => {
    setQuery(value);
  };

  return (
    <>
      <Input
        name={query.name}
        value={query.value}
        onChange={handleQuery}
        {...rest}
      />
    </>
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Search;
