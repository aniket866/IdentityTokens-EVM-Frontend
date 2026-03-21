import React from "react";

export default function PublicProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="min-h-screen bg-[#0a0a0a]">{children}</section>;
}
