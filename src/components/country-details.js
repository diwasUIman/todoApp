import React from 'react';
import '../components.css';

function CountryDetailsList(props){
        return(
            <div>
                <li className="list">
                    <input type="checkbox" checked={props.Completed} onClick={() => props.handleCompleted(props.Key)} />
                    <label className={props.Completed ? 'completed' : ''}> {props.Name} </label>
                    <label style={{display:'block'}}> {props.City}, {props.Country}</label>
                    <br></br>
                </li>
            </div>
        )
}

export default CountryDetailsList;