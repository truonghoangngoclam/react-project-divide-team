import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';
import style from './App.css';


class App extends Component {
  render() {
    return (
      <div className={style.App}>
          <div className="container">
            <h1>Hello worlk !!! my name is Jay </h1>
            <button className={style.button+" btn btn-primary btn-lg"}>Sothing with button</button>
            <Person name="MB" old="12">My baby</Person>
            <Person name="JAY" old="13">Jayja</Person>
          </div>
      </div>
    );
  }
}

export default App;
