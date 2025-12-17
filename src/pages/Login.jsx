import React from "react";
import { useState } from "react";
import PageNav from "../component/PageNav.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main
      className={`
        m-10 p-10 lg:p-20 
        bg-gray-800 
        min-h-[calc(100vh-5rem)] 
        text-white
        border-4 border-emerald-400 rounded-lg
      `}
    >
      <PageNav />

      <div
        className={`
          w-full max-w-lg lg:max-w-xl mx-auto 
          h-[calc(100vh-15rem)] flex items-center justify-center 
        `}
      >
        <form
          className={`
            bg-gray-700 
            rounded-lg 
            p-8 md:p-12 
            w-full max-w-sm 
            flex flex-col 
            space-y-6 
            shadow-xl
          `}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-gray-300 text-lg">
              Email address
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="p-3 text-lg rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-gray-300 text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-3 text-lg rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <Link
              to="/app"
              className="bg-green-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-200 text-lg w-full"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
