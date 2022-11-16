import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Data from "./Data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
