// import React from 'react';
import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.jsx";
import { SearchBox } from "./components/search-box/search-box.jsx";

//-------------------App----------------------------------//
// function App() {
// class App extends React.Component {
class App extends Component {
  //class: acces to state

  //-------------------state----------------------------------//
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    this.handleChange = this.handleChange.bind(this); //return new function, donde el contexto de this es lo que le pasemos
  }
  //-------------------functions----------------------------------//
  // when mount 1° first time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch(son)
      .then(response =>
        response.json().then(users => this.setState({ monsters: users }))
      );
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  //-------------------render----------------------------------//
  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);
    console.log(monsters);

    //-------------------return----------------------------------//
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
//-------------------export----------------------------------//
export default App;

// jsx: java script exprecion {1 + 2} = 3
