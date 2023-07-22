// src/App.js
import React from "react";
import SimpleState from "./Components/SimpleState";
import Samplestate from "./Components/Samplestate";
import SearchItem from "./Components/SearchItem";

const App = () => {
  return (
    <div>
      <SimpleState />
      <Samplestate />
      <SearchItem />
    </div>
  );
};

export default App;
