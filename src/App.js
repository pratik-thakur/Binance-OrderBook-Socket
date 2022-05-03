import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Pair } from "./components/pair";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pair />
      </header>
    </div>
  );
}

export default App;
