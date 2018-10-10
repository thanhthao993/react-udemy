import React, {Component} from 'react';

import Person from './Person/Person';


// const Persons = (props) => props.persons.map((person, index) => {
//   return <Person 
//     name={person.name} 
//     age={person.age} 
//     key={person.id}
//     click={() => props.clicked(index)}
//     changed={(event) => props.changed(event, person.id)}
//     />
// });

// Converting Stateless to Stateful Components

class Persons extends Component{

  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Contractor', props);
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //return true; // true: the app is continue, false: we stops the progress
    return nextProps.persons !== this.props.persons; // validate
  }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
  }

  render(){
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => {
      return <Person 
        name={person.name} 
        age={person.age} 
        key={person.id}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        />
  });
  }
}

export default Persons;