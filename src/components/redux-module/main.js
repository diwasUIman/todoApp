import React from 'react';
import { connect } from 'react-redux';
import  getDataFromW3, { INCREMENT, getDataFromApiPlaceholder }  from '../../actions/countryAction'

class MainComponent extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        this.props.dispatch(getDataFromW3())
        this.props.dispatch(INCREMENT())
        this.props.dispatch(getDataFromApiPlaceholder())
    }

    render(){
        return (
        <div>
            <h1>I am countryDetails class </h1>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        data : state
    }
}

export default connect(mapStateToProps)(MainComponent)