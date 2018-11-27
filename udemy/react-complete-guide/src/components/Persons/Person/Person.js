import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

// const Person = (props) => {
//     return(
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     ); 
// }

// Converting Stateless to Stateful Components

class Person extends PureComponent{

    constructor(props){
        super(props);
        console.log('[Person.js] Inside Contractor', props);
        this.inputElement = React.createRef();
      }
    
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        if(this.props.position == 0){
          this.inputElement.current.focus();
        }
      }

      focus(){
        this.inputElement.current.focus();
      }

    render(){
        console.log('[Person.js] Inside render()');
        return(
            <Aux className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        ); 

        // return [
        //   <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //   <p key="2">{this.props.children}</p>,
        //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
    }
  }

  Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
  }

export default withClass(Person, classes.Person);