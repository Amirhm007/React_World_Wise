import React from "react";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
const CitiesContext = createContext();
const url = "http://localhost:8000";
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(function () {
    async function fetchCities() {
      setIsloading(true);
      try {
        const res = await fetch(`${url}/cities`);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error(err);
        alert("error fetching cities data");
      } finally {
        setIsloading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    setIsloading(true);
    setCurrentCity(null);
    try {
      const res = await fetch(`${url}/cities/${id}`);
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.error(err);
      alert("error fetching city data");
    } finally {
      setIsloading(false);
    }
  }
  return (
    <CitiesContext.Provider value={{ cities, isloading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext was used outside the citiesprovider");
  }
  return context;
}
export { CitiesProvider, useCities };
