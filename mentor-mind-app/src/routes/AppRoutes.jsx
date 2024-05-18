import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Course from "../pages/Course";
import SettingsPage from "../pages/SettingsPage";
import LogInRegister from "../pages/LogInRegister";
import VideoPage from "../pages/VideoPage";
import PdfPage from "../pages/PdfPage";
import CoursePage from "../pages/CoursesPage";
import LecturePage from "../pages/LecturePage";
import ManageCoursePage from "../pages/ManageCoursePage";
import UploadDocumentPopup from "../components/upload-document-popup/UploadDocumentPopup";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/course" element={<Course />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/lectures" element={<LecturePage />} />
      <Route path="/log-in" element={<LogInRegister />} />
      <Route path="/video-page" element={<VideoPage />} />
      <Route path="/pdf-page" element={<PdfPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/manage-course" element={<ManageCoursePage />} />
      <Route path="/upload-document" element={<UploadDocumentPopup />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
