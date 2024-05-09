import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Sidebar from "./widgets/Sidebar.jsx";
import About from "./widgets/About.jsx";
import Book from "./pages/Book.jsx";

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />

                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/book/:id" element={<Book />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App
