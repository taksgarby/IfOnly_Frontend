import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const USA = ({ifOnlyStocks}) => {

    const ListWrapper = styled.div`
        color: blue;
        padding: 1rem;
    `

    const USAlist = ifOnlyStocks.map((stock, id) => {
        if(stock.country === "USA") {
            return (
            <ListWrapper key ={id}>    
            {stock.companyName}
            </ListWrapper>
            )    
        }
    })

    return (
        <>
        <h3>USA Stock List</h3>
        {USAlist}
        </>



    );
}
 
export default USA;