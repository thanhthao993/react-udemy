import React, {PureComponent} from 'react';

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

class Persons extends PureComponent{

  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Contractor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  focus(){
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   //return true; // true: the app is continue, false: we stops the progress
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked; // validate
  // }

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
        position={index}
        age={person.age} 
        ref={this.lastPersonRef}
        key={person.id}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        />
  });
  }
}

export default Persons;