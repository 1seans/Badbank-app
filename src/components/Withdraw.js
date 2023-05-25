import React, { useState, useEffect } from 'react';
import Accountindex from './Accountindex';

const Withdraw = () => {
  const [totalState, setTotalState] = useState(localStorage.getItem('totalState') || 0);
  const [withdrawal, setWithdrawal] = useState(0);
  const [isWithdrawal, setIsWithdrawal] = useState(true);
  const status = `Your Account Balance $ ${totalState}`;

  useEffect(() => {
    localStorage.setItem('totalState', totalState);
  }, [totalState]);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    setWithdrawal(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (withdrawal < 0) {
      alert("Invalid transaction: Invalid Number.");
      return;
    }

    let newTotal = Number(totalState) - withdrawal;

    if (newTotal < 0) {
      alert("Invalid transaction: Insufficient Funds.");
      return;
    }

    setTotalState(newTotal);

    const colorClass = 'red';
    const totalElement = document.getElementById('withdraw-total');
    totalElement.classList.add(colorClass);
  };

  return (
    <div className="total-container">
      <form className="total" onSubmit={handleSubmit}>
        <h1 id="withdraw-total">{status}</h1>
        <Accountindex onChange={handleChange} isDeposit={false}></Accountindex>
      </form>
    </div>
  );
};

export default Withdraw;
