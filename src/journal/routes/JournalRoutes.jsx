import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { JournalPage } from "../pages/JournalPage";

export const JournalRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<JournalPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
