"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ViewContext = createContext();

export function ViewProvider({ children }) {
  const [view, setView] = useState("softwareEngineer"); // 'softwareEngineer' or 'dataEngineer'

  const toggleView = () => {
    setView((prev) => (prev === "softwareEngineer" ? "dataEngineer" : "softwareEngineer"));
  };

  return (
    <ViewContext.Provider value={{ view, setView, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
