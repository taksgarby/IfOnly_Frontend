import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const IndustryTypeSelect = ({ifOnlyStocks}) => {

    const industryOptions = ifOnlyStocks
    .map((stock) => stock.industryType)
    .filter((value, index, self) => self.indexOf(value) === index);

return ( 
<>
<h5>Select Industry</h5>
<select defaultValue="" >
<option value="" defaultValue>Select</option>
{industryOptions.map((industry, i) => <option value ={industry} key={`myKey${i}`}>{industry}</option>)}
</select>
</>
);

}
 
export default IndustryTypeSelect;