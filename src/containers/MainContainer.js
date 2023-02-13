import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainContainer = () => {

    const [ifOnlyStocks, setIfOnlyStocks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/ifonlystocks")
            .then((res) => res.json())
            .then((ifOnlyStocksData) => setIfOnlyStocks(ifOnlyStocksData));
    }, []);

    const getIfOnlyStockById = (id) => {
        ifOnlyStocks.find((ifOnlyStock) => ifOnlyStock.id === id);
    }

    const getIfOnlyStockByCountry = (country) => {
        ifOnlyStocks.find((ifOnlyStock) => ifOnlyStock.country === country);
    }

    const getIfOnlyStockByIndustryType = (industryType) => {
        ifOnlyStocks.find((ifOnlyStock) => ifOnlyStock.industryType === industryType);
    }

    return ( 
        <h3>Main Container</h3>
     );
}
 
export default MainContainer;