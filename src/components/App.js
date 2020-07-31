import React, { useState } from "react";
import { MainContainer } from "./Main/Main";
import { BrowserRouter, Route } from "react-router-dom";
import ShowerHardwareContainer from "./SemiSections/ShowerHardware/ShowerHardwareContainer";
import BurgerMenu from "../common/BurgerMenu/BurgerMenu";
import './App.css'
import { ItemsListContainer } from "./ItemsList/ItemsListContainer";
import { ItemPageContainer } from "./ItemPage/ItemPage";
import { HeaderContainer } from "./Header/HeaderContainer";
import { CartContainer } from "./Cart/CartContainer";
// import { Auth } from "./Auth/Auth";
import { AuthContainer } from "./Auth/AuthContainer";


function App() {
	const [isOpened, setIsOpened] = useState(false);

	const toggleMenuOpen = () => {
		setIsOpened(!isOpened);
	};

	return (
		<div>
			<BrowserRouter>
				<HeaderContainer toggleMenuOpen={toggleMenuOpen} />
				<BurgerMenu toggleMenuOpen={toggleMenuOpen} isOpened={isOpened} />
				<Route exact path="/" component={MainContainer} />
				<Route exact path="/shower" component={ShowerHardwareContainer} />
				<Route exact path="/shower/showerHinges" component={ItemsListContainer} />
				<Route exact path="/shower/showerHinges/:article" component={ItemPageContainer} />
				<Route exact path="/cart" component={CartContainer}/>
				<Route exact path="/personal" component={AuthContainer}/>
				{/* <Route path = '/constructions' component={}/>
				<Route path = '/mirror' component={}/>
				<Route path = '/glassFurniture' component={}/> */}
			</BrowserRouter>
		</div>
	);
}

export default App;