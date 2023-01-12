import Input from "components/common/input/input";
import React, { useEffect, useState } from "react";
import styles from "./filters.module.scss";

import PropTypes from "prop-types";
import useDebounce from "hooks/useDebounce";

const Range = ({ name: rangeName, value: rangeValue, onChange }) => {
  const [range, setRange] = useState(rangeValue);

  const debounced = useDebounce(range, 600);

  useEffect(() => {
    if (rangeValue.to !== range.to || rangeValue.from !== range.from)
      onChange({ name: rangeName, value: debounced });
  }, [debounced]);

  const handleRange = ({ name, value }) => {
    setRange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.range}>
      <Input
        placeholder="from"
        type="number"
        className={styles.range__input}
        onChange={handleRange}
        value={range.from}
        name="from"
      />
      <div className={styles.range__dash}></div>
      <Input
        placeholder="before"
        type="number"
        className={styles.range__input}
        onChange={handleRange}
        value={range.to}
        name="to"
      />
    </div>
  );
};
Range.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Range;
