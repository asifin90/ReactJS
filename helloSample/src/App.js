import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee/Employee';

class App extends Component{
//function App() {
  state = {
    employees:[
      {name: 'Arti', age:35, Address:'Pune'},
      {name: 'Nihal', age:30, Address:'Pune'},
      {name: 'John', age:30, Address:'New York'},
      {name: 'Lokesh', age:30, Address:'Nagpur'}
    ]
  }


  render(){
    return (
      <div className="App">
        <div className="App">
          <h1>List of employees</h1>             
          <Employee Id='101' Name={this.state.employees[0].name} Address={this.state.employees[0].Address}>India</Employee>
          <Employee Id='101' Name={this.state.employees[1].name} Address={this.state.employees[1].Address}>India</Employee>
          <Employee Id='102' Name={this.state.employees[2].name} Address={this.state.employees[2].Address}>India</Employee>
          <Employee Id='103' Name={this.state.employees[3].name} Address={this.state.employees[3].Address}>India</Employee>                
        </div>
      </div>
    );
  }
    
}

export default App;



