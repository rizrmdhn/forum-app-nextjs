import React from "react";

export default function LoginPage() {
  return (
    <div className="container login-page">
      <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
        <div className="text-title font-normal text-4xl">LOGIN</div>
        <div className="container input-login flex flex-col justify-center items-center gap-4">
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
          <button className="login-btn flex flex-auto w-72 px-2 py-2 justify-center items-center text-white gap-3 bg-black">
            Login
          </button>
        </div>
        <div className="container had-an-account flex flex-rows justify-center items-center">
          <p className="text-black font-normal text-xs">
            Belum punya akun?{" "}
            <a href="/register" className="underline font-normal text-xs">
              Daftar disini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
