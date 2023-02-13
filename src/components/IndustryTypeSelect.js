import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const IndustryTypeSelect = ({ifOnlyStocks}) => {

    // const industries = ifOnlyStocks.industryType
    const industryTypeOptions = ifOnlyStocks.map((stock, id) => {
        return <option value={id} key={id}>{stock.industryType}</option>
    })
    return ( 
        <>
        <h5>Select Industry Type</h5>
        <select defaultValue="" >
        <option value="" selected>Select</option>
         {industryTypeOptions}
         </select>
         </>
     );
}
 
export default IndustryTypeSelect;