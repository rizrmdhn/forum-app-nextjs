import React from "react";
import { MdLeaderboard, MdForum, MdMenu } from "react-icons/md";

export default function BottomNavigation() {
  return (
    <div className="container bottom-navigation fixed bottom-0">
      <div className="flex flex-row justify-between items-center w-full h-defaultHeaderMobile px-6 bg-defaultLightHeaders">
        <div className="icon-leaderboard cursor-pointer flex flex-col justify-center items-center w-full">
          <MdLeaderboard className="w-8 h-8 text-white" />
          <p className="font-bold text-white">Leaderboard</p>
        </div>
        <div className="icon-forum cursor-pointer flex flex-col justify-center items-center w-full">
          <MdForum className="w-8 h-8 text-white" />
          <p className="font-bold text-white">Forum</p>
        </div>
        <div className="icon-menu cursor-pointer flex flex-col justify-center items-center w-full">
          <MdMenu className="w-8 h-8 text-white" />
          <p className="font-bold text-white">Menu</p>
        </div>
      </div>
    </div>
  );
}
