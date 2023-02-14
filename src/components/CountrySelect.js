import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountrySelect = ({ifOnlyStocks}) => {
   

  const uniqueCountriesList = ifOnlyStocks
            .map((stock) => stock.country)
            .filter((value, index, self) => self.indexOf(value) === index);


    return ( 
        <>
        <h5>Select Country</h5>
        <br></br>
        <ul>
        {uniqueCountriesList.map((country, i) => (
          <li key={`myKey${i}`}>
            <Link to={country}>{country}</Link>

            {/* <Link to="CountryView?country=:country">{country}</Link> */}
          </li>
        ))}
      </ul>        

        {/* <select defaultValue="" >
        <option value="" defaultValue>Select</option>
        {countryOptions.map((country, i) => <option value ={country} key={`myKey${i}`}>{country}</option>)}
        </select> */}
        </>
        );
  
}
 
export default CountrySelect;