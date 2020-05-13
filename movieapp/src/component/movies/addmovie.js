import React, { Component } from "react";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      name: "",
      items: [],
    };
  }

  onChange1(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  onChange2(event) {
    this.setState({
      name: event.target.value,
    });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      userInput: "",
      name: "",
      items: [...this.state.items, this.state.userInput, this.state.name],
    });
  }

  deleteTodo(item) {
    // no event
    // pass the item to indexOf
    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
      items: array,
    });
  }

  // add item to deleteTodo.bind(this, item)
  renderTodos() {
    return this.state.items.map((item) => {
      return (
        <div className="list-group-item" key={item}>
          {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form>
            <input type="text"  placeholder="name" onChange={e => {
            this.props.renfort(e.target.value);
          }}></input>
          <button onClick={e => {
            this.props.renfort(e.target.value);
          }} className="btn btn-primary">
            Ajouter
          </button>
        </form>
      
      </div>
    );
  }
}

export default AddMovie;