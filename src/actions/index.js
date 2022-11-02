export function deposit() {
    return { type: "DEPOSIT", payload: 100 }
}
export function loading() {
    return {type: 'LOADING'}
}

export function asyncDeposit() {
    return dispatch => {
        setTimeout(() => {
            dispatch(deposit())
        }, 2000)
        dispatch(loading())
    }
}