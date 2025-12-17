import { Link } from "react-router-dom";
import React from "react";
import PageNav from "../component/PageNav.jsx";
export default function Homepage() {
  return (
    <main
      className={`
    h-[calc(100vh-2rem)] m-4 
    bg-[url('/bg.jpg')] bg-cover bg-center 
    bg-gray-800/80 bg-blend-multiply
    pt-5 pb-10 px-10 lg:pt-10 lg:pb-20 lg:px-20
    border-4 border-emerald-400 rounded-lg
  `}
    >
      <PageNav />
      <section
        className={`
          flex flex-col h-[85%] 
          items-center justify-center 
          space-y-10 text-center
        `}
      >
        <h1
          className={`
            text-5xl sm:text-6xl lg:text-[4.5rem] leading-tight 
            text-white
          `}
        >
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2
          className={`
            w-11/12 sm:w-[90%] 
            text-lg sm:text-xl lg:text-[1.9rem] 
            text-gray-300 mb-10
          `}
        >
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link
          to="/app"
          className={`
            bg-green-600 hover:bg-green-700 text-white 
            font-semibold py-4 px-10 rounded-full 
            transition-colors duration-300 
            inline-block
          `}
        >
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
