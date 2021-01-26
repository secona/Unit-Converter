import React from "react";
import { Grid } from "@material-ui/core";
import ConverterInput from "./ConverterInput";
import ConverterOutput from "./ConverterOutput";

function Converter({ unitsRatio }) {
  const [unitsNames] = React.useState(Object.keys(unitsRatio));

  const [value, setValue] = React.useState(10);
  const [unit, setUnit] = React.useState(unitsNames[0]);

  return (
    <Grid container spacing={1}>
      <Grid container item spacing={1}>
        <ConverterInput
          input={{ value, setValue, unit, setUnit }}
          unitsNames={unitsNames}
        />
      </Grid>
      <Grid container item>
        <ConverterOutput
          units={{
            names: unitsNames,
            ratio: unitsRatio
          }}
          input={{ value, unit }}
        />
      </Grid>
    </Grid>
  );
}

export default Converter;
