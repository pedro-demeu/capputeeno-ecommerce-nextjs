"use client";
import { ActiveTabType, useActiveTab } from "@/_store/tabStore";

type Tab = {
  label: string;
  tag: ActiveTabType;
};

function TabFilters() {
  const { activeTab, setActiveTabValue } = useActiveTab();

  const tabs: Tab[] = [
    { label: "todos os produtos", tag: "all" },
    { label: "camisetas", tag: "tshirt" },
    { label: "canecas", tag: "mug" },
  ];

  return (
    <div className="flex items-center space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.tag}
          className={`uppercase font-mono py-2 ${
            activeTab === tab.tag
              ? "border-b-4 border-[#FFA585]"
              : "border-b-4 border-transparent"
          }`}
          onClick={() => setActiveTabValue(tab.tag)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabFilters;
