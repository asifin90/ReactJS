import React from 'react';
import './Employee.css';

const employee = (props) => {
    return (
    //<p> I'm Employee! </p>
    <div className='employee'> 
        <h2>ID: {props.Id}</h2>
        <h5>Name : {props.Name}</h5>
        <h5>Address : {props.Address}({props.children})</h5>
    </div>
    );
};

export default employee;