import React from "react";
import { TextField, Select, MenuItem, Grid } from "@material-ui/core";

function ConverterInput({ input, unitsNames }) {
  const HandleChange = (e) => {
    const newValue = Number(e.target.value) || null;
    input.setValue(newValue);
  };

  return (
    <>
      <Grid item xs>
        <TextField
          label="Value"
          variant="outlined"
          fullWidth
          value={input.value}
          type="number"
          onChange={HandleChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Select
          variant="outlined"
          size="small"
          fullWidth
          onChange={e => input.setUnit(e.target.value)}
          value={input.unit}
        >
          {unitsNames.map(item => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </Grid>
    </>
  );
}

export default ConverterInput;
