"use client";

import React from "react";
import { useView } from "@/lib/ViewContext";
import { useLanguage } from "@/lib/LanguageContext";
import { Code2, Database } from "lucide-react";

export default function ViewSwitch() {
  const { view, setView } = useView();
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center p-1 bg-astronaut-100 dark:bg-astronaut-900 rounded-full border border-astronaut-200 dark:border-astronaut-800 shadow-inner">
      <button
        onClick={() => setView("softwareEngineer")}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
          view === "softwareEngineer"
            ? "bg-cerulean-blue-600 text-white shadow-md scale-105"
            : "text-astronaut-600 dark:text-astronaut-400 hover:text-cerulean-blue-500"
        }`}
      >
        <Code2 size={18} />
        <span className="text-sm font-medium">{t("view_switch.software")}</span>
      </button>
      <button
        onClick={() => setView("dataEngineer")}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
          view === "dataEngineer"
            ? "bg-cerulean-blue-600 text-white shadow-md scale-105"
            : "text-astronaut-600 dark:text-astronaut-400 hover:text-cerulean-blue-500"
        }`}
      >
        <Database size={18} />
        <span className="text-sm font-medium">{t("view_switch.data")}</span>
      </button>
    </div>
  );
}
