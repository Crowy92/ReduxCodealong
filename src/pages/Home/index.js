import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
    const balance = useSelector(state => state.balanceReducer.balance)
    const loan = useSelector(state => state.loanReducer.loan)
    const dispatch = useDispatch()

    const onLoan = () => {
        dispatch({
            type: "APPLY"
        })
    }

  return (
    <div>
        <h3>Home Page: {balance}</h3>
        <button onClick={onLoan}>Give me a Loan</button>
        <h3>{loan && "loan approved"}</h3>
    </div>
  )
}
