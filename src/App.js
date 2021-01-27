import React from "react";
import ConverterSelector from "./components/ConverterSelector";
import Panels from "./components/Panels";
import "./style.css";
import { Container } from "@material-ui/core";
import systems from "./measurementSystems.json";

export default function App() {
  const [activePanel, setActivePanel] = React.useState("Weight");

  return (
    <>
      <Container maxWidth="sm">
        <ConverterSelector 
          systemsName={Object.keys(systems)}
          panel={{activePanel, setActivePanel}}
        />
        <Panels 
          systems={systems} 
          activePanel={activePanel}
        />
      </Container>
    </>
  );
}
