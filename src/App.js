import React, { Component } from "react";
import "./App.css";
import DeleteButton from "./DeleteButton";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shoppingItem: "",
			list: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.shoppingList = [];
	}

	handleChange(e) {
		const { name, value, checked, type } = e.target;
		this.setState({
			//    [name]: type === 'checkbox' ? checked : value
			[name]: value
		});
	}

	handleSubmit(e) {
		// if (this.state.shoppingItem == "") {
		// 	e.preventDefault();
		// 	console.log("input cannot be blank");
		// }

		e.preventDefault();
		let list2 = [...this.state.list, this.state.shoppingItem];

		this.setState({
			list: list2
		});
		this.setState({
			shoppingItem: ""
		});
	}

	handleRemove(e) {
		// console.log("e.target.value", e.target.value); blank
		// console.log("e.target.id", e.target.id); apple
		// console.log(identifier);

		//if you add duplicate items to the list and hit delete, both are removed, need to try adding item name + index together to create a unique id
		let newList = this.state.list.filter(x => e.target.id != x);
		// let newList = this.state.list.filter(x => console.log(this.state.list.indexOf(x).toString()) + console.log(x.id) != identifier);
		this.setState({ list: newList });
	}

	render() {
		return (
			<div>
				<form className="App" onSubmit={this.handleSubmit}>
					<input
						name="shoppingItem"
						value={this.state.shoppingItem}
						placeholder="Shopping Item"
						onChange={this.handleChange}
					/>
					<button type="submit">Add to Shopping list</button>
				</form>

				<ul>
					{this.state.list.map((item, index) => {
						if (item == "") {
							return;
						}
						return (
							<div>
								<li key={item}>{item} </li>

								<DeleteButton
									id={item}
									index={index}
									onClick={this.handleRemove}
								/>
							</div>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default App;
