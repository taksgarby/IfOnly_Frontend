import React from "react";
import styled from "styled-components";
import CountrySelect from "./CountrySelect";
import IndustryTypeSelect from "./IndustryTypeSelect";

const SelectContainer = styled.div`
   
    gap: 3rem;
    margin: 3rem;
`

const Home = ({ ifOnlyStocks, setIfOnlyStocks}) => {


    return (
        <>
        <SelectContainer>
            <CountrySelect ifOnlyStocks = {ifOnlyStocks} />
            <IndustryTypeSelect ifOnlyStocks = {ifOnlyStocks} />
        </SelectContainer>
        </>
      );
}
 
export default Home;

 // display: flex;
    // flex-wrap: wrap;
    // justfity-content: center;