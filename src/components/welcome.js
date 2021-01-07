import React from "react";
import ReactCOM from "react-dom";
import List from './List';
import CountryListClass from './country-list-class';

export default class Welcome extends React.Component {
    
    render() {
    const name = "milan";
        return (
            <div>
                {/* <h1> Welcome to the page, {name}</h1>
                <List Name="Javascript" /> */}
                <CountryListClass />
            </div>
        )
    }
}
