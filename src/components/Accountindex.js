
function Accountindex({onChange, isDeposit}){
  const choice = ["Deposit", "Withdrawal"];
  const action = isDeposit ? choice[0] : choice[1];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
    <h2> {choice[Number(!isDeposit)]}</h2>
    <input type="number"  onChange={onChange}></input>
    <input type="submit" value={action}></input>
  </label>
  )

}
export default Accountindex;
