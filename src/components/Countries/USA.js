import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CountryResult.css";
import Button from "../reusable/Button";
import Modal from "../Modal/Modal";
import ReactDOM from 'react-dom/client';

const USA = ({ifOnlyStocks}) => {

    const [show, setShow] = useState(false)

    function MoneyInput() {
        return (
          <form>
            <label>Choose Amount:
              <input type="number" />
            </label>
            <label>Choose Currency:
              <select>
                <option>USD</option>
                <option>GBP</option>
                <option>JPY</option>
              </select>
            </label>
          </form>
        )
      }
      
      

    const USAlist = ifOnlyStocks.map((stock, id) => {
        if(stock.country === "USA") {
            return (
            <ul key ={id} className = "result-list">    
            <li className="result-item">{stock.companyName}
            {/* <button>ShowModal</button> <Modal /> */}
            <Button text="If Only..." value={stock.companyName} onClick={()=>setShow(true)}>
            </Button><Modal onClose={()=>setShow(false)} show={show} ifOnlyStocks={ifOnlyStocks}/>
            </li>
            </ul>
            )    
        }
    })

    return (
        <>
        <h3>USA Stock List</h3>
       <MoneyInput/>
        {USAlist}
        </>



    );
}
 
export default USA;