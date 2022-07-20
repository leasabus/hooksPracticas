import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithHook } from "./02-useEffect/FormWithHook";

function App() {
  return (
    <div className="App">
      <h1>Hooks App</h1>
      <CounterApp />
      <hr />

      <CounterWithCustomHook />
      <hr />
      <SimpleForm />
      <hr />
      <FormWithHook />
    </div>
  );
}

export default App;
