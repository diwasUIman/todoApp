import React from "react";
import ReactCOM from "react-dom";
import CountryDetailsList from './country-details';
import { getData, data, w3_mock } from "../service/w3-mock-service";

function List(props){
    let countryDetails = w3_mock.records.map((item, ind) => 
        <CountryDetailsList key={ind} Name={item.Name} Country={item.Country} City={item.City}/>)

    return(
        // <ul>
        //     {countryDetails}
        // </ul>
        <h1> I love {props.Name}</h1>
    )
}

export default List