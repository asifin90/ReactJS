import React from 'react';
import './Employee.css';
import Radium from 'radium';

const employee = (props) => {
    const mediaQueries = {
        '@media (min-width: 1000px)':{
            width:'150px',
            backgroundColor:'lightgreen'
        }
    }

    return (
    //<p> I'm Employee! </p>
    <div className='employee' onClick={props.clickEvent} style={mediaQueries}> 
        <h2>ID: {props.Id}</h2>
        <h5>Name : {props.Name}</h5>
        <h5>Address : {props.Address}({props.children})</h5> 
        <h5><input type='text' onChange={props.EditText} value={props.Name} /> </h5>      
    </div>
    );
};

export default Radium(employee);