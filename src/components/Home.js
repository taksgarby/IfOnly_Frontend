import React from "react";
import styled from "styled-components";
import CountrySelect from "./CountnrySelect";
import IndustryTypeSelect from "./IndustryTypeSelect";

const SelectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justfity-content: center;
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