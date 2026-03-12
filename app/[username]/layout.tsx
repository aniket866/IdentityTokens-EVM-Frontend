import React from "react";

export default function PublicProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // You can add public-facing headers or footers here later if you want
    <section className="min-h-screen bg-[#0a0a0a]">{children}</section>
  );
}
