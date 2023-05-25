import React from "react";
import { useLocation } from "react-router-dom";
import CreateAccount from './CreateAccount';

const Alldata = () => {
  const location = useLocation();
  const storedData = localStorage.getItem('formData');
  const [values, setValues] = React.useState(location.state && location.state.values ? location.state.values : (storedData ? JSON.parse(storedData) : null));
  
  React.useEffect(() => {
    if (values) {
      localStorage.setItem('formData', JSON.stringify(values ));
    }
  }, [values]);

  return (
    <div className="alldata-container">
    <h3>User Accounts:</h3>
    <div className="container-box">
      <table className="table table-hover">
        <tbody>
          {values && (
            <>
              <tr>
                <td><strong>Name</strong></td>
                <td><strong>Email</strong></td>
                <td><strong>Password</strong></td>
              </tr>
              <tr>
                <td>{values.name}</td>
                <td>{values.email}</td>
                <td>{values.password}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
</div>
  
  
  );
};

export default Alldata;