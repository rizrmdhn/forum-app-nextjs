"use client";

import BottomNavigation from "@/components/BottomNavigation";
import HeaderThreadPage from "@/components/HeaderThreadPage";
import MobileMenu from "@/components/MobileMenu";
import { useSelector } from "react-redux";
import { State as SetShowMenu } from "@/states/setShowMenu/reducer";

export default function Home() {
  const showMenu = useSelector<any, any>((state: any) => state.showMenu)

  return (
    <main className="h-screen bg-light">
      <HeaderThreadPage />
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </main>
  );
}
