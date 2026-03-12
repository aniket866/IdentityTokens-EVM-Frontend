"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { FiBell, FiPlus, FiMenu } from "react-icons/fi";

export function DashboardNavbar() {
  const pathname = usePathname();

  // page title from the current route
  const getPageTitle = () => {
    if (!pathname || pathname === "/") return "Home";
    // last segment of the path
    const segments = pathname.split("/").filter(Boolean);
    const route = segments[segments.length - 1] || "Home";
    return route.charAt(0).toUpperCase() + route.slice(1);
  };

  return (
    <nav className="flex h-[72px] w-full shrink-0 items-center justify-between border-b border-white/5 bg-dashboard-bg px-5 lg:px-8">
      {/* ── Mobile Menu Toggle + Page title ── */}
      <div className="flex items-center gap-4">
        <button
          onClick={() =>
            document.dispatchEvent(new CustomEvent("openMobileSidebar"))
          }
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-dashboard-bg lg:hidden"
          aria-label="Open sidebar"
        >
          <FiMenu size={24} color="white" />
        </button>
        <h1 className="font-utsaha text-2xl tracking-wide text-white">
          {getPageTitle()}
        </h1>
      </div>

      {/* ── Bell icon + Create Identity button ── */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Notification bell */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
          aria-label="Notifications"
        >
          <FiBell size={22} />
        </button>

        {/* ── "Create Identity" button  ── */}
        <Button className="flex items-center gap-2.5 rounded-full border-none bg-brand-green px-4 py-2.5 font-utsaha text-base text-dashboard-bg shadow-none transition-transform duration-200 ease-out hover:scale-[1.02] hover:bg-brand-green/90 active:scale-[0.98] md:px-5 md:text-xl">
          <FiPlus size={20} className="shrink-0" strokeWidth={3} />
          <span>{pathname === "/home" ? "New Token" : "Create Identity"}</span>
        </Button>
      </div>
    </nav>
  );
}
