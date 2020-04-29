import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <>
      <label>Distance</label>
      <input name="distance" id="distance"></input>

      <select name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <label>Age</label>
      <input name="age" id="age"></input>
    </>
  );
}

export default App;
