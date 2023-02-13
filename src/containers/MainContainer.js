import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";

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
        <>
        <Router>
            <Routes>
                <Route 
                    path="/"
                    exact
                    element={<Home ifOnlyStocks={ifOnlyStocks} setIfOnlyStocks={ifOnlyStocks} />}
                />
            </Routes>
        </Router>
        </>
     );
}
 
export default MainContainer;