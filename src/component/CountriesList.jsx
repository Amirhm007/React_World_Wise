import React from "react";
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";

function CountriesList({ isloading, cities }) {
  if (isloading) return <Spinner />;

  if (!cities || cities.length === 0)
    return (
      <Message
        message={
          "Add your first countries by clicking on a contries on the map"
        }
      />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((e) => e.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    return arr;
  }, []);
  return (
    <ul className="w-full h-[65vh] list-none  overflow-x-hidden grid grid-cols-2 content-start gap-4">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
