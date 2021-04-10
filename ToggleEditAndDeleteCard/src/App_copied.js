import React, { Component } from 'react';
import './App.css';
import Employee from './Employee/Employee';

class App extends Component {
  state = {
    employees: [
      { Id: 101, name: 'John', Address: 'Chennai' },
      { Id: 102, name: 'Sam', Address: 'Delhi' },
      { Id: 103, name: 'Yasin', Address: 'Nagpur' }
    ],
    showEmployees: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showEmployees;
    this.setState( { showEmployees: !doesShow } );
  }

  deleteEmp = (index) =>{
    //const persons = [...this.state.persons];
    //persons.splice(personIndex, 1);
    //this.setState({persons: persons});

    const emp = [...this.state.employees];
    emp.slice(index,1);
    this.setState({employees : emp})
  }

  render() {
    let emp = null;
    if(this.state.showEmployees){
      emp  = (
        <div>              
              {
                this.state.employees.map((emp, index) => {
                return <Employee 
                click={() => this.deleteEmp(index)}
                ID={this.state.employees.Id} 
                Name={this.state.employees.Name}
                Address={this.state.employees.Address}
                //key={this.state.employees.Id}
                changed={(event) => this.nameChangedHandler(event, this.state.employees.Id)} />
              })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>List of Employees</h1>        
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {emp}
      </div>
    );
  }
}
export default App;
