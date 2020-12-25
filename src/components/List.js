import React from "react";
import ReactCOM from "react-dom";
import CountryDetailsList from './country-details';
import { getData, data, w3_mock } from "../service/w3-mock-service";

function List(){
    let countryDetails = w3_mock.records.map((item, ind) => 
        <CountryDetailsList key={ind} Name={item.Name} Country={item.Country} City={item.City}/>)

    return(
        <ul>
            {countryDetails}
        </ul>
    )
}

export default List