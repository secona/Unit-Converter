import React from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper,
  Grid
} from "@material-ui/core";
import CalculateValue from "../functions/CalculateValue";

function ConverterOutput({ units, input }) {
  return (
    <Grid item xs>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Unit</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {units.names.map(unitName => (
              <TableRow>
                <TableCell scope="row">{unitName}</TableCell>
                <TableCell align="right">
                  {CalculateValue(units.ratio, input, unitName)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default ConverterOutput;
