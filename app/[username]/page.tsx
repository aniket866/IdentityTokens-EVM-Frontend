"use client";
import React from "react";

export default async function UsernamePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return (
    <main className="flex min-h-screen items-center justify-center bg-app-bg">
      <h1 className="font-utsaha text-2xl font-semibold text-white">
        @{username}
      </h1>
    </main>
  );
}
