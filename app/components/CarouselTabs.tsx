"use client";
import { useState } from "react";
import Link from "next/link";

export default function CarouselTabs() {
  const [currentTab, setCurrentTab] = useState(0);

  //handle tab change
  const handleTabChange = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div
      role="tablist"
      className="tabs tabs-bordered bg-transparent hidden sm:flex justify-center pb-2"
    >
      <Link
        role="tab"
        href="#item1"
        onClick={() => handleTabChange(0)}
        className={`tab ${currentTab === 0 && "text-primary tab-active"}`}
      >
        React
      </Link>
      <Link
        role="tab"
        href="#item2"
        onClick={() => handleTabChange(1)}
        className={`tab ${currentTab === 1 && "text-primary tab-active"}`}
      >
        Next.js
      </Link>
      <Link
        role="tab"
        href="#item3"
        onClick={() => handleTabChange(2)}
        className={`tab ${currentTab === 2 && "text-primary tab-active"}`}
      >
        Tailwind CSS
      </Link>
      <Link
        role="tab"
        href="#item4"
        onClick={() => handleTabChange(3)}
        className={`tab ${currentTab === 3 && "text-primary tab-active"}`}
      >
        Typescript
      </Link>
      <Link
        role="tab"
        href="#item5"
        onClick={() => handleTabChange(4)}
        className={`tab ${currentTab === 4 && "text-primary tab-active"}`}
      >
        Copilot
      </Link>
    </div>
  );
}
