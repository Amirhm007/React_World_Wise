import React, { use, useEffect } from "react";
import { useState } from "react";
import PageNav from "../component/PageNav.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Authprovider, useAuth } from "../contexts/FakeAtuthContext.jsx";
import Button from "../component/Button.jsx";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      login(email, password);
    }
  }
  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/app", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );
  return (
    <main
      onSubmit={handleSubmit}
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

          <Button>Login</Button>
        </form>
      </div>
    </main>
  );
}
