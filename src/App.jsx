import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

import Surface from "./pages/Surface";
import Macbook from "./pages/MacBook";
import Dell from "./pages/Dell";

import Contact from "./components/Contact";

function App() {
    return (
        <>
            {/* THANH MENU */}
            <Navbar />

            {/* CÁC TRANG */}
            <Routes>

                {/* TRANG CHỦ */}
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <ProductGrid />
                        </>
                    }
                />

                {/* SURFACE */}
                <Route
                    path="/surface"
                    element={<Surface />}
                />

                {/* MACBOOK */}
                <Route
                    path="/macbook"
                    element={<Macbook />}
                />

                {/* DELL */}
                <Route
                    path="/dell"
                    element={<Dell />}
                />

                {/* LIÊN HỆ */}
                <Route
                    path="/contact"
                    element={<Contact />}
                />

            </Routes>
        </>
    );
}

export default App;