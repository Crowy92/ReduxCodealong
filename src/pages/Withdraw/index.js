import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Withdraw() {
    const balance = useSelector(state => state.balanceReducer.balance);
    const dispatch = useDispatch();

    function handleWithdraw() {
        dispatch({
            type: "WITHDRAW",
            payload: 100
        })
    }
  return (
    <div>
        <h3>Withdraw Page: {balance}</h3>
        <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  )
}
