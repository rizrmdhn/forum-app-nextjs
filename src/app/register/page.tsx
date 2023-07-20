import React from "react";

export default function registerPage() {
  return (
    <div className="container register-page">
      <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
        <div className="text-title font-normal text-4xl">REGISTER</div>
        <div className="container input-register flex flex-col justify-center items-center gap-4">
          <div className="name-container w-72">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-white focus:outline-none border-black border-2 w-full px-2 py-2"
            />
          </div>
          <div className="email-container w-72">
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent text-white focus:outline-none border-black border-2 w-full px-2 py-2"
            />
          </div>
          <div className="password-container w-72">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-white w-full focus:outline-none border-black border-2 px-2 py-2"
            />
          </div>
          <button className="register-btn flex flex-auto w-72 px-2 py-2 justify-center items-center text-white gap-3 bg-black">
            Register
          </button>
        </div>
        <div className="container had-an-account flex flex-rows justify-center items-center">
            <p className="text-black font-normal text-xs">Sudah punya akun? <a href="/login" className="underline font-normal text-xs">Login</a></p>
        </div>
      </div>
    </div>
  );
}
