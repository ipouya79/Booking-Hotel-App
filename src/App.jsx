import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import LocationList from "./components/LocationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelProvider from "./components/context/HotelProvider";

function App() {
  return (
    <div>
      <HotelProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />

          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<div>single hotel</div>} />
          </Route>
        </Routes>
      </HotelProvider>
    </div>
  );
}

export default App;
