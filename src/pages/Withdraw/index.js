import React, {useState} from 'react';

export default function Withdraw() {
  const [balance, setBalance] = useState(0)

  return (
    <div>
        <h3>Withdraw Page: {balance}</h3>
    </div>
  )
}