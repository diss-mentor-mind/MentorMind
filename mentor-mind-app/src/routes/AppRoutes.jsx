import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Course from "../pages/Course";
import LogInRegister from "../pages/LogInRegister";
import ViewMaterial from "../pages/ViewMaterial";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/course" element={<Course />} />
      <Route path="/log-in" element={<LogInRegister />} />
      <Route path="/view_material" element={ <ViewMaterial/>} />
    </Routes>
  );
}
