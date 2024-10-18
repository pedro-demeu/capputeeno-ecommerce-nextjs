"use client";
import { useState } from "react";

function TabFilters() {
  const [activeTab, setActiveTab] = useState("todos");

  const tabs = [
    { label: "todos os produtos", value: "todos" },
    { label: "camisetas", value: "camisetas" },
    { label: "canecas", value: "canecas" },
  ];

  return (
    <div className="flex items-center space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`uppercase font-mono py-2 ${
            activeTab === tab.value
              ? "border-b-4 border-[#FFA585]"
              : "border-b-4 border-transparent"
          }`}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabFilters;
