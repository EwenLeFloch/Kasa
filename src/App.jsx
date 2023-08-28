import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Details from "./pages/Details";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/accomoditation/:id" element={<Details />}></Route>

				{/* En cas de route non existente */}
				<Route path="/404" element={<Error404 />}></Route>
				<Route path="*" element={<Navigate to="/404" />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
