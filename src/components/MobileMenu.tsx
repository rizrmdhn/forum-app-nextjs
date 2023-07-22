import {
  MdBedtime,
  MdOutlineGTranslate,
  MdLogout,
  MdLogin,
} from "react-icons/md";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const isInLoginPage = usePathname().includes("/login");
  const isInRegisterPage = usePathname().includes("/register");

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-item fixed bottom-20 right-0 inline-flex h-28 w-fit flex-col items-center justify-between rounded-ss bg-defaultLightHeaders">
        <button className="mobile-menu-item__darkmode group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer">
          <MdBedtime className="h-6 w-6 text-white group-hover:text-active" />
          <p className="font-bold text-white group-hover:text-active">Dark</p>
        </button>
        <button className="mobile-menu-item__language group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer">
          <MdOutlineGTranslate className="h-6 w-6 text-white group-hover:text-active" />
          <p className="font-bold text-white group-hover:text-active">Bahasa</p>
        </button>
        {isInLoginPage && (
          <button className="mobile-menu-item__logout group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer">
            <MdLogin className="h-6 w-6 text-white group-hover:text-active" />
            <p className="font-bold text-white group-hover:text-active">
              Keluar
            </p>
          </button>
        )}
        {isInRegisterPage && (
          <button className="mobile-menu-item__logout group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer">
            <MdLogout className="h-6 w-6 text-white group-hover:text-active" />
            <p className="font-bold text-white group-hover:text-active">
              Daftar
            </p>
          </button>
        )}
        {!isInLoginPage && !isInRegisterPage && (
          <button className="mobile-menu-item__logout group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer">
            <MdLogout className="h-6 w-6 text-white group-hover:text-active" />
            <p className="font-bold text-white group-hover:text-active">
              Keluar
            </p>
          </button>
        )}
      </div>
    </div>
  );
}
