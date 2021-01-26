import React from "react";
import Converter from "./components/Converter.js";
import "./style.css";
import { Container } from "@material-ui/core";

export default function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Converter />
      </Container>
    </>
  );
}
