import React from 'react';
import CountryDetailsList from './country-details';
import { getData, data, w3_mock } from "../service/w3-mock-service";

export default class CountryListClass extends React.Component{
    constructor(){
        super()
        this.state = {
            dataList : w3_mock
        };
    }

    render(){

        let countryDetails = this.state.dataList.records.map(item =>
            <CountryDetailsList Name={item.Name} City={item.City} Country={item.Country} />)

        return(
           <ul>
               {countryDetails}
           </ul>
        )
    }
}
