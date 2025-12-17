import React from "react";
import PageNav from "../component/PageNav.jsx";

export default function Product() {
  return (
    <main
      className={`
        m-10 p-10 lg:p-20 bg-gray-800 min-h-[calc(100vh-5rem)] border-4 text-white border-emerald-400 rounded-lg
      `}
    >
      <PageNav />

      <section
        className={`
          w-full  lg:max-w-7xl mx-auto mt-4
          grid grid-cols-1 lg:grid-cols-2 gap-28 items-center
        `}
      >
        <div>
          <img
            src="img-1.jpg"
            alt="person with dog overlooking mountain with sunset"
            className="w-full"
          />
        </div>

        <div>
          <h2 className="text-5xl lg:text-6xl leading-tight mb-12">
            About WorldWide.
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p className="text-lg mb-8 text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
