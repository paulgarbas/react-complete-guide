import React, { Component } from 'react';
import classes from './App.css';
// import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	state = {
		persons: [
			{id: 1, name: 'Max', age: 28},
			{id: 2, name: 'Manu', age: 29},
			{id: 3, name: 'Stephanie', age: 26}
		],
		otherState: 'some other value',
		showPersons: false
	};

	changedNameHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(person => person.id === id);
		// const person = Obj.assign({}, this.state.persons[personIndex]);
		const person = {
			...this.state.persons[personIndex]
		};
		person.name = event.target.value;
		
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({persons});
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();	
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons});
	}
  
	render() {

		let persons = null;

		if (this.state.showPersons) {
			persons = <Persons 
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.changedNameHandler} />;
			// style[':hover'] = {
				// 	backgroundColor: 'salmon',
				// 	color: 'black'
				// }
			}
			
			return (
				// <StyleRoot>
				<div className={classes.App}>
				<Cockpit
					appTitle={this.props.title}
					persons={this.state.persons}
					showPersons={this.state.showPersons}
					toggle={this.togglePersonsHandler} />
				{persons}
			</div>
		// </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hello World'));
  }
}

// export default Radium(App);
export default App;

