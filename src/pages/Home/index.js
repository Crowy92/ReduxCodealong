import React, {useState} from 'react';

export default function Home() {
  const [balance, setBalance] = useState(0)

  return (
    <div>
        <h3>Home Page: {balance}</h3>
    </div>
  )
}