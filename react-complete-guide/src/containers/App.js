import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Contractor', props);
    this.state = {
      persons: [
        {id: "sdfsd1", name: "Max", age: 28},
        {id: "sdfsf1", name: "Manu", age: 29},
        {id: "fcvdf1", name: "Stephanie", age: 26}
      ],
      otherState: "other state value",
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   //return true; // true: the app is continue, false: we stops the progress
  //   ///return nextProps.persons !== this.props.persons || nextProps.showPersons !== this.props.showPersons; // validate
  //   return nextState.persons !== this.props.persons || nextState.showPersons !== this.props.showPersons
  //   //return true;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
  }

  // state = {
  //   persons: [
  //     {id: "sdfsd1", name: "Max", age: 28},
  //     {id: "sdfsf1", name: "Manu", age: 29},
  //     {id: "fcvdf1", name: "Stephanie", age: 26}
  //   ],
  //   otherState: "other state value",
  //   showPersons: false
  // }

  switchNameHandler = (newName) =>{
    console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Thao Nguyen";
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]
    })
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1,
      }
    });
  }

  deletePersonHandler = (personIdx) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIdx, 1);
    this.setState({
      persons: persons
    })
  }

  render() {
    console.log('[App.js] Inside render()');

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit appTitle={this.props.title} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
