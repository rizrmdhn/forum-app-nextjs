import Image from "next/image";
import React from "react";

export default function LeaderboardPage() {
  return (
    <div className="container leaderboard-page">
      <div className="leaderboard-page__header flex flex-row py-3 justify-center items-center gap-40">
        <h2 className="font-bold text-sm">Pengguna</h2>
        <h2 className="font-bold text-sm">Skor</h2>
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <>
          <div className="leaderboard-page__user__lists flex flex-row py-3 justify-center items-center gap-32" key={index}>
            <div className="leaderboard-page__user__lists__user_container flex flex-row items-center gap-3">
              <div className="user-avatar-container">
                <Image
                  className="user-avatar rounded-full"
                  src="https://ui-avatars.com/api/?name=JOHN+DOE&length=2&background=random&size=128"
                  alt="user-avatar"
                  width={25}
                  height={25}
                />
              </div>
              <div className="user-name">
                <h2 className="font-normal text-sm">John Doe</h2>
              </div>
            </div>
            <div className="leaderboard-page__user__score flex flex-row items-center gap-3">
              <h2 className="ont-normal  text-sm">100</h2>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
