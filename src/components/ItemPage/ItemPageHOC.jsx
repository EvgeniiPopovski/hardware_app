import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Preloader from "../../common/Preloader/Preloader";
import {
	getHingesListTC,
	setInCartTC,
	setInLikedTC,
} from "../../redux/hingesListReduser";
import { getCartItemsTC, addToCartTC, removeFromCartTC } from "../../redux/cartReducer";
import { setLikedItemsTC, addToLikedTC, removeTC } from "../../redux/likedItemsReducer";

let mapStateToProps = (state) => {
	return {
		HingeInfo: state.HingesList.Hinges,
		isLoading: state.HingesList.isLoading,
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		getHingesList: () => {
			dispatch(getHingesListTC());
		},
		getCartItems: () => {
			dispatch(getCartItemsTC());
		},
		getLikedItems: () => {
			dispatch(setLikedItemsTC());
		},
		addToCart: (item, isInCart, quantity) => {
			dispatch(addToCartTC(item, isInCart, quantity));
		},
		setInCart: (item, isInCart, quantity) => {
			dispatch(setInCartTC(item, isInCart, quantity));
		},
		removeFromCart: (item) => {
			dispatch(removeFromCartTC(item));
		},
		setInLiked: (item) => {
			dispatch(setInLikedTC(item));
		},
		addToLikedTC: (item) => {
			dispatch(addToLikedTC(item));
		},
		removeFromLikedTC: (item) => {
			dispatch(removeTC(item));
		},
		
	};
};
export const PreloaderHOC = (Component) => {
	class RedirectComponent extends React.Component {
		filter() {
			const filteredItem = this.props.HingeInfo.filter(
				(hinge) => hinge.ArticleNumber === this.props.match.params.article
			);
			return filteredItem[0];
		}
		render() {
			if (this.props.HingeInfo.length) {
				return (
					<Component
						HingeInfo={this.filter()}
						addToCart={this.props.addToCart}
						setInCart={this.props.setInCart}
						removeFromCart={this.props.removeFromCart}
						addToLikedTC={this.props.addToLikedTC}
						removeFromLikedTC={this.props.removeFromLikedTC}
						setInLiked={this.props.setInLiked}
						getHingesList={this.props.getHingesList}
					/>
				);
			}

			return <Preloader />;
		}
	}

	let ConnectedRedirectComponent = withRouter(
		connect(mapStateToProps, mapDispatchToProps)(RedirectComponent)
	);
	return ConnectedRedirectComponent;
};
