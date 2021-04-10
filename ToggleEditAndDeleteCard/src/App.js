import React, { Component } from 'react';
import './App.css';
import Employee from './Employee/Employee';

class App extends Component {
  state = {
    employees: [
      { Id: 101, name: 'John', age: 29 },
      { Id: 102, name: 'Sam', age: 29 },
      { Id: 103, name: 'Yasin', age: 26 }
    ],
    showEmployees: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showEmployees;
    this.setState( { showEmployees: !doesShow } );
  }

  deleteEmp = (index) =>{
    let empl = this.state.employees;
    empl.splice(index, 1);
    this.setState({employees : empl});
  }

  updateNameHandler = (event, id)=> {

    const employeeIndex = this.state.employees.findIndex( p => { return p.Id === id} );

    const employee = {...this.state.employees[employeeIndex]};

    employee.name = event.target.value;

    const employees = [... this.state.employees];
    employees[employeeIndex] = employee;

    this.setState({employees:employees});

  };

  render() {
    let emp = null;
    if(this.state.showEmployees){
      emp  = (
        <div>              
              {
                this.state.employees.map((emp, index) => {
                return <Employee 
                //clickEvent={ ()=> this.deleteEmp(index) } 
                Id={emp.Id} Name={emp.name} Address={emp.age} key={emp.Id}
                EditText={(event) => this.updateNameHandler(event, emp.Id) }
                >India</Employee> 
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
