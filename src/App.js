import React from "react";
import Converter from "./components/Converter.js";
import "./style.css";
import { Container } from "@material-ui/core";

const weight = {
  Kilogram: 1,
  Hectogram: 10,
  Decagram: 100,
  Gram: 1000,
  Decigram: 10000,
  Centigram: 100000,
  Milligram: 1000000
};

export default function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Converter unitsRatio={weight}/>
      </Container>
    </>
  );
}
