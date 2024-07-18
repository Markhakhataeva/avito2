import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
 
    width: ${props => props.width || "800px"};
    padding: 8px;
    border-radius: 8px;
    border: 1px solid gray;
    background-color: gray;
    color: white;
  &::-webkit-input-placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

function Input(props) {
  return (
   <InputStyle placeholder={props.placeholder}
               type={props.type}
               {...props}

   />
  );
}

export default Input;
