import React from "react";
import { Header } from "./Header/Header";
import { MainContainer } from "./Main/Main";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
			<Header />
				<Route path ='/' component={MainContainer }/>
				{/* <Route path = '/shower' component={}/>
				<Route path = '/constructions' component={}/>
				<Route path = '/mirror' component={}/>
				<Route path = '/glassFurniture' component={}/> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
