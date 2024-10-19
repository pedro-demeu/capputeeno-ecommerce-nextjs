"use client";
import { useState, useMemo } from "react";

function FeedPagination() {
  const [activePage, setActivePage] = useState(0);

  const pages = useMemo(() => {
    return Array.from({ length: 5 }).map((_, index) => ({
      id: index + 1,
      value: index,
    }));
  }, []);

  return (
    <div className="flex items-center gap-1 mt-3">
      {pages?.map((page) => (
        <button
          key={`${page.id}-page`}
          className={`w-[32px] h-[32px] rounded-md font-normal transition-colors 
            ${
              activePage === page.value
                ? "bg-gray-200 border-2 border-[#FFA585] text-[#FFA585]"
                : "bg-gray-200 border-2 border-transparent text-gray-600"
            }`}
          onClick={() => setActivePage(page.value)}
        >
          {page.value + 1}
        </button>
      ))}
      <button className="w-[32px] h-[32px] rounded-md font-normal transition-colors bg-gray-200 border border-transparent text-gray-600">
        {"<"}
      </button>
      <button className="w-[32px] h-[32px] rounded-md font-normal transition-colors bg-gray-200 border border-transparent text-gray-600">
        {">"}
      </button>
    </div>
  );
}

export default FeedPagination;
