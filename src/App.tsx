import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ListingPage from "./pages/ListingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/discover" element={<Main />} />
        <Route path="/:id" element={<ListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
