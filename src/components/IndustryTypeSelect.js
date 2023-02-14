import React from "react";
import { Link } from "react-router-dom";

import "./Selecter.css";

const IndustryTypeSelect = ({ifOnlyStocks}) => {

    const uniqueIndustriesList = ifOnlyStocks
    .map((stock) => stock.industryType)
    .filter((value, index, self) => self.indexOf(value) === index);



return ( 
<>
<h5>Select Industry</h5>

    <ul>
        {uniqueIndustriesList.map((industry, i) => (
        <li key={`myKey${i}`}>
        <Link to={industry}>{industry}</Link>
        
    </li>
    ))}
    </ul>
    
</>
);

}
 
export default IndustryTypeSelect;