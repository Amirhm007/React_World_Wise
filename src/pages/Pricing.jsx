import React from "react";
import PageNav from "../component/PageNav.jsx";

export default function Pricing() {
  return (
    <main
      className={`
        m-10 p-10 lg:p-20 bg-gray-800 min-h-[calc(100vh-5rem)] border-4 text-white border-emerald-400 rounded-lg
      `}
    >
      <PageNav />

      <section
        className={`
          w-full lg:max-w-7xl mx-auto  
          grid grid-cols-1 lg:grid-cols-2 gap-28 items-center
        `}
      >
        <div>
          <h2 className="text-5xl lg:text-6xl leading-tight mb-12">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>

        <div>
          <img
            src="img-2.jpg"
            alt="overview of a large city with skyscrapers"
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}
