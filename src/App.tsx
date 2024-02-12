import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./screens/homepage/homepage";
import { Route } from "./route/route";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Route />
      </div>
    </ChakraProvider>
  );
}

export default App;
