import Dropdown from "components/common/dropdown/dropdown";
import React, { useMemo } from "react";
import FilterItem from "./filterItem";
import styles from "./filters.module.scss";
import Select from "./select";
import Range from "./range";
import Search from "./search";
import { useAuthors } from "hooks/useAuthors";
import { useLocations } from "hooks/useLocations";
import { useFilters } from "hooks/useFilters";

const FilterList = () => {
  const { filters, updateFilters, clearFilterByName } = useFilters();

  const { authors } = useAuthors();
  const { locations } = useLocations();

  const authorsTransformed = useMemo(
    () =>
      authors.map((author) => ({
        value: author.id,
        label: author.name
      })),

    [authors]
  );

  const locationsTransformed = useMemo(
    () =>
      locations.map((location) => ({
        value: location.id,
        label: location.location
      })),
    [locations]
  );

  const handleChange = ({ name, value }) => {
    updateFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <FilterItem>
        <Search
          placeholder="Name"
          name="name"
          value={filters.name}
          onChange={handleChange}
        />
      </FilterItem>

      <FilterItem>
        <Dropdown
          placeholder="Author"
          value={filters.author.label}
          onClear={clearFilterByName("author")}
        >
          <Select
            name="author"
            options={authorsTransformed}
            onChange={handleChange}
          />
        </Dropdown>
      </FilterItem>

      <FilterItem>
        <Dropdown
          placeholder="Location"
          value={filters.location.label}
          onClear={clearFilterByName("location")}
        >
          <Select
            name="location"
            options={locationsTransformed}
            onChange={handleChange}
          />
        </Dropdown>
      </FilterItem>

      <FilterItem>
        <Dropdown placeholder="Created" persistOnSelect>
          <Range
            value={filters.created}
            name="created"
            onChange={handleChange}
          />
        </Dropdown>
      </FilterItem>
    </div>
  );
};
export default FilterList;
