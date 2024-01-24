import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/DiscoverPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ListingPage from "./pages/ListingPage";
import HomePage from "./pages/HomePage";
import { RootStoreContext } from "./context/RootStoreContext";
import RootStore from "./store/RootStore";

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="w-screen h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/discover" element={<Main />} />
          <Route path="/:id" element={<ListingPage />} />
        </Routes>
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
