import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CountryResult.css";
import Button from "../reusable/Button";
import { ModalContainer } from "../../containers/ModalContainer";
import { Filler } from "../Modal/Filler";
import NewModal from "../Modal/NewModal";


const UK = ({ifOnlyStocks}) => {

  const triggerText = 'Open Form';
   const onSubmit = (event) => {
   event.preventDefault(event);
   console.log(event.target.name.value);
   console.log(event.target.email.value);
 };

    const UKlist = ifOnlyStocks.map((stock, id) => {
        if(stock.country === "UK") {
            return (
            <ul key ={id} className = "result-list">    
            <li className="result-item">{stock.companyName}
            {/* <button>ShowModal</button> <Modal /> */}
            {/* <Button text="If Only..." value={stock.companyName} > */}
            {/* </Button> */}
            <ModalContainer triggerText={triggerText} onSubmit={onSubmit} />
            </li>
            </ul>
            )    
        }
    })

    return (
        <>
        <h3>UK Stock List</h3>

       {/* <MoneyInput/> */}
        {UKlist}
        </>



    );
}
 
export default UK;