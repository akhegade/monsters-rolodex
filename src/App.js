import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(users => {
        // console.log(users);
        return this.setState({monsters: users});
      })
      .catch(error => {
        // console.log(error);
        return this.setState({monsters: []});
      });
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  };

  render() {
    const {monsters, searchField} = this.state;

    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
