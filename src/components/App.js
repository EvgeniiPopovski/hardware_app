import React from "react";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
			<Header />
				<Route path ='/' component={Main}/>
			</BrowserRouter>
		</div>
	);
}

export default App;
