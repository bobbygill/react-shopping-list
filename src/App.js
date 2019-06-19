import React, { Component } from "react";
import "./App.css";
import DeleteButton from "./DeleteButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingItem: { itemName: "", counter: 0 },
      list: []
    };

    // have to start this at 1 so it matches below
    this.newCounter = 1;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.shoppingList = [];
  }

  handleChange(e) {
    const { name, value, checked, type } = e.target;
    // console.log("item name is", this.state.shoppingItem.itemName);
    console.log("handle change counter is", this.state.shoppingItem.counter);

    let newItem = { itemName: e.target.value, counter: this.newCounter };

    this.setState({
      //    [name]: type === 'checkbox' ? checked : value
      shoppingItem: newItem
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.newCounter = this.newCounter + 1;
    // console.log("new counter is", this.newCounter);

    let newItem = {
      itemName: this.state.shoppingItem.itemName,
      counter: this.newCounter
    };
    // console.log("new item counter is", newItem.counter);

    let list3 = this.state.list;
    list3.push(newItem);

    this.setState({
      list: list3
    });

    let newItem2 = { itemName: "", counter: this.newCounter };
    this.setState({
      shoppingItem: newItem2
    });

    // console.log(
    //   "after submit state counter is",
    //   this.state.shoppingItem.counter + 1
    // );
  }

  handleRemove(e) {
    // need to try adding item name + index together to create a unique id - done
    let newList = this.state.list.filter(
      x => e.target.id != x.itemName + x.counter.toString()
    );
    this.setState({ list: newList });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.handleSubmit}>
          <input
            name="shoppingItem"
            value={this.state.shoppingItem.itemName}
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
                <li key={item.itemName}>{item.itemName} </li>

                <DeleteButton
                  id={item.itemName + item.counter.toString()}
                  key={index}
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
