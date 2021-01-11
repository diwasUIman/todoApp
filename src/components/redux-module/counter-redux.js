import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { getMockApi } from '../../service/w3-mock-service';
import { createStore} from 'redux';


function Counter() {
    // store
    
    
    // actions
    const increment = () => {
        return {
            type: 'INCREMENT'
        }
    }
    
    const decrement = () => {
        return {
            type: 'DECREMENT'
        }
    }
    
    // reducer
    const counter = (state = 0, action) => {
        switch (action.type) {
            case "INCREMENT":
                return state + 1;
                
                case "DECREMENT":
                    return state - 1;
                }
            }
            
            let store = createStore(counter);
            
            // display it in console;
            store.subscribe(() => console.log(store.getState()));
            
            //dispatch
            store.dispatch(increment());
            
            return (
                <div> Counter : </div>
            )
            
        }
        
export default Counter