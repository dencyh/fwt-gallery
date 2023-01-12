import Dropdown from "components/common/dropdown/dropdown";
import React, { useEffect, useMemo, useState } from "react";
import FilterItem from "./filterItem";
import styles from "./filters.module.scss";
import Select from "./select";
import Range from "./range";
import Search from "./search";
import { useAuthors } from "hooks/useAuthors";
import { useLocations } from "hooks/useLocations";

const initialValues = {
  name: "abc",
  author: {},
  location: {},
  created: {
    from: "",
    to: ""
  }
};

const FilterList = () => {
  const [values, setValues] = useState(initialValues);

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
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onClear = (name) => {
    return function () {
      setValues((prev) => ({ ...prev, [name]: initialValues[name] }));
    };
  };

  // TODO remove
  // useEffect(() => {
  //   console.log(values), [values];
  // });

  return (
    <div className={styles.container}>
      <FilterItem>
        <Search
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </FilterItem>

      <FilterItem>
        <Dropdown
          placeholder="Author"
          value={values.author.label}
          onClear={onClear("author")}
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
          value={values.location.label}
          onClear={onClear("location")}
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
            value={values.created}
            name="created"
            onChange={handleChange}
          />
        </Dropdown>
      </FilterItem>
    </div>
  );
};
export default FilterList;
