import React, { useState, useEffect } from 'react';
import Accountindex from './Accountindex';

const Deposit = () => {
  const [totalState, setTotalState] = useState(localStorage.getItem('totalState') || 0);
  const [deposit, setDeposit] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [invalidTransaction, setInvalidTransaction] = useState(false);
  const status = `Your Account Balance $ ${totalState}`;

  useEffect(() => {
    localStorage.setItem('totalState', totalState);
  }, [totalState]);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    setDeposit(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (deposit < 0) {
      alert('Please enter a valid amount');
      return;
    }
    if (!isDeposit && deposit > Number(totalState)) {
      setInvalidTransaction(true);
      return;
    }

    let newTotal = isDeposit ? Number(totalState) + deposit : Number(totalState) - deposit;
    setTotalState(newTotal);
    setInvalidTransaction(false);

    const colorClass = isDeposit ? 'green' : 'red';
    const totalElement = document.getElementById('deposit-total');
    totalElement.classList.add(colorClass);
  };

  return (
    <div className="total-container">
      <form className="total" onSubmit={handleSubmit}>
        <h1 id="deposit-total">{status}</h1>
        {invalidTransaction && <p style={{ color: 'red' }}>Transaction not valid. Insufficient funds.</p>}
        <Accountindex onChange={handleChange} isDeposit={true}></Accountindex>
      </form>
    </div>
  );
};

export default Deposit;

