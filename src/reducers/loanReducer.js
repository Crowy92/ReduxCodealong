const initialState = {
    loan: false
}

const loanReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APPLY":
            return { loan : true }
        default:
            return state;
    }
}

export default loanReducer;