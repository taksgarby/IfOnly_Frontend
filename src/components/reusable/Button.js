import React from "react";
import styled from "styled-components";

const Button = ({text, value, color, onClick, isDisabled=false}) => {

    const Button = styled.button`
    
        margin-left: 1rem;
        padding: 0.5rem;
        background: #66DFA;
        border-radius: 10%
  }
    `


    return ( 
        <Button disabled={isDisabled} color={color} value={value} onClick={onClick}>{text}</Button>
     );
}
 
export default Button;