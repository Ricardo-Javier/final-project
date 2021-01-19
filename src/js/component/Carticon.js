import React from "react";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartIcon = props => {
	const { value } = props;
	return (
		<div>
			<FontAwesomeIcon icon={faShoppingCart} />
			<Badge variant="danger">{value}</Badge>
		</div>
	);
};

CartIcon.propTypes = {
	value: PropTypes.number
};

//{
//    name: "burger",
//    price: "5.95",
//    customization: [
//        add
//    ]
//}
