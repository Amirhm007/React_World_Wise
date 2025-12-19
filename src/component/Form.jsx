import { useEffect, useState } from "react";
import React from "react";
import Button from "./Button.jsx";
import BackButton from "./BackButton.jsx";
import { useUrlPosition } from "../hooks/useUrlPosition.js";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const inputBaseClasses =
  "w-full p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-100 placeholder-gray-400 transition-all text-base";
const btnBaseClasses =
  "py-2 px-4 rounded-md font-semibold text-sm transition-colors duration-200";
const btnPrimaryClasses = `${btnBaseClasses} cursor-pointer bg-emerald-500 text-gray-900 hover:bg-emerald-600`;

function Form() {
  const { mapLat: lat, mapLng: lng } = useUrlPosition();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function FetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );

          const data = await res.json();

          if (!data.countryCode) throw new Error("That's not a city! 😉");

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      FetchCityData();
    },
    [lat, lng]
  );

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng) return <Message message="Start by clicking on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className="bg-gray-700 rounded-lg p-5 px-5 w-full flex flex-col gap-3">
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="cityName" className="text-gray-300 font-medium text-sm">
          City name
        </label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className={inputBaseClasses}
        />
        <span className="absolute right-3 top-[2.4rem] text-2xl">{emoji}</span>
      </div>

      <div className="flex flex-col gap-1 relative">
        <label htmlFor="date" className="text-gray-300 font-medium text-sm">
          When did you go to {cityName}?
        </label>
        <input
          type="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className={inputBaseClasses}
        />
      </div>

      <div className="flex flex-col gap-1 relative">
        <label htmlFor="notes" className="text-gray-300 font-medium text-sm">
          Notes about your trip to {cityName}
        </label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          rows="4"
          className={inputBaseClasses}
          placeholder="Share your thoughts..."
        />
      </div>

      <div className="flex justify-between mt-3">
        <Button type="primary" className={btnPrimaryClasses}>
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
