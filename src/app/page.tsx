import BottomNavigation from '@/components/BottomNavigation'
import HeaderThreadPage from '@/components/HeaderThreadPage'


export default function Home() {
  return (
    <main className="h-screen bg-light">
     <HeaderThreadPage />
     <BottomNavigation />
    </main>
  )
}
