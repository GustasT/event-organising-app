import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import GlobalStyles from "./globalStyles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
