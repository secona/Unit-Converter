import React from "react";
import Panel from "./Panel";
import Converter from "./Converter";

function Panels({ systems, activePanel }) {
  return (
    <>
      {Object.keys(systems).map(systemName => (
        <Panel activePanel={activePanel} index={systemName} key={systemName}>
          <Converter unitsRatio={systems[systemName]} />
        </Panel>
      ))}
    </>
  );
}

export default Panels;
