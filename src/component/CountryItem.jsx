import React from "react";

function CountryItem({ country }) {
  return (
    <li className="flex flex-col items-center gap-1 text-xl font-semibold bg-gray-700 rounded-lg py-4 px-8 border-l-[5px] border-amber-500">
      <span className="text-5xl leading-none">{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
