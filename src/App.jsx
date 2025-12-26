import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./component/CityList.jsx";
import CountriesList from "./component/CountriesList.jsx";
import City from "./component/City.jsx";
import Form from "./component/Form.jsx";
import { Authprovider } from "./contexts/FakeAtuthContext.jsx";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";
function App() {
  return (
    <Authprovider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </Authprovider>
  );
}
export default App;
