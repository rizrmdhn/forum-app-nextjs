
import BottomNavigation from "@/components/BottomNavigation";
import HeaderLeaderboardPage from "@/components/HeaderLeaderboardPage";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLeaderboardPage />
      {children}
      <BottomNavigation />
    </>
  );
}
