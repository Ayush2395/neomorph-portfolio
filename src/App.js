import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faPaperPlane,
  faArrowUp,
  faScrewdriverWrench,
  faSheetPlastic,
  faEnvelope,
  faSwatchbook,
  faPenRuler,
  faBezierCurve,
  faCubes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Navmenu from "./components/Navmenu";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

// my script
import main from "./assets/js/main";
import ErrorPage from "./components/ErrorPage";
import ProjectList from "./pages/ProjectList";
import Footer from "./components/Footer";
library.add(
  faHome,
  faUser,
  faPaperPlane,
  faArrowUp,
  faScrewdriverWrench,
  faSheetPlastic,
  faEnvelope,
  faSwatchbook,
  faPenRuler,
  faBezierCurve,
  faCubes,
  faMagnifyingGlass
);

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.srv = main;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects_list" element={<ProjectList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}
