import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "../../styles/demo.scss";

export const Appetizer = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<CardGroup>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional content.{" "}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional content.{" "}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardGroup>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
