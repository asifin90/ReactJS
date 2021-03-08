import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee/Employee';

//class App extends Component{
function App() {
  const [employee, setEmployee] = useState({
    employees:[
      {name: 'Arti', age:35, Address:'Pune'},
      {name: 'Nihal', age:30, Address:'Pune'},
      {name: 'John', age:30, Address:'New York'},
      {name: 'Lokesh', age:30, Address:'Nagpur'}
    ],     
  });

  const [headerMessage, setheaderMessage] = useState({
    Message : 'Employee List Of IT Department.'

  });
  
 const modifyData = (newname) => {    
  setEmployee({
    employees:[
      // Updating single propety like name wont work need to pass complete data again.
      {name: newname, age:35, Address:'Delhi'},
      {name: 'Nihal', age:30, Address:'Hyderabad'},
      {name: 'John', age:30, Address:'New York'},
      {name: 'Lokesh', age:30, Address:'Nagpur'}
    ]
  });
}

  return (
    <div className="App">
      <div className="App">
        <h1>{headerMessage.Message}</h1>          
        <Employee Id='101' Name={employee.employees[0].name} Address={employee.employees[0].Address}>India</Employee>
        <Employee Id='101' Name={employee.employees[1].name} Address={employee.employees[1].Address}>India</Employee>
        <Employee Id='102' Name={employee.employees[2].name} Address={employee.employees[2].Address}>India</Employee>
        <Employee Id='103' Name={employee.employees[3].name} Address={employee.employees[3].Address}>India</Employee>                
      </div>
      <button onClick={modifyData.bind(this,'Sameer')}>Modify Data</button>    
      <button onClick={() => modifyData('Samual')}>Modify Data</button> 
      <button onClick={ () => {
                                return modifyData('Manish');
                              }
                }>Modify Data</button> 
    </div>
  );
    
}

export default App;

