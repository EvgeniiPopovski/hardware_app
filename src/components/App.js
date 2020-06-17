import React, { useState } from "react";
import { Header } from "./Header/Header";
import { MainContainer } from "./Main/Main";
import { BrowserRouter, Route } from "react-router-dom";
import ShowerHardwareContainer from "./SemiSections/ShowerHardware/ShowerHardwareContainer";
import BurgerMenu from "../common/BurgerMenu/BurgerMenu";

import { ItemsListContainer } from "./ItemsList/ItemsListContainer";
import { ItemPageContainer } from "./ItemPage/ItemPage";


function App() {
	const [isOpened, setIsOpened] = useState(false);

	const toggleMenuOpen = () => {
		setIsOpened(!isOpened);
	};

	return (
		<div>
			<BrowserRouter>
				<Header toggleMenuOpen={toggleMenuOpen} />
				<BurgerMenu toggleMenuOpen={toggleMenuOpen} isOpened={isOpened} />
				<Route exact path="/" component={MainContainer} />
				<Route exact path="/shower" component={ShowerHardwareContainer} />
				<Route exact path="/shower/showerHinges" component={ItemsListContainer} />
				<Route exact path="/shower/showerHinges/:article" component={ItemPageContainer} />
				{/* <Route path = '/constructions' component={}/>
				<Route path = '/mirror' component={}/>
				<Route path = '/glassFurniture' component={}/> */}
			</BrowserRouter>
		</div>
	);
}

export default App;