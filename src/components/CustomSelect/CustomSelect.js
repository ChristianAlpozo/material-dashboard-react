import React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CustomSelect({ list, label, setValue, value }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
          label={label}
        >
          {list.map((option) => (
            <MenuItem key={option.value} value={option.value} test-id={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

CustomSelect.defaultProps = {
  list: [],
  label: "",
  value: "",
  setValue: () => {},
};

CustomSelect.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  label: PropTypes.string,
  setValue: PropTypes.func,
  value: PropTypes.string,
};

export default CustomSelect;
