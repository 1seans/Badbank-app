import React from 'react'

const Alldatacard = () => {
  const { formData } = useContext(FormDataContext);

  return (
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">email</th>
        <th scope="col">Password</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Password</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Password</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Password</td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Password</td>
      </tr>
    </tbody>
  </table>
  )
}

export default Alldatacard


localStorage.setItem('formData', JSON.stringify(values));

const formData = JSON.parse(localStorage.getItem('formData'));
console.log(formData);