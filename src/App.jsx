import React, { Component } from "react";
import DisplayCooperResult from './components/DisplayCooperResult';

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: ""
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  render() {
    return (
      <>
        <label>Distance</label>
        <input 
          name="distance" 
          id="distance"
          onChange={this.onChangeHandler}  
        ></input>
  
        <select onChange={this.onChangeHandler} name="gender" id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
  
        <label>Age</label>
        <input
          name="age"
          id="age"
          onChange={this.onChangeHandler}
        ></input>
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />
      </>
    );
  }
}

export default App;
