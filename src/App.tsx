import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Page from "./Page";
import Welcome from "./Welcome";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Welcome />} />
			<Route path="/page" element={<Page />} />

			<Route element={<Welcome />} />
		</Routes>
	);
}

export default App;
