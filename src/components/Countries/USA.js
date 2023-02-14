import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CountryResult.css";
import Button from "../reusable/Button";

const USA = ({ifOnlyStocks}) => {



    const USAlist = ifOnlyStocks.map((stock, id) => {
        if(stock.country === "USA") {
            return (
            <ul key ={id} className = "result-list">    
            <li className="result-item">{stock.companyName}<Button text="If Only..."></Button></li>
            </ul>
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