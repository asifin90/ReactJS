import {React } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee/Employee';

function App() {
  
  const [headerMessage, setheaderMessage] = useState({
    Message : 'Employee List Of IT Department.'
  });

const [ToggleData, SetToggleFlag] = useState(true);

const toggleData = ()=> {
  if(!ToggleData) SetToggleFlag(true);
  else SetToggleFlag(false);
}

  return (
    <div className="App">
      <button onClick={toggleData} > Toggle Data </button>
      {
        ToggleData ?
        <div>
          <div>
            <h1>{headerMessage.Message}</h1>          
            <Employee Id='101' Name='Abhijeet' Address='Satara' >India</Employee>
            <Employee Id='102' Name='Anup' Address='Nagpur' >India</Employee>                           
          </div>
        </div> 
        : null

      }
    </div>
  );
    
}

//export default App;