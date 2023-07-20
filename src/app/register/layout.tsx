import BottomNavigation from "@/components/BottomNavigation";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
}
