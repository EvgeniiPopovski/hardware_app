import React from "react";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Main />
			</div>
		</BrowserRouter>
	);
}

export default App;
