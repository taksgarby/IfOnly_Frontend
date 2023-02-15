import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CountryResult.css";
import Button from "../reusable/Button";
import Modal from "../Modal/Modal";
import ReactDOM from 'react-dom/client';

const USA = ({ifOnlyStocks}) => {

    const [show, setShow] = useState(false)
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("")

    // function MoneyInput() {
    //     return (
    //       <form>
    //         <label>Choose Amount:
    //           <input type="number" />
    //         </label>
    //         <label>Choose Currency:
    //           <select currency={currency}>
    //             <option>USD</option>
    //             <option>GBP</option>
    //             <option>JPY</option>
    //           </select>
    //         </label>
    //         <button>Click</button>
    //       </form>
    //     )
    //   }
      
      

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
        <h4>If I had invested $1000 in ...</h4>
       {/* <MoneyInput/> */}
        {USAlist}
        </>



    );
}
 
export default USA;