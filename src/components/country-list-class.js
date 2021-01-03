import React from 'react';
import CountryDetailsList from './country-details';
import { getData, data, w3_mock } from "../service/w3-mock-service";

export default class CountryListClass extends React.Component{
    constructor(){
        super()
        this.state = {
            dataList : w3_mock.records,
            count : 0
        };
        this.handleCompleted = this.handleCompleted.bind(this);
    }

    handleCompleted(ind){
        let newList = this.state.dataList;
        newList[ind].completed = !newList[ind].completed
       this.setState( {dataList : newList})
       
    }

    handleCompletMap(ind){
        let newList = this.state.dataList.map((data, idx) => {
            if(ind === idx){
                data.completed = !data.completed
            }
            return data      
        })
        
        this.setState({dataList : newList})
    }

    handleIncrement(){
        const newCount = this.state.count + 1;
        this.setState({count : newCount})
    }

    triggerChnage(id){
        alert("from child" + id)
    }

    render(){

        let countryDetails = this.state.dataList.map((item,ind) =>
            <CountryDetailsList 
                Key={ind} 
                Name={item.Name} 
                City={item.City} 
                Country={item.Country} 
                Completed={item.completed}
                handleCompleted={this.handleCompletMap.bind(this)}
                handleIncrement={this.handleIncrement.bind(this)}
                />)

        return(
            <div>
                <button onClick={() => this.handleIncrement()}>Increase</button>
                <h2> {this.state.count}</h2>
                <ul>
                    {countryDetails}
                </ul>
           </div>
        )
    }
}
