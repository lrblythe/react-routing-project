// import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MainContent from "./components/MainContent/MainContent";

function App() {
  //using state in MainContent
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainContent className="main" />
    </div>
  );
}

export default App;
