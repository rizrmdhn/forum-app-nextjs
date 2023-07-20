"use client";

import { usePathname } from "next/navigation";
import { MdLeaderboard, MdForum, MdMenu } from "react-icons/md";

export default function BottomNavigation() {
  const isInLeaderboardPage = usePathname().includes("/leaderboard");
  const isInThreadPage = usePathname().includes("/thread");

  return (
    <div className="container bottom-navigation fixed bottom-0">
      <div className="flex flex-row justify-between items-center w-screen h-defaultHeaderMobile px-6 bg-defaultLightHeaders">
        <a
          className="icon-leaderboard cursor-pointer flex flex-col justify-center items-center w-full"
          href="/leaderboard"
        >
          <MdLeaderboard className={
            isInLeaderboardPage ? "w-8 h-8 text-active" : "w-8 h-8 text-white"
          } />
          <p className={
            isInLeaderboardPage ? "font-bold text-active" : "font-bold text-white"
          }>Leaderboard</p>
        </a>
        <a
          className="icon-forum cursor-pointer flex flex-col justify-center items-center w-full"
          href="/thread"
        >
          <MdForum
            className={
              isInThreadPage ? "w-8 h-8 text-active" : "w-8 h-8 text-white"
            }
          />
          <p
            className={
              isInThreadPage ? "font-bold text-active" : "font-bold text-white"
            }
          >
            Forum
          </p>
        </a>
        <a
          className="icon-menu cursor-pointer flex flex-col justify-center items-center w-full"
          href="/"
        >
          <MdMenu className="w-8 h-8 text-white" />
          <p className="font-bold text-white">Menu</p>
        </a>
      </div>
    </div>
  );
}
