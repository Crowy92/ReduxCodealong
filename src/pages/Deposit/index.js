import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncDeposit } from '../../actions';

export default function Deposit() {
    const balance = useSelector(state => {
        console.log({state});
        return state.balanceReducer.balance
    });
    const loading = useSelector(state => state.balanceReducer.loading )
    const dispatch = useDispatch();

    function handleDeposit() {
        dispatch(asyncDeposit())
    }

  return (
    <div>
        <h3>Deposit Page: {balance}</h3>
        <button disabled={loading} onClick={handleDeposit}>Deposit</button>
    </div>
  )
}
