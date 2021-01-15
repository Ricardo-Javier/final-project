import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							className="logo"
							src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
						/>
					</span>
				</Link>

				<p className="counter">3</p>
				{/* IT SHOULD BE LINKED TO THE CART VIEW */}
				<Link to="/demo">
					<button className="btn">
						<FontAwesomeIcon icon={faShoppingCart} />
					</button>
				</Link>
			</nav>
		</div>
	);
};
