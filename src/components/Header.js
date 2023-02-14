import React from "react";
import styled from "styled-components";



const Header = () => {
    const HeaderStyle = styled.header`
        background-color: #0F5298; 
        color: white;
        display: flex;
        flex-direction: row;
        margin-bottom: 0px;

        justify-content: center;
        `

    return ( 
   
            <HeaderStyle>
                <h2>If Only ...</h2>
            </HeaderStyle>

     );
}
 
export default Header;