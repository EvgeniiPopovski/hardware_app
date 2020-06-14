import React, { useState, Suspense } from "react";
import { Header } from "./Header/Header";
import { MainContainer } from "./Main/Main";
import { BrowserRouter, Route } from "react-router-dom";
import ShowerHardwareContainer from "./SemiSections/ShowerHardware/ShowerHardwareContainer";
import BurgerMenu from "../common/BurgerMenu/BurgerMenu";
// import Filter from "./FilterSection/Filter";
// import { PreviewItemCard } from "./PreviewItemCards/PreviewItemCard";
import { ItemsListContainer } from "./ItemsList/ItemsListContainer";
// import Preloader from "../common/Preloader/Preloader";

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
				{/* <Route path = '/constructions' component={}/>
				<Route path = '/mirror' component={}/>
				<Route path = '/glassFurniture' component={}/> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
