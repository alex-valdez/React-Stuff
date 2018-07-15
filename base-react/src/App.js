import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Alex', age: 21 },
      { name: 'Jacob', age: 16 },
      { name: 'Kenzi', age: 20 },

    ],

    otherState: 'some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {

      this.setState(
        {persons: [
          { name: newName, age: 21 },
          { name: 'Jacob', age: 16 },
          { name: 'Kenzi', age: 18 },
        ]}
      )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {persons: [
        { name: 'Alex', age: 21 },
        { name: event.target.value, age: 16 },
        { name: 'Kenzi', age: 20 },
      ]}
    )
  }

  // Toggles the form
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  

  

  render() {

     
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
      }

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div >
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this,'Max!')}
              changed={this.nameChangedHandler}
              />
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              />
          </div>
        );
      }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        
        <button 
        onClick={this.togglePersonsHandler}
        style={style}
        >Switch Name</button>

        {/* this actually is wshat lets us toggle */}
        {persons}   
      </div>
    );
  }
}

export default App;