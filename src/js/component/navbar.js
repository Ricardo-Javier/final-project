import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "./Carticon";
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

				{/* IT SHOULD BE LINKED TO THE CART VIEW */}
				<Link to="/Cart">
					<CartIcon value={3} />
				</Link>
			</nav>
		</div>
	);
};
