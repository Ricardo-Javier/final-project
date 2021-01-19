const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [
				{
					name: "Tomato Bisque",
					price: "$1.95",
					size: "cup",
					img: "#",
					description: "blah blah lorem foodum."
				},
				{
					name: "Ultimate Nachos",
					price: "$15.99",
					size: "plate",
					img: "https://images.pitboss-grills.com/catalog/recipes/1200px/IMG_0488.jpg",
					description:
						"If you're a nacho fan, these are a MUST! WARNING!\nThis is a tower of nachos, no ONE man can eat. Best shared with a group of 3-4 people. Stacked with ground beef (chicken on request), black beans, purple onions, green peppers, red peppers, and yellow peppers, wild rice, smothered in melted Smoked Gouda and shredded cheddar cheese, black olives, jalapeno's, sour cream, Guac, and salsa. This truely is a MONSTER of an appetizer."
				},
				{
					name: "Tomato Bisque",
					price: "$1.95",
					size: "cup",
					img: "#",
					description: "blah blah lorem foodum."
				},
				{
					name: "Tomato Bisque",
					price: "$1.95",
					size: "cup",
					img: "#",
					description: "blah blah lorem foodum."
				},
				{
					name: "Tomato Bisque",
					price: "$1.95",
					size: "cup",
					img: "#",
					description: "blah blah lorem foodum."
				},
				{
					name: "Tomato Bisque",
					price: "$1.95",
					size: "cup",
					img: "#",
					description: "blah blah lorem foodum."
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
