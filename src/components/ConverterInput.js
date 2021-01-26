import React from "react";
import { TextField, Select, MenuItem, Grid } from "@material-ui/core";

function ConverterInput({ input, units }) {
  return (
    <>
      <Grid item xs>
        <TextField
          label="Value"
          variant="outlined"
          fullWidth
          value={input.value}
          type="number"
          onChange={e => input.setValue(e.target.value)}
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
          {units.map((item, idx) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </Grid>
    </>
  );
}

export default ConverterInput;
