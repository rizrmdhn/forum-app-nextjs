import MobileThreadCard from "@/components/MobileThreadCard";
import React from "react";

export default function ThreadPage() {
  return (
    <div className="flex flex-col items-center gap-8 px-8 py-12 h-defaultMobileHeight overflow-y-auto">
      {new Array(10).fill(0).map((_, i) => (
        <MobileThreadCard key={i} />
      ))}
    </div>
  );
}
