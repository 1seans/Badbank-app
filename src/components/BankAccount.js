import React from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

const BankAccount = () => {
  const [totalState, setTotalState] = React.useState(0);

  const handleTransaction = (amount, isDeposit) => {
    const newTotal = isDeposit ? totalState + amount : totalState - amount;
    setTotalState(newTotal);
  };

  return (
    <div>
      <h2>Bank Account</h2>
      <Deposit onTransaction={handleTransaction} />
      <Withdraw onTransaction={handleTransaction} />
      <h2>Account Balance: {totalState}</h2>
    </div>
  );
};

export default BankAccount;
