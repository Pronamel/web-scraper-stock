// components/dashboard/TabNav.tsx
"use client";

import { useState, useRef, useEffect } from "react";

type TabNavProperties = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const TABS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "personal-feed", label: "Personal Feed" },
  { key: "explore-feed", label: "Explore Feed" },
  { key: "search", label: "Search" },
];

export default function TabNav({ activeTab, onTabChange }: TabNavProperties) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      {/* Left: Logo / Company name */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-md" />
        <span className="text-lg font-bold text-gray-800">
          Iron Clad Scraper
        </span>
      </div>

      {/* Center: Tab buttons */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Right: Profile button + dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden border-2 border-transparent hover:border-blue-500 transition-colors"
        >
          {/* Replace with real image => <img src="..." />*/}
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
            <a
              href="/user/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Account Settings
            </a>
            <hr className="my-1 border-gray-200" />
            <a
              href="/user/login"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Sign out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
