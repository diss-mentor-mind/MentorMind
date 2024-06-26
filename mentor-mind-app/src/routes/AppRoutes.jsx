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
      <Route path="/material/:lectureId" element={<Course />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/lectures/:subjectId" element={<LecturePage />} />
      <Route path="/log-in" element={<LogInRegister />} />
      <Route path="/pdf-page/:pdfId" element={<PdfPage />} />
      <Route path="/video-page/:videoId" element={<VideoPage />} />r
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/manage-course" element={<ManageCoursePage />} />
      <Route path="/upload-document/:lectureId" element={<UploadDocumentPopup />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
