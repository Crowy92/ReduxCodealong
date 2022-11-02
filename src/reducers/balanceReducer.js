const initialState = {
    balance: 1,
    loading: false
}

const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.payload, loading: false }
            break;
        case "WITHDRAW":
            return { ...state, balance: state.balance - action.payload, loading: false }    
            break;
        case "LOADING":
            return { ...state, loading: true }    
            break;
        default:
            return state;
    }
}

export default balanceReducer;