import HeaderThreadPage from "@/components/HeaderThreadPage";
import BottomNavigation from "@/components/BottomNavigation";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderThreadPage />
      {children}
      <BottomNavigation />
    </>
  );
}
