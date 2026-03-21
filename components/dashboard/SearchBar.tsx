"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function SearchBar({
  placeholder = "Search…",
  value,
  onChange,
  className = "",
}: SearchBarProps) {
  return (
    <div
      className={`flex flex-1 items-center gap-2 px-4 py-2 ${className}`}
      style={{
        backgroundColor: "#151821",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <FiSearch size={16} className="shrink-0 text-gray-500" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-transparent font-utsaha text-sm text-white placeholder-gray-500 focus:outline-none"
      />
    </div>
  );
}
