const initialState = {
    W3Data: [],
    W3Obj: {},
    loading: true
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { ...state, 
                W3Data: [...state.W3Data, ...action.data],
                loading: false
            }

        case "INCREMENT":
            return {
                ...state,
                count: 2
            }
        case "SUCCESS":
            return { ...state, 
                ApiPlaceholderData: [action.payload],
                loading: false
            }

        default:
            return state;
    }
}

export default countryReducer;

