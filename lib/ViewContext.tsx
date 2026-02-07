"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ViewContextType, ViewType } from "@/types";

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewType>("softwareEngineer");

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
