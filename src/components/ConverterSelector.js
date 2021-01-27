import React from "react";
import { Select, MenuItem, Grid } from "@material-ui/core";

function ConverterSelector({ systemsName, panel }) {
  const styles = {
    marginBottom: "10px "
  };

  return (
    <Select 
      fullWidth
      variant="outlined"
      size=""
      style={styles}
      value={panel.activePanel}
      onChange={e => panel.setActivePanel(e.target.value)}
    >
      {systemsName.map(systemName => (
        <MenuItem value={systemName} key={systemName}>
          {systemName} Converter
        </MenuItem>
      ))}
    </Select>
  )
}

export default ConverterSelector;