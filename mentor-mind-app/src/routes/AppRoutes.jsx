import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Course from "../pages/Course";
import LogInRegister from "../pages/LogInRegister";
import VideoPage from "../pages/VideoPage";
import PdfPage from "../pages/PdfPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/course" element={<Course />} />
      <Route path="/log-in" element={<LogInRegister />} />
      <Route path="/video-page" element={<VideoPage />} />
      <Route path="/pdf-page" element={<PdfPage />} />
    </Routes>
  );
}
