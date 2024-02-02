import React, { useContext } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/DiscoverPage";
import NavBar from "./components/NavBar";
import ListingPage from "./pages/ListingPage";
import HomePage from "./pages/HomePage";
import { RootStoreContext } from "./context/RootStoreContext";
import MobileNavMenu from "./components/MobileNavMenu";
import { observer } from "mobx-react";
import AuthPage from "./pages/AuthPage";

const App = observer(() => {
  const rootStore = useContext(RootStoreContext);

  return (
    <RootStoreContext.Provider value={rootStore}>
      <div className="w-screen h-screen flex flex-col">
        {rootStore.uiStore.showNav && (
          <div className="fixed w-full h-full bg-black bg-opacity-40 z-30 blur"></div>
        )}
        {rootStore.uiStore.showNav && <MobileNavMenu />}
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/discover" element={<Main />} />
          <Route path="/:id" element={<ListingPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </RootStoreContext.Provider>
  );
});

export default App;
