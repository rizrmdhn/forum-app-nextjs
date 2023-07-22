"use client";

import HeaderDetailThread from "@/components/HeaderDetailThread";

export default function ThreadPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderDetailThread title="title" />
      {children}
    </>
  );
}
