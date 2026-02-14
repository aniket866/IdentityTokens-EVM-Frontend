"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-landing-bg p-4 text-center">
      <h2 className="text-xl font-medium tracking-tight text-gray-900">
        Something went wrong
      </h2>
      <p className="mt-2 text-sm text-gray-600">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-[24.85px] border border-gray-300 bg-white px-6 py-3 text-base text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
      >
        Try again
      </button>
    </div>
  );
}
