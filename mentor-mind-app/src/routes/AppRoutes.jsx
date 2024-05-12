import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Course from "../pages/Course";
import SettingsPage from "../pages/SettingsPage";
import LogInRegister from "../pages/LogInRegister";
import CoursePage from "../pages/CoursesPage";
import LecturePage from "../pages/LecturePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/course" element={<Course />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/lectures" element={<LecturePage />} />
      <Route path="/log-in" element={<LogInRegister />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
