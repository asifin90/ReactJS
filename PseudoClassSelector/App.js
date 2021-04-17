import React, { Component } from 'react';
import './App.css';
import Employee from './Employee/Employee';
import Radium, {StyleRoot} from 'radium';


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

  render() {
    const style = {
      backgroundColor: 'blue',
      border : '1px solid blue',
      padding: '8px',
      cursor : 'pointer',
      ':hover':{
        backgroundColor : 'purple',
        color:'white'
      }
    };

    const cssClass = []; //['textColor', 'textFormat'].join(' '); // cssclass = 'textColor textFormat'  

    if(this.state.employees.length <= 3)
       cssClass.push('textColor')
    if(this.state.employees.length <= 2)
       cssClass.push('textFormat')
    if(this.state.employees.length <= 1)
       cssClass.push('redColor')
    let emp = null;
    if(this.state.showEmployees){
      emp  = (
        <div>              
              {
                this.state.employees.map((emp, index) => {
                return <Employee 
                clickEvent={ ()=> this.deleteEmp(index) } 
                Id={emp.Id} Name={emp.name} Address={emp.age} 
                key={emp.Id}
                //EditText={(event) => this.updateNameHandler(event, emp.Id) }
                >India</Employee> 
              })}
        </div>
      );
      style.backgroundColor = 'orange';
      style[':hover'] = {
        backgroundColor : 'Yellow',
        color:'black'
      }
    }
    
    return (
      <StyleRoot>
      <div className="App">
        <h1 className = {cssClass.join(' ')} >List of Employees</h1>        
        <button style = {style} onClick={this.togglePersonsHandler}>Toggle Employees</button>
          {emp}
      </div>
      </StyleRoot>
    );

  }
}


export default Radium(App);
