import React, {useState} from 'react';

export default function Deposit() {
  const [balance, setBalance] = useState(0)

  return (
    <div>
        <h3>Deposit Page: {balance}</h3>
    </div>
  )
}
