import React from 'react'
import styled from 'styled-components'

const employee = (props) => {
  
    // StyledCom.* returns react component
    const StyledCounter = styled.div`
    display:inline-block;
        border:1px solid black;
        box-shadow: 4px 4px 4px gray;
        padding : 10px;
        margin:5px;
        width:60%;

        @media (min-width: 1000px) {
            width:150px;
            background-color: lightgreen;
        };
    `;   

    return (
    <StyledCounter>
        <h2>ID: {props.Id}</h2>
        <h5>Name : {props.Name}</h5>
        <h5>Address : {props.Address}({props.children})</h5> 
        <h5><input type='text' onChange={props.EditText} value={props.Name} /> </h5>      
    </StyledCounter>    
    );
};

export default employee;