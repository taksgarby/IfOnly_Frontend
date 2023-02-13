import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountrySelect = ({ifOnlyStocks}) => {
 
    const countryOptions = ifOnlyStocks.map((stock, id) => {
        
        return <option value={id} key={id}>{stock.country}</option>
        })

    return ( 
        <>
        <h5>Select Industry Type</h5>
        <select defaultValue="" >
        <option value="" selected>Select</option>
        {countryOptions}
        </select>
        </>
        );
  
}
 
export default CountrySelect;