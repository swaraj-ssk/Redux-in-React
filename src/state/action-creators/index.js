export const depositMoney = (amount) =>{
    //we return function which takes function dispatch
    return (dispatch)=>{
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    //we return function which takes function dispatch
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}