import React from "react";
import { Grid } from "@material-ui/core";
import ConverterInput from "./ConverterInput";
import ConverterOutput from "./ConverterOutput";

function Converter() {
  const [value, setValue] = React.useState(10);
  const [unit, setUnit] = React.useState("Kilogram");

  const units = [
    "Kilogram",
    "Hectogram",
    "Decagram",
    "gram",
    "Decigram",
    "Centigram",
    "Milligram",
  ]

  return (
    <Grid container spacing={1}>
      <Grid container item spacing={1}>
        <ConverterInput
          input={{ value, setValue, unit, setUnit }}
          units={units}
        />
      </Grid>
      <Grid container item>
        <ConverterOutput 
          units={units}
        />
      </Grid>
    </Grid>
  );
}

export default Converter;
