import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'asoidf', name: 'Alex', age: 21 },
      { id: 'ljlk', name: 'Jacob', age: 16 },
      { id: 'klja', name: 'Kenzi', age: 20 },

    ],

    otherState: 'some other value',
    showPersons: false,
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // copy full array to safely edit the new one
    // could also do this
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // removes one element from the array
    this.setState({persons: persons}); // updates persons state w/ removed element

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copy full array to a new const to safely edit the new one and use it b/c original is a pointer
    // and can mess with the original data.
    const person = {
      ...this.state.persons[personIndex]
    }; 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(
      {persons: persons}
    );
  }

  // Toggles the form
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  

  

  render() {

     
      const style = {
        color: 'white',
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
      }

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div >
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
            {/* <Person 
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
              /> */}
          </div>
        );

        style.backgroundColor = 'red';
      }

      // let classes = ['red' ,'bold'].join(' '); // for classes in App.css. You can see it in the <p></p>
      let classes = [];
      if (this.state.persons.length <= 2) {
        classes.push('red');
      }
      if (this.state.persons.length <= 1) {
        classes.push('bold');
      }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        
        <button 
        onClick={this.togglePersonsHandler}
        style={style}
        >Toggle Persons</button>

        {/* this actually is wshat lets us toggle */}
        {persons}   
      </div>
    );
  }
}

export default App;