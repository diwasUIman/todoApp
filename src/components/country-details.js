import React from 'react';
import '../components.css';

function CountryDetailsList(props){
        return(
            <li className="list">
                <input type="checkbox" />
                <label> {props.Name} </label>
                <label style={{display:'block'}}> {props.City}, {props.Country}</label>
                <br></br>
            </li>
        )
}

export default CountryDetailsList;