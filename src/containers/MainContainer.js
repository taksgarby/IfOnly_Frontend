import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import USA from "../components/countries/USA";
import UK from "../components/countries/UK";
import Japan from "../components/countries/Japan";
import Finance from "../components/industries/Finance";
import Technology from "../components/industries/Technology";
import Retail from "../components/industries/Retail";

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
                 <Route path="usa" exact element={<USA />} />
                 <Route path="uk" exact element={<UK />} />
                 <Route path="japan" exact element={<Japan />} />
                 <Route path="technology" exact element={<Technology />} />
                 <Route path="finance" exact element={<Finance />} />
                 <Route path="retail" exact element={<Retail />} />
         
            </Routes>
        </Router>
        </>
     );
}
 
export default MainContainer;