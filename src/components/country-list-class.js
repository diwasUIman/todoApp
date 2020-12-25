import React from 'react';
import CountryDetailsList from './country-details';
import { getData, data, w3_mock } from "../service/w3-mock-service";

export default class CountryListClass extends React.Component{
    constructor(){
        super()
        this.state = {

        };
    }

    render(){
        let countryDetails = getData().then(item => item)
        console.log("print here " + countryDetails)
        return(
            <CountryDetailsList Name="Milan" />
        )
    }
}