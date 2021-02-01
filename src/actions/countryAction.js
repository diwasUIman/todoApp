import axios from 'axios'

const GET_DATA_ACTION = "GET_DATA";

export function country_action(data){
    return {
        type: GET_DATA_ACTION,
        data
    }
}

export const INCREMENT = () =>{
    return {
        type: "INCREMENT"
    }
}

export default function getDataFromW3() {
    return function (dispatch,getstate){
        return axios.get('https://www.w3schools.com/angular/customers.php')
        .then(response => {
            dispatch(country_action(response.data.records))
        })
        .catch(err => console.error('axios err', err))
    }
}

export function getDataFromApiPlaceholder() {
    return function(dispatch) {
        return axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(res => {
                        let users = res.data
                        dispatch({
                            type:"SUCCESS",
                            payload: users
                        })
                    })
                    .catch(error => {
                        // error.message is the error message
                        console.log('err', error.message)
                      })
    }
}

